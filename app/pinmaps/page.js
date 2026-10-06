"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import useSupercluster from 'use-supercluster'
import 'mapbox-gl/dist/mapbox-gl.css'

// Mapbox only works in the browser, so we load it with ssr: false
const Map = dynamic(() => import('react-map-gl/mapbox').then((mod) => mod.default), { ssr: false })
const Marker = dynamic(() => import('react-map-gl/mapbox').then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-map-gl/mapbox').then((mod) => mod.Popup), { ssr: false })

// Bigger cluster = bigger circle
const getClusterSize = (count) => {
  if (count < 5) return 'w-8 h-8'
  if (count < 10) return 'w-10 h-10'
  if (count < 25) return 'w-12 h-12'
  return 'w-14 h-14'
}

const MapsPage = () => {
  const router = useRouter()

  // ---------- STATE ----------
  const [logs, setLogs] = useState([])               // all logs that have coordinates
  const [loading, setLoading] = useState(true)       // show "Loading map..." until data comes
  const [selectedLog, setSelectedLog] = useState(null) // the pin the user clicked (for popup)
  const [bounds, setBounds] = useState(null)         // visible area of the map
  const [viewState, setViewState] = useState({
    longitude: 78.9629, // centered around India
    latitude: 20.5937,
    zoom: 4,
  })

  // ---------- FETCH LOGS ----------
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch('/api/logs')
        const data = await res.json()

        if (data.success) {
          // keep only logs which have lat and lng
          const logsWithCoords = data.logs.filter((log) => log.lat && log.lng)
          setLogs(logsWithCoords)
        }
      } catch (error) {
        console.error('Failed to fetch logs:', error)
      }
      setLoading(false)
    }

    fetchLogs()
  }, [])

  // ---------- BACK BUTTON ----------
  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  // ---------- SAVE VISIBLE MAP AREA ----------
  // Called when the map loads and every time the user moves/zooms it.
  // Result looks like: [west, south, east, north]
  const updateBounds = (event) => {
    const mapBounds = event.target.getBounds().toArray().flat()
    setBounds(mapBounds)
  }

  // ---------- CONVERT LOGS TO GEOJSON ----------
  // supercluster only understands this format. Note: longitude comes FIRST.
  const points = logs.map((log) => ({
    type: 'Feature',
    properties: { cluster: false, log: log },
    geometry: {
      type: 'Point',
      coordinates: [log.lng, log.lat],
    },
  }))

  // ---------- GROUP NEARBY PINS ----------
  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds: bounds,
    zoom: viewState.zoom,
    options: { radius: 60, maxZoom: 16 },
  })

  // ---------- CLICK ON A CLUSTER ----------
  // Zoom in so the cluster breaks into smaller parts
  const handleClusterClick = (clusterId, longitude, latitude) => {
    const newZoom = Math.min(supercluster.getClusterExpansionZoom(clusterId), 20)
    setViewState({ ...viewState, longitude, latitude, zoom: newZoom })
  }

  // ---------- UI ----------
  return (
    <div className="relative w-full h-screen">
      {/* Back button */}
      <button onClick={handleBack} type="button" className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#2D4B37] shadow-md hover:bg-[#f7f5f0]">
        <ArrowLeft size={16} />
        Back
      </button>

      {loading ? (
        <div className="w-full h-full flex items-center justify-center bg-[#f7f5f0]">
          <p className="text-sm text-gray-500">Loading map...</p>
        </div>
      ) : (
        <Map mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} {...viewState} onLoad={updateBounds}
          onMove={(event) => {
            setViewState(event.viewState)
            updateBounds(event)
          }}
          className="w-full h-full" mapStyle="mapbox://styles/mapbox/light-v11">
          {clusters.map((item) => {
            const [longitude, latitude] = item.geometry.coordinates
            const isCluster = item.properties.cluster

            // CASE 1: it's a group of logs = show a green circle with a number
            if (isCluster) {
              const count = item.properties.point_count

              return (
                <Marker key={`cluster-${item.id}`} longitude={longitude} latitude={latitude} onClick={() => handleClusterClick(item.id, longitude, latitude)}>
                  <div className={`flex items-center justify-center rounded-full bg-[#2D4B37] text-white text-xs font-bold shadow-md cursor-pointer ${getClusterSize(count)}`}>
                    {count}
                  </div>
                </Marker>
              )
            }

            // CASE 2: it's a single log = show a small green dot
            const log = item.properties.log

            return (
              <Marker
                key={`log-${log._id}`}
                longitude={longitude}
                latitude={latitude}
                onClick={(e) => {
                  e.originalEvent.stopPropagation()
                  setSelectedLog(log)
                }}
              >
                <div className="w-3 h-3 rounded-full bg-[#2D4B37] border-2 border-white shadow-md cursor-pointer" />
              </Marker>
            )
          })}

          {/* Popup shows only when a pin is selected */}
          {selectedLog && (
            <Popup longitude={selectedLog.lng} latitude={selectedLog.lat} onClose={() => setSelectedLog(null)} closeOnClick={false} anchor="bottom" >
              <Link href={`/logs/${selectedLog._id}`} className="block w-48">
                {selectedLog.coverPhoto && (
                  <img src={selectedLog.coverPhoto} alt={selectedLog.title} className="w-full h-24 object-cover rounded-md mb-2"/> )}
                <p className="text-sm font-semibold text-[#1c1c19]">{selectedLog.title}</p>
                <p className="text-xs text-gray-500">
                  {selectedLog.city}, {selectedLog.country}
                </p>
              </Link>
            </Popup>
          )}
        </Map>
      )}
    </div>
  )
}

export default MapsPage
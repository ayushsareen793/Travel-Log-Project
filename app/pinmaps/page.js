"use client"
import React, { useEffect, useState, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import useSupercluster from 'use-supercluster'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = dynamic(() => import('react-map-gl/mapbox').then((mod) => mod.default), { ssr: false })
const Marker = dynamic(() => import('react-map-gl/mapbox').then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-map-gl/mapbox').then((mod) => mod.Popup), { ssr: false })

const MapsPage = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedLog, setSelectedLog] = useState(null)
  const mapRef = useRef(null)

  const [viewState, setViewState] = useState({
    longitude: 78.9629, // centered roughly around india
    latitude: 20.5937,
    zoom: 4,
  })

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch('/api/logs')
        const data = await res.json()
        if (data.success) {
          // only keep logs jinke actual coordinates fill kiye h 
          const withCoords = data.logs.filter((log) => log.lat && log.lng)
          setLogs(withCoords)
        }
      } catch (err) {
        console.error('Failed to fetch logs:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchLogs()
  }, [])

  // logs ko geo json me convert krta h taaki supercluster ko samajha aae
  const points = logs.map((log) => ({
    type: 'Feature',
    properties: { cluster: false, logId: log._id, log },
    geometry: {
      type: 'Point',
      coordinates: [log.lng, log.lat],
    },
  }))

  // current visible map bounds, needed so supercluster only clusters what's on screen
  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewState.zoom,
    options: { radius: 60, maxZoom: 16 },
  })

  const handleClusterClick = useCallback((clusterId, longitude, latitude) => {
    const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(clusterId), 20)
    setViewState((prev) => ({
      ...prev,
      longitude,
      latitude,
      zoom: expansionZoom,
    }))
  }, [supercluster])

  return (
    <div className="w-full h-screen">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center bg-[#f7f5f0]">
          <p className="text-sm text-gray-500">Loading map...</p>
        </div>
      ) : (
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/light-v11"
        >
          {clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates
            const { cluster: isCluster, point_count: pointCount } = cluster.properties

            // render a numbered cluster bubble
            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  longitude={longitude}
                  latitude={latitude}
                  onClick={() => handleClusterClick(cluster.id, longitude, latitude)}
                >
                  <div
                    className="flex items-center justify-center rounded-full bg-[#2D4B37] text-white font-bold shadow-md cursor-pointer hover:scale-110 transition-transform"
                    style={{
                      width: `${28 + (pointCount / points.length) * 30}px`,
                      height: `${28 + (pointCount / points.length) * 30}px`,
                      fontSize: '12px',
                    }}
                  >
                    {pointCount}
                  </div>
                </Marker>
              )
            }

            // render a single log pin
            const log = cluster.properties.log
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
                <div className="w-3 h-3 rounded-full bg-[#2D4B37] border-2 border-white shadow-md cursor-pointer hover:scale-125 transition-transform" />
              </Marker>
            )
          })}

          {selectedLog && (
            <Popup
              longitude={selectedLog.lng}
              latitude={selectedLog.lat}
              onClose={() => setSelectedLog(null)}
              closeOnClick={false}
              anchor="bottom"
            >
              <a href={`/logs/${selectedLog._id}`} className="block w-48">
                {selectedLog.coverPhoto && (
                  <img
                    src={selectedLog.coverPhoto}
                    alt={selectedLog.title}
                    className="w-full h-24 object-cover rounded-md mb-2"
                  />
                )}
                <p className="text-sm font-semibold text-[#1c1c19]">{selectedLog.title}</p>
                <p className="text-xs text-gray-500">{selectedLog.city}, {selectedLog.country}</p>
              </a>
            </Popup>
          )}
        </Map>
      )}
    </div>
  )
}

export default MapsPage
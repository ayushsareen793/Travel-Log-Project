"use client"
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

const page = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const fileinputref = useRef(null)
  
  // states for all fields
  const [title, setTitle] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [dateOfVisit, setDateOfVisit] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [about, setAbout] = useState('')
  const [bestTimeToVisit, setBestTimeToVisit] = useState('')
  const [howToGetThere, setHowToGetThere] = useState('')
  const [gem1, setGem1] = useState('')
  const [gem2, setGem2] = useState('')
  const [whereToEat, setWhereToEat] = useState('')
  const [whereToStay, setWhereToStay] = useState('')
  const [thingsToAvoid, setThingsToAvoid] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  //for coverpic
  const [pic, setpic] = useState(null)

  // Toggle category
  const toggleCategory = (label) => {
    setSelectedCategories((prev) => prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label])
  }

  const isActive = (label) => selectedCategories.includes(label)

  //image upload using cloudinary
  const uploadimage = async () => {
    if (!pic) {
      return null
    }
    const data = new FormData();
    data.append('file', pic);
    data.append('upload_preset', 'travellog_uploads');
    const res = await fetch("https://api.cloudinary.com/v1_1/dxey00jzp/image/upload", { method: "POST", body: data });
    const d = await res.json()
    return d.secure_url
  }

  // submit handler
  const handleSubmit = async () => {
    if (!session) { router.push('/Login'); return }
    if (!title || !country || !city) { setError('Please fill in the title, country and city.'); return }
    setLoading(true)
    setError('')
    try {
      const imageurl = await uploadimage()
      const data = { title, country, city, dateOfVisit, categories: selectedCategories, about, bestTimeToVisit, howToGetThere, hiddenGems: [gem1, gem2].filter((g) => g.trim() !== ''), whereToEat, whereToStay, thingsToAvoid, coverPhoto: imageurl }
      const res = await fetch('/api/logs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const result = await res.json()
      if (result.success) { router.push('/explorelogs') } else { setError(result.error || 'Something went wrong.') }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const formattedDate = dateOfVisit
    ? new Date(dateOfVisit).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : null


  return (
    <div className="w-full min-h-screen bg-[#f7f5f0]">

      {/* heading section */}
      <div className="relative min-h-[70vh] flex flex-col overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&auto=format" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-b from-[#142819]/85 via-[#142819]/55 to-[#f7f5f0]" />

        <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-16 pt-16 pb-14">
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#a8d5b5] mb-6">New Log Entry</p>

          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Name Your Journey.." maxLength={80} className="w-full bg-transparent text-white placeholder:text-white/30 font-bold text-4xl md:text-6xl leading-tight focus:outline-none border-b-2 border-white/20 focus:border-[#a8d5b5] pb-3 transition-colors duration-150" />

          <div className="flex flex-wrap items-center gap-2 mt-6">
            <img src="https://img.icons8.com/color/48/marker.png" className="w-4 h-4" />
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="w-28 bg-transparent text-white placeholder:text-white/30 text-sm border-b border-white/20 focus:outline-none focus:border-[#a8d5b5] pb-0.5 transition-colors duration-150" />
            <span className="text-white/40 text-sm">/</span>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" className="w-32 bg-transparent text-white placeholder:text-white/30 text-sm border-b border-white/20 focus:outline-none focus:border-[#a8d5b5] pb-0.5 transition-colors duration-150" />
            {formattedDate && (<><span className="text-white/30 text-sm mx-1">·</span><span className="text-white/60 text-sm">{formattedDate}</span></>)}
            <input type="date" value={dateOfVisit} onChange={(e) => setDateOfVisit(e.target.value)} className="ml-2 text-xs text-white/60 bg-white/10 border border-white/10 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#a8d5b5] transition-all duration-150" />
          </div>
        </div>
      </div>





      {error && (<div className="px-6 md:px-16 mt-6"><div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">{error}</div></div>)}




      {/* category */}
      <div className="mt-16 px-6 md:px-16 mb-4">
        <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37]">Category</p>
      </div>
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-12 px-6 md:px-16 w-max">
          <button type="button" onClick={() => toggleCategory('Mountains')} className={`flex flex-col items-center justify-center gap-2 w-32 h-36 rounded-2xl border-2 shrink-0 transition-all duration-150 ${isActive('Mountains') ? 'bg-[#2D4B37] border-[#2D4B37] shadow-lg shadow-[#2D4B37]/25' : 'bg-white border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
            <img src="https://img.icons8.com/color/48/mountain.png" className={`w-8 h-8 ${isActive('Mountains') ? 'brightness-[10]' : ''}`} />
            <span className={`text-xs font-semibold ${isActive('Mountains') ? 'text-white' : 'text-[#1c1c19]'}`}>Mountains</span>
          </button>
          <button type="button" onClick={() => toggleCategory('Beaches')} className={`flex flex-col items-center justify-center gap-2 w-32 h-36 rounded-2xl border-2 shrink-0 transition-all duration-150 ${isActive('Beaches') ? 'bg-[#2D4B37] border-[#2D4B37] shadow-lg shadow-[#2D4B37]/25' : 'bg-white border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
            <img src="https://img.icons8.com/color/48/beach.png" className={`w-8 h-8 ${isActive('Beaches') ? 'brightness-[10]' : ''}`} />
            <span className={`text-xs font-semibold ${isActive('Beaches') ? 'text-white' : 'text-[#1c1c19]'}`}>Beaches</span>
          </button>
          <button type="button" onClick={() => toggleCategory('City Breaks')} className={`flex flex-col items-center justify-center gap-2 w-32 h-36 rounded-2xl border-2 shrink-0 transition-all duration-150 ${isActive('City Breaks') ? 'bg-[#2D4B37] border-[#2D4B37] shadow-lg shadow-[#2D4B37]/25' : 'bg-white border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
            <img src="https://img.icons8.com/color/48/city.png" className={`w-8 h-8 ${isActive('City Breaks') ? 'brightness-[10]' : ''}`} />
            <span className={`text-xs font-semibold ${isActive('City Breaks') ? 'text-white' : 'text-[#1c1c19]'}`}>City Breaks</span>
          </button>
          <button type="button" onClick={() => toggleCategory('Food Trails')} className={`flex flex-col items-center justify-center gap-2 w-32 h-36 rounded-2xl border-2 shrink-0 transition-all duration-150 ${isActive('Food Trails') ? 'bg-[#2D4B37] border-[#2D4B37] shadow-lg shadow-[#2D4B37]/25' : 'bg-white border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
            <img src="https://img.icons8.com/color/48/food-bar.png" className={`w-8 h-8 ${isActive('Food Trails') ? 'brightness-[10]' : ''}`} />
            <span className={`text-xs font-semibold ${isActive('Food Trails') ? 'text-white' : 'text-[#1c1c19]'}`}>Food Trails</span>
          </button>
          <button type="button" onClick={() => toggleCategory('Off-the-grid')} className={`flex flex-col items-center justify-center gap-2 w-32 h-36 rounded-2xl border-2 shrink-0 transition-all duration-150 ${isActive('Off-the-grid') ? 'bg-[#2D4B37] border-[#2D4B37] shadow-lg shadow-[#2D4B37]/25' : 'bg-white border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
            <img src="https://img.icons8.com/color/48/compass.png" className={`w-8 h-8 ${isActive('Off-the-grid') ? 'brightness-[10]' : ''}`} />
            <span className={`text-xs font-semibold ${isActive('Off-the-grid') ? 'text-white' : 'text-[#1c1c19]'}`}>Off-the-grid</span>
          </button>
          <button type="button" onClick={() => toggleCategory('Camping')} className={`flex flex-col items-center justify-center gap-2 w-32 h-36 rounded-2xl border-2 shrink-0 transition-all duration-150 ${isActive('Camping') ? 'bg-[#2D4B37] border-[#2D4B37] shadow-lg shadow-[#2D4B37]/25' : 'bg-white border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
            <img src="https://img.icons8.com/color/48/camping-tent.png" className={`w-8 h-8 ${isActive('Camping') ? 'brightness-[10]' : ''}`} />
            <span className={`text-xs font-semibold ${isActive('Camping') ? 'text-white' : 'text-[#1c1c19]'}`}>Camping</span>
          </button>
          <button type="button" onClick={() => toggleCategory('Train Travel')} className={`flex flex-col items-center justify-center gap-2 w-32 h-36 rounded-2xl border-2 shrink-0 transition-all duration-150 ${isActive('Train Travel') ? 'bg-[#2D4B37] border-[#2D4B37] shadow-lg shadow-[#2D4B37]/25' : 'bg-white border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
            <img src="https://img.icons8.com/color/48/train.png" className={`w-8 h-8 ${isActive('Train Travel') ? 'brightness-[10]' : ''}`} />
            <span className={`text-xs font-semibold ${isActive('Train Travel') ? 'text-white' : 'text-[#1c1c19]'}`}>Train Travel</span>
          </button>
          <button type="button" onClick={() => toggleCategory('Road Trip')} className={`flex flex-col items-center justify-center gap-2 w-32 h-36 rounded-2xl border-2 shrink-0 transition-all duration-150 ${isActive('Road Trip') ? 'bg-[#2D4B37] border-[#2D4B37] shadow-lg shadow-[#2D4B37]/25' : 'bg-white border-[#e8e4da] hover:border-[#2D4B37]/40'}`}>
            <img src="https://img.icons8.com/color/48/road.png" className={`w-8 h-8 ${isActive('Road Trip') ? 'brightness-[10]' : ''}`} />
            <span className={`text-xs font-semibold ${isActive('Road Trip') ? 'text-white' : 'text-[#1c1c19]'}`}>Road Trip</span>
          </button>
        </div>
      </div>




      {/* cover photo  */}
      <div className="px-6 md:px-16 mt-4">
        <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Cover Photo</p>

        <input ref={fileinputref} onChange={(e) => setpic(e.target.files[0])} type="file" accept="image/*" className="hidden" />

        {pic ? (
          <div onClick={() => fileinputref.current.click()} className="relative rounded-3xl overflow-hidden cursor-pointer group">
            <img src={URL.createObjectURL(pic)} className="w-full h-72 object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-150 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#2D4B37] text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full">Change Photo</span>
            </div>
          </div>
        ) : (
          <div onClick={() => fileinputref.current.click()} className="border-2 border-dashed border-[#e8e4da] rounded-3xl cursor-pointer hover:border-[#2D4B37] transition-all duration-150">
            <div className="h-72 bg-white hover:bg-[#f4f9f6] transition-colors duration-150 flex flex-col items-center justify-center gap-3 rounded-3xl">
              <img src="https://img.icons8.com/color/96/image.png" className="w-14 h-14" />
              <p className="text-sm font-medium text-[#1c1c19]">Click to upload cover photo</p>
              <p className="text-xs text-gray-400">PNG, JPG or WEBP · Max 5MB</p>
            </div>
          </div>
        )}
      </div>






      {/* your log  */}
      <div className="mt-16 bg-[#2D4B37] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(255,255,255,0.15) 31px, rgba(255,255,255,0.15) 32px)' }} />
        <div className="relative z-10 px-6 md:px-16 py-16">
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#a8d5b5] mb-8">Your Log</p>

          <div className="mb-8">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#a8d5b5] mb-3">About Place</label>
            <textarea value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Describe the place: what made it special, what it felt like, memorable moments, local culture, food, or anything that stood out." maxLength={2000} rows={6} className="w-full bg-transparent text-white/90 placeholder:text-white/25 text-sm leading-8 focus:outline-none resize-none border-b border-white/10 focus:border-[#a8d5b5] transition-colors duration-150 pb-2" />
            <div className="text-right text-[10px] text-white/25 mt-1">{about.length}/2000</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#a8d5b5] mb-3">Best Time To Visit</label>
              <input type="text" value={bestTimeToVisit} onChange={(e) => setBestTimeToVisit(e.target.value)} placeholder="eg. OffSeason or October/September" className="w-full bg-transparent text-white/90 placeholder:text-white/25 text-sm border-b border-white/10 focus:border-[#a8d5b5] focus:outline-none py-2 transition-colors duration-150" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#a8d5b5] mb-3">How To Get There</label>
              <textarea value={howToGetThere} onChange={(e) => setHowToGetThere(e.target.value)} placeholder="e.g. Transportation Options, Best Route To Get There" className="w-full bg-transparent text-white/90 placeholder:text-white/25 text-sm border-b border-white/10 focus:border-[#a8d5b5] focus:outline-none py-2 transition-colors duration-150 resize-none" />
            </div>
          </div>
        </div>
      </div>





      {/* hidden gems  */}
      <div className="px-6 md:px-16 py-16">
        <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-1.5">Hidden Gems</p>
        <p className="text-sm text-gray-500 mb-8">Add the underrated spots only you know about.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative bg-white rounded-2xl border-2 border-dashed border-[#e8e4da] p-6 hover:border-[#2D4B37]/40 transition-colors duration-150">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#eef5f1] flex items-center justify-center shrink-0">
                <img src="https://img.icons8.com/color/48/diamond.png" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37]/40 mb-2">Gem 1</p>
                <textarea value={gem1} onChange={(e) => setGem1(e.target.value)} placeholder="eg. Food Spots" rows={3} className="w-full bg-transparent text-sm text-[#1c1c19] placeholder:text-gray-400 focus:outline-none resize-none leading-relaxed" />
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-2xl border-2 border-dashed border-[#e8e4da] p-6 hover:border-[#2D4B37]/40 transition-colors duration-150">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#eef5f1] flex items-center justify-center shrink-0">
                <img src="https://img.icons8.com/color/48/diamond.png" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#2D4B37]/40 mb-2">Gem 2</p>
                <textarea value={gem2} onChange={(e) => setGem2(e.target.value)} placeholder="eg. Secret Waterfall Between The Trek" rows={3} className="w-full bg-transparent text-sm text-[#1c1c19] placeholder:text-gray-400 focus:outline-none resize-none leading-relaxed" />
              </div>
            </div>
          </div>
        </div>
      </div>






      {/* tips and recommendation  */}
      <div className="bg-white border-t border-[#e8e4da] py-16">
        <div className="px-6 md:px-16">
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-8">Tips & Recommendations</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b-2 border-[#e8e4da]">
                <img src="https://img.icons8.com/color/48/restaurant.png" className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D4B37]">Where To Eat</span>
              </div>
              <textarea value={whereToEat} onChange={(e) => setWhereToEat(e.target.value)} placeholder="e.g. Your Favourite Spots, Local Dishes." rows={5} className="flex-1 bg-transparent text-sm text-[#1c1c19] placeholder:text-gray-400 focus:outline-none resize-none leading-relaxed" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b-2 border-[#e8e4da]">
                <img src="https://img.icons8.com/color/48/bed.png" className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D4B37]">Where To Stay</span>
              </div>
              <textarea value={whereToStay} onChange={(e) => setWhereToStay(e.target.value)} placeholder="e.g. Budget Hotels, Areas To Stay" rows={5} className="flex-1 bg-transparent text-sm text-[#1c1c19] placeholder:text-gray-400 focus:outline-none resize-none leading-relaxed" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b-2 border-red-100">
                <img src="https://img.icons8.com/color/48/error--v1.png" className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">Things To Avoid</span>
              </div>
              <textarea value={thingsToAvoid} onChange={(e) => setThingsToAvoid(e.target.value)} placeholder="e.g. Tourist Traps, What Not To Do.." rows={5} className="flex-1 bg-transparent text-sm text-[#1c1c19] placeholder:text-gray-400 focus:outline-none resize-none leading-relaxed" />
            </div>
          </div>
        </div>
      </div>

      {/*  publish log */}
      <div className="relative bottom-0 z-50 bg-[#f7f5f0]/95 backdrop-blur-md border-t border-[#e8e4da] px-6 md:px-16 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-wrap gap-1.5">
            {selectedCategories.length === 0 && (<span className="text-xs text-gray-400 italic">No categories selected</span>)}
            {selectedCategories.includes('Mountains') && (<span className="text-[10px] bg-[#eef5f1] text-[#2D4B37] px-2.5 py-1 rounded-full font-medium">Mountains</span>)}
            {selectedCategories.includes('Beaches') && (<span className="text-[10px] bg-[#eef5f1] text-[#2D4B37] px-2.5 py-1 rounded-full font-medium">Beaches</span>)}
            {selectedCategories.includes('City Breaks') && (<span className="text-[10px] bg-[#eef5f1] text-[#2D4B37] px-2.5 py-1 rounded-full font-medium">City Breaks</span>)}
            {selectedCategories.includes('Food Trails') && (<span className="text-[10px] bg-[#eef5f1] text-[#2D4B37] px-2.5 py-1 rounded-full font-medium">Food Trails</span>)}
            {selectedCategories.includes('Off-the-grid') && (<span className="text-[10px] bg-[#eef5f1] text-[#2D4B37] px-2.5 py-1 rounded-full font-medium">Off-the-grid</span>)}
            {selectedCategories.includes('Camping') && (<span className="text-[10px] bg-[#eef5f1] text-[#2D4B37] px-2.5 py-1 rounded-full font-medium">Camping</span>)}
            {selectedCategories.includes('Train Travel') && (<span className="text-[10px] bg-[#eef5f1] text-[#2D4B37] px-2.5 py-1 rounded-full font-medium">Train Travel</span>)}
            {selectedCategories.includes('Road Trip') && (<span className="text-[10px] bg-[#eef5f1] text-[#2D4B37] px-2.5 py-1 rounded-full font-medium">Road Trip</span>)}
          </div>
          <button type="button" onClick={handleSubmit} disabled={loading} className="shrink-0 inline-flex bg-[#2D4B37] hover:bg-[#1e3326] text-white font-medium text-sm px-7 py-3 rounded-xl transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#2D4B37]/20">
            {loading ? 'Publishing...' : 'Publish Log'}
          </button>
        </div>
      </div>

    </div>
  )
}

export default page
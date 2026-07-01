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

  return (
    <>
      <div className='w-full min-h-screen'>



        {/* heading section */}
        <div className="relative bg-[#2D4B37] overflow-hidden min-h-95">

          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200" alt="" className="absolute inset-0 w-full h-full object-cover object-center"/>
          <div className="absolute inset-0 bg-linear-to-r from-[#142819]/95 via-[#142819]/50 to-transparent" />
          <div className="absolute inset-0 bg-black/25" />

          {/* Content */}
          <div className="relative z-10 px-6 py-16">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#a8d5b5] mb-5">New Log Entry</p>
            <h1 className="text-5xl font-bold text-white leading-tight mb-4 max-w-lg">Tell Us About<br /><span className="italic text-[#a8d5b5]">Your Journey.</span></h1>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">Document your journey- where you went, what you found, and the hidden gems only you know about</p>
          </div>

        </div>


        <div className='max-w-6xl mx-auto pt-10 pb-16'>

          {error && (<div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">{error}</div>)}

          {/* basic info */}
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Basic info</p>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Log title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="eg. Quiet Temples of Kalpa" className="w-full bg-white px-4 py-2.5 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Country</label>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g. India" className="w-full bg-white px-4 py-2.5 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">City / Region</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Shimla" className="w-full bg-white px-4 py-2.5 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Date Of Visit</label>
            <input type="date" value={dateOfVisit} onChange={(e) => setDateOfVisit(e.target.value)} className="w-full bg-white px-4 py-2.5 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>





          {/* category */}
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4 pt-5">Category</p>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => toggleCategory('Mountains')} className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${isActive('Mountains') ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20 hover:bg-[#2D4B37] hover:text-white'}`}><img src="https://img.icons8.com/color/48/mountain.png" className={`w-4 h-4 ${isActive('Mountains') ? 'brightness-[10]' : ''}`} />Mountains</button>
            <button type="button" onClick={() => toggleCategory('Beaches')} className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${isActive('Beaches') ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20 hover:bg-[#2D4B37] hover:text-white'}`}><img src="https://img.icons8.com/color/48/beach.png" className={`w-4 h-4 ${isActive('Beaches') ? 'brightness-[10]' : ''}`} />Beaches</button>
            <button type="button" onClick={() => toggleCategory('City Breaks')} className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${isActive('City Breaks') ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20 hover:bg-[#2D4B37] hover:text-white'}`}><img src="https://img.icons8.com/color/48/city.png" className={`w-4 h-4 ${isActive('City Breaks') ? 'brightness-[10]' : ''}`} />City Breaks</button>
            <button type="button" onClick={() => toggleCategory('Food Trails')} className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${isActive('Food Trails') ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20 hover:bg-[#2D4B37] hover:text-white'}`}><img src="https://img.icons8.com/color/48/food-bar.png" className={`w-4 h-4 ${isActive('Food Trails') ? 'brightness-[10]' : ''}`} />Food Trails</button>
            <button type="button" onClick={() => toggleCategory('Off-the-grid')} className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${isActive('Off-the-grid') ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20 hover:bg-[#2D4B37] hover:text-white'}`}><img src="https://img.icons8.com/color/48/compass.png" className={`w-4 h-4 ${isActive('Off-the-grid') ? 'brightness-[10]' : ''}`} />Off-the-grid</button>
            <button type="button" onClick={() => toggleCategory('Camping')} className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${isActive('Camping') ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20 hover:bg-[#2D4B37] hover:text-white'}`}><img src="https://img.icons8.com/color/48/camping-tent.png" className={`w-4 h-4 ${isActive('Camping') ? 'brightness-[10]' : ''}`} />Camping</button>
            <button type="button" onClick={() => toggleCategory('Train Travel')} className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${isActive('Train Travel') ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20 hover:bg-[#2D4B37] hover:text-white'}`}><img src="https://img.icons8.com/color/48/train.png" className={`w-4 h-4 ${isActive('Train Travel') ? 'brightness-[10]' : ''}`} />Train Travel</button>
            <button type="button" onClick={() => toggleCategory('Road Trip')} className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded gap-2 border transition-all duration-150 ${isActive('Road Trip') ? 'bg-[#2D4B37] text-white border-[#2D4B37]' : 'bg-[#eef5f1] text-[#2D4B37] border-[#2D4B37]/20 hover:bg-[#2D4B37] hover:text-white'}`}><img src="https://img.icons8.com/color/48/road.png" className={`w-4 h-4 ${isActive('Road Trip') ? 'brightness-[10]' : ''}`} />Road Trip</button>
          </div>



          <div className='h-px bg-[#e8e4da] my-8'></div>





          {/* cover photo */}
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Cover Photo</p>

          <input ref={fileinputref} onChange={(e) => setpic(e.target.files[0])} type="file" accept="image/*" className="hidden" />

          {/* if pic exists then show pic preview , if not then show the same upload text*/}

          {pic ? (
            <div onClick={() => fileinputref.current.click()} className="relative rounded-2xl overflow-hidden mb-8 cursor-pointer">
              <img src={URL.createObjectURL(pic)} className="w-full h-64 object-cover" />
              <div className="absolute bottom-3 right-3 bg-white/90 text-xs font-medium px-3 py-1.5 rounded-full text-[#2D4B37]">
                Change photo
              </div>
            </div>
          ) : (
            <div onClick={() => fileinputref.current.click()} className="border-2 border-dashed border-[#e8e4da] rounded-2xl p-10 text-center bg-white hover:border-[#2D4B37] hover:bg-[#f4f9f6] transition-all duration-150 cursor-pointer mb-8">
              <img src="https://img.icons8.com/color/96/image.png" className="w-12 h-12 mx-auto mb-3" />
              <p className="text-sm font-medium text-[#1c1c19] mb-1">Click to upload cover photo</p>
              <p className="text-xs text-gray-400">PNG, JPG or WEBP · Max 5MB</p>
            </div>
          )}






          <div className='h-px bg-[#e8e4da] my-8'></div>



          {/* your log */}
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Your Log</p>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">About Place</label>
            <textarea value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Describe the place: what made it special, what it felt like, memorable moments, local culture, food, or anything that stood out." maxLength={2000} rows={6} className="w-full bg-white px-4 py-3 border-2 border-[#e8e4da] rounded-2xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#2D4B37] resize-none" />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Best Time To Visit</label>
            <input type="text" value={bestTimeToVisit} onChange={(e) => setBestTimeToVisit(e.target.value)} placeholder="eg. OffSeason or October/September" className="w-full bg-white px-4 py-2.5 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">How To Get There</label>
            <textarea value={howToGetThere} onChange={(e) => setHowToGetThere(e.target.value)} placeholder="e.g. Transportation Options, Best Route To Get There" rows={4} className="w-full bg-white px-4 py-3 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150 resize-none" />
          </div>

          <div className='h-px bg-[#e8e4da] my-8'></div>




          {/* hidden gems */}
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Hidden Gems</p>
          <label className="block text-sm font-medium text-gray-800 mb-1.5">Add The Underrated Spots Only You Know About.</label>
          <div className='pt-3'>
            <input type="text" value={gem1} onChange={(e) => setGem1(e.target.value)} placeholder="eg. Food Spots" className="w-full bg-white px-4 py-2.5 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>
          <div className='pt-2'>
            <input type="text" value={gem2} onChange={(e) => setGem2(e.target.value)} placeholder="eg. Secret Waterfall Between The Trek" className="w-full bg-white px-4 py-2.5 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150" />
          </div>

          <div className='h-px bg-[#e8e4da] my-8'></div>




          {/* tips */}
          <p className="text-lg font-bold uppercase tracking-[3px] text-[#2D4B37] mb-4">Tips & Recommendations</p>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Where To Eat</label>
            <textarea value={whereToEat} onChange={(e) => setWhereToEat(e.target.value)} placeholder="e.g. Your Favourite Spots, Local Dishes." rows={4} className="w-full bg-white px-4 py-3 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150 resize-none" />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Where To Stay</label>
            <textarea value={whereToStay} onChange={(e) => setWhereToStay(e.target.value)} placeholder="e.g. Budget Hotels, Areas To Stay" rows={4} className="w-full bg-white px-4 py-3 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150 resize-none" />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#1c1c19] mb-1.5">Things To Avoid</label>
            <textarea value={thingsToAvoid} onChange={(e) => setThingsToAvoid(e.target.value)} placeholder="e.g. Tourist Traps, What Not To Do.." rows={4} className="w-full bg-white px-4 py-3 border border-[#e8e4da] rounded-xl text-sm text-[#1c1c19] placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2D4B37]/10 focus:border-[#2D4B37] transition-all duration-150 resize-none" />
          </div>



          {/* publish */}
          <div className='pt-5 mx-auto flex justify-center'>
            <button type="button" onClick={handleSubmit} disabled={loading} className="bg-transparent mx-auto w-full text-[#2D4B37] border border-[#2D4B37] hover:bg-[#2D4B37] hover:text-white focus:ring-4 focus:ring-[#2D4B37]/20 focus:outline-none shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed">{loading ? 'Publishing...' : 'Publish Log'}</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default page
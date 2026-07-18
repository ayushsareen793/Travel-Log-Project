"use client"
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'


const Page = () => {
    const { id } = useParams()
    const [log, setlog] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const gettingdata = async () => {
            const res = await fetch('/api/logs/' + id);
            const data = await res.json()
            setlog(data.log)
            console.log(data.log);

            setloading(false)
        }
        gettingdata()
    }, [id])


    if (loading) return <p>Loading...</p>
    if (!log) return <p>Log not found</p>

    return (
        <>

            <div>Log ID: {id}</div>

            <div>
                <h1>{log.title}</h1>
                <p>{log.city}, {log.country}</p>
                <p>{log.about}</p>
            </div>


        </>
    )


}

export default Page
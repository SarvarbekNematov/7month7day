import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
import { API_KEY, IMG_URL } from '../hooks/useEnv'

export const SinglePage = () => {
    const { id } = useParams()
    const [singleData , setSingleData] = useState({})

    useEffect(() => {
        useAxios().get(`/movie/${id}?api_key=${API_KEY}`).then(res => {
            setSingleData(res.data)
        })  
    },[id])
  return (
    <div className='flex justify-between mt-10 px-5'>
        <div className='w-[24%] p-5 bg-slate-200 rounded-md'></div>
        <div className='w-[50%] p-5 bg-slate-200 rounded-md'>
            <img className='rounded-lg' src={`${IMG_URL}/${singleData.backdrop_path}`} alt="single img" width={'100%'}/>
            <h2 className='font-bold text-[25px] my-5'>{singleData.title}</h2>
            <p>{singleData.overview}</p>
        </div>
        <div className='w-[24%] p-5 bg-slate-200 rounded-md'></div>
    </div>
  )
}

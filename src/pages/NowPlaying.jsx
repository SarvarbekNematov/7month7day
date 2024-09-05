import React, { useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { API_KEY, TOKEN } from '../hooks/useEnv'

export const NowPlaying = () => {
    const [page , setPage] = useState(1)
    useEffect(() => {
        useAxios().get(`now_playing?language=en-US&page=${page}?api_key=${API_KEY}` , {
            headers : {
                "Authorization" : `Bearer ${TOKEN}`
            }
        }).then(res => {
            console.log(res);
            
        })
    },[page])
  return (
    <div>

    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { YOUTUBE_API_URL } from '../utils/constants'
import VideoCard from './VideoCard'

const VideoContainer = ({togglePanel}) => {

   const [videos, setVideos]= useState([])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API_URL)
        const result = await data.json()
        console.log(result.items);
        setVideos(result.items);
    }
    useEffect(() => {
        getVideos();
    }, [])

  return (
    <div className={`flex flex-wrap ${togglePanel ? "ml-40" : "ml-72" } pt-24`}>
        {videos.map((videos) => <VideoCard key={videos.id} card = {videos} togglePanel={togglePanel} /> )}
    </div>
  )
}

export default VideoContainer
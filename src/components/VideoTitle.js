import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white  bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bont">{title}</h1>
        <p className="py-2 w-1/4">{overview}</p>
        <div>
            <button className="text-xl bg-gray-500 p-4 px-12 rounded-md text-white bg-opacity-50">▶Play</button>
            <button className="text-xl bg-gray-500 p-4 px-12 rounded-md text-white bg-opacity-50 mx-2 ">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
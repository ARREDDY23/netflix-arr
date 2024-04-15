import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white  bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className="text-xl bg-gray-500 py-1 md:py-4 px-3 md:px-12 rounded-md text-white bg-opacity-50">▶Play</button>
            <button className="hidden md:inline-block mx-2 p-4 px-12 text-xl bg-gray-500 rounded-md text-white bg-opacity-50 mx-2 ">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
import React from 'react'

export const Card = ({el}) => {
    // console.log(el)
  return (
    <div className='border-solid border-2 shadow-xl mt-3 p-4 rounded-lg  '>
        <div className='font-semibold '>
            <p>Mission: {el.missions.length>0 ? el.missions[0].name: "N/A"} </p>
            <p>Original_launch : {el.original_launch?.split("T")[0]}</p>
            <p>Type: {el.type}</p>
            <p>Status: {el.status} </p>
        </div>
        <div className='flex justify-center py-2'>
            <button className=' border-solid border-2 border-red-500 px-2  py-2 hover:bg-red-500 hover:text-white rounded-lg '>More Details</button>
        </div>
    </div>
  )
}

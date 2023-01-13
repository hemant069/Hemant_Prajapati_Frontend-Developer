import React, { useState } from 'react'
import Popup from './Popup'

export const Card = ({el}) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  console.log(el)


  return (
    <div className='border-solid border-2 shadow-xl mt-3 p-4 rounded-lg  '>
        <div className='font-semibold '>
            <p>Serial {el.serial} </p>
            <p>Type: {el.type}</p>
            <p>Status: {el.status} </p>
        </div>
        <div className='flex justify-center py-2'>
            <button onClick={() => setIsPopupOpen(true)}className=' border-solid border-2 border-red-500 px-2  py-2 hover:bg-red-500 hover:text-white rounded-lg '>More Details</button>
            {isPopupOpen&& <Popup el={el} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />}
        </div>
    </div>
  )
}

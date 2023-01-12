import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handlePage } from '../store/Action';

export const Pagination = () => {
    const { totalPage } = useSelector(state => state);
    const dispatch = useDispatch()
    const arr = new Array(totalPage).fill().map((el, i) => i + 1);

    const handleButton = (e) => {
        dispatch(handlePage(e))                     
    }
  return (
    <div className='flex justify-center gap-6'>
        {
            arr.map((el)=>{
                return(
                    <button onClick={()=>handleButton(el)} className='border border-black rounded mt-3 p-2  px-4 text-black  font-semibold bg-transparent hover:bg-gray-700 hover:text-white'>{el}</button>
                )
            })
        }
    </div>
  )
}

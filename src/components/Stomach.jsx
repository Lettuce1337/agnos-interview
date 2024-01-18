import React from 'react'
import stomach from '../assets/default/default-abs.png'
import OtherButton from './OtherButton'
import { useOutletContext } from 'react-router'

function Stomach() {

  const {selected,setSelected} = useOutletContext();

  return (
    <>
      <p className='text-[2rem] pt-[1rem] max-md:text-[1.5rem] max-[480px]:text-[1rem]'>ปวดท้องที่บริเวณใดมากที่สุด?</p>
      <div className='flex justify-center items-center relative'>
        <img src={stomach} className='w-[70%] h-[70%]'/>
        <svg width='12%' height='12%' viewBox="0 0 109 137" fill="none" xmlns="http://www.w3.org/2000/svg" 
              className='absolute bottom-[52%] right-[45%]'>
          <path d="M1 69C3 40 22.4 -13.6 84 4C161 26 29 244 1 69Z" stroke="black" fill="white" opacity='70%' onClick={()=>{console.log('click!')}} />
        </svg>
      </div>
      <div className='w-full h-1/6 bg-white absolute bottom-0 flex justify-center items-center'>
        <OtherButton text='ปวดทั่วท้อง' selected={selected} setSelected={setSelected}/ >
      </div>

    </>
  )
}

export default Stomach
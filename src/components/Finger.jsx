import React from 'react'
import finger from '../assets/default/default-finger.png'
import OtherButton from './OtherButton'
import { useOutletContext } from 'react-router';

function Finger() {

  const {selected,setSelected} = useOutletContext();

  return (
    <>
      <p className='text-[2rem] pt-[1rem] max-md:text-[1.5rem] max-[480px]:text-[1rem]'>จุดไหนที่คุณปวดนิ้วมากที่สุด?</p>
      <div className='flex justify-center items-center relative'>
        <img src={finger} className='w-[70%] h-[70%]'/>
        <svg width='12%' height='12%' viewBox="0 0 109 137" fill="none" xmlns="http://www.w3.org/2000/svg" 
              className='absolute bottom-[52%] right-[45%]'>
          <path d="M1 69C3 40 22.4 -13.6 84 4C161 26 29 244 1 69Z" stroke="black" fill="white" opacity='70%' onClick={()=>{console.log('click!')}} />
        </svg>
      </div>
      <div className='w-full h-1/6 bg-white absolute bottom-0 flex justify-center items-center'>
        <OtherButton text='ข้ออื่นๆ หรือไม่ได้ปวดที่บริเวณข้อ' selected={selected} setSelected={setSelected}/ >
      </div>
    </>
  )
}

export default Finger
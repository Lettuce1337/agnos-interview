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
      </div>
      <div className='w-full h-1/6 bg-white absolute bottom-0 flex justify-center items-center'>
        <OtherButton text='ข้ออื่นๆ หรือไม่ได้ปวดที่บริเวณข้อ' selected={selected} setSelected={setSelected}/ >
      </div>
    </>
  )
}

export default Finger
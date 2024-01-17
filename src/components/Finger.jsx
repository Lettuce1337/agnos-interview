import React from 'react'
import finger from '../assets/default/default-finger.png'
import OtherButton from './OtherButton'

function Finger() {
  return (
    <>
      <p className='text-[2rem] pt-[1rem] max-md:text-[1.5rem] max-[480px]:text-[1rem]'>จุดไหนที่คุณปวดนิ้วมากที่สุด?</p>
      <img src={finger} className='w-[70%] h-[70%]'/>
      {/* <OtherButton text='ข้ออื่นๆ หรือไม่ได้ปวดที่บริเวณข้อ'/> */}
    </>
  )
}

export default Finger
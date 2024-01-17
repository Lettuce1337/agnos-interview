import React from 'react'
import stomach from '../assets/default/default-abs.png'
import OtherButton from './OtherButton'

function Stomach() {
  return (
    <>
      <p className='text-[2rem] pt-[1rem] max-md:text-[1.5rem] max-[480px]:text-[1rem]'>ปวดท้องที่บริเวณใดมากที่สุด?</p>
      <img src={stomach} className='w-[70%] h-[70%]'/>
      {/* <OtherButton text='ปวดทั่วท้อง'/ > */}
    </>
  )
}

export default Stomach
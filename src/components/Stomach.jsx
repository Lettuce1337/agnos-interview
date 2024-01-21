import React from 'react'
import stomach from '../assets/default/default-abs.png'
import OtherButton from './OtherButton'
import { useOutletContext } from 'react-router'
import StomachBlobs from './StomachBlobs';
import StomachCaptions from './StomachCaptions';

function Stomach() {

  const {selected,setSelected} = useOutletContext();

  return (
    <>
      <p className='text-[2rem] pt-[1rem] max-md:text-[1.5rem] max-[480px]:text-[1rem]'>ปวดท้องที่บริเวณใดมากที่สุด?</p>
      <div className='flex justify-center items-center relative'>
        <img src={stomach} className='w-[70%] h-[70%]'/>

        <StomachCaptions selected={selected} />
        <StomachBlobs selected={selected} setSelected={setSelected} />

      </div>
      <div className='w-full h-1/6 bg-white absolute bottom-0 flex justify-center items-center'>
        <OtherButton text='ปวดทั่วท้อง' selected={selected} setSelected={setSelected}/ >
      </div>

    </>
  )
}

export default Stomach
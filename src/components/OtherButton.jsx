import React from 'react'

function OtherButton({text, setSelected}) {

  return (
    <button className='rounded-full bg-blue-400 px-[1rem] py-[.5rem]' onClick={()=>setSelected('all')}>
      <p className='text-[1.5rem] max-md:text-[1rem] max-[480px]:text-[.75rem]'>{text}</p>
    </button>
  )
}

export default OtherButton
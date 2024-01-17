import React from 'react'

function OtherButton({text}) {

  return (
    <div className='bg-white absolute w-full text-center bottom-0'>
        <button className='w-fit py-[1em] px-[3em] rounded-full bg-blue-400'>
            <p className='text-[2.2rem]'>{text}</p>
        </button>
    </div>
  )
}

export default OtherButton
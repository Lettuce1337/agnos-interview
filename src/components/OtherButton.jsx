import React from 'react'

function OtherButton({text,selected, setSelected}) {

  return (
    <button className='rounded-full px-[.2rem] py-[.2rem]
                       bg-gradient-to-t from-agnoslightblue via-agnosblue to-agnosdarkblue'onClick={()=>setSelected('all')}>
      <p className={'rounded-full text-[1.5rem] max-md:text-[1rem] max-[480px]:text-[.75rem] px-[1rem] py-[.5rem]'
                    +` ${selected==='all'? 'bg-gradient-to-r from-agnoslightblue via-agnosblue to-agnosdarkblue text-white':'bg-white'}`}>{text}</p>
    </button>
  )
}

export default OtherButton
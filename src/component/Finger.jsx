import React from 'react'
import finger from '../assets/default/default-finger.png'
import dip from '../assets/highlight/dip-highlight.png'
import pip from '../assets/highlight/pip-highlight.png'
import mcp from '../assets/highlight/mcp-highlight.png'

function Finger() {
  return (
    <div className='relative'>
      <img src={finger} className='object-contain w-full h-full'/>
      <img src={dip} className='absolute top-0'></img>
      <img src={pip} className='absolute top-0'></img>
      <img src={mcp} className='absolute top-0'></img>
    </div>
  )
}

export default Finger
import React from 'react'
import luq from '../assets/active/luq-active.png'
import llq from '../assets/active/llq-active.png'
import ruq from '../assets/active/ruq-active.png'
import rlq from '../assets/active/rlq-active.png'
import epi from '../assets/active/epigastrium-active.png'
import umb from '../assets/active/umbilicus-active.png'
import sup from '../assets/active/suprapubic-active.png'

function StomachCaptions({selected}) {
  return (
    <>
        <img id='top' src={epi} className='w-[70%] h-auto absolute' style={{display:selected==='top'? '':'none'}}/>
        <img id='top-left' src={ruq} className='w-[70%] h-auto absolute' style={{display:selected==='top-left'? '':'none'}}/>
        <img id='top-right' src={luq} className='w-[70%] h-auto absolute' style={{display:selected==='top-right'? '':'none'}}/>

        <img id='bottom' src={sup} className='w-[70%] h-auto absolute' style={{display:selected==='bottom'? '':'none'}}/>
        <img id='bottom-left' src={rlq} className='w-[70%] h-auto absolute' style={{display:selected==='bottom-left'? '':'none'}}/>
        <img id='bottom-right' src={llq} className='w-[70%] h-auto absolute' style={{display:selected==='bottom-right'? '':'none'}}/>
        
        <img id='middle' src={umb} className='w-[70%] h-auto absolute' style={{display:selected==='middle'? '':'none'}}/>
    </>
  )
}

export default StomachCaptions
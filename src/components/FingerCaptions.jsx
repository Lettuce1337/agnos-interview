import dip from '../assets/active/dip-active.png'
import mcp from '../assets/active/mcp-active.png'
import pip from '../assets/active/pip-active.png'

function FingerCaptions({selected}) {
    return (
        <>
            <img id='top' src={dip} className='w-[70%] h-auto absolute' style={{display:selected==='top'? '':'none'}}/>

            <img id='middle' src={pip} className='w-[70%] h-auto absolute' style={{display:selected==='middle'? '':'none'}}/>
    
            <img id='bottom' src={mcp} className='w-[70%] h-auto absolute' style={{display:selected==='bottom'? '':'none'}}/>
            
        </>
      )
}

export default FingerCaptions
import React, { useContext, useState } from 'react'
import { partsContext } from '../context/partsContext'
import { useLocation, useNavigate } from 'react-router';



function ContinueButton({selected}) {
    const { parts } = useContext(partsContext);
    const path = useLocation()
    const navigate = useNavigate();
    const pos = path.pathname === '/'? 0:parts.indexOf(path.pathname.slice(1));
    
    return (
    <button className='w-full text-center p-[1rem] bg-agnosblue my-5 rounded-3xl text-black font-bold
                     disabled:text-gray-600 disabled:bg-gray-300
                       transition'
            disabled={selected===null || pos===parts.length-1}
            onClick={()=> navigate(parts[pos+1])}>

        <p className="text-[1.5rem] max-[480px]:text-[1rem] font-medium">ต่อไป</p>
    </button>
  )
}

export default ContinueButton
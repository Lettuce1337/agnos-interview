import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ContinueButton from '../components/ContinueButton'


function RootLayout() {
  const [selected,setSelected] = useState(null);
  const location = useLocation();

  useEffect(()=>{
    setSelected(null)
  },[location.pathname])

  return (
    <div className='m-[2rem] relative'>
        <div className="min-w-[350px] flex justify-center items-center rounded-3xl
                          shadow-xl flex-col relative overflow-clip">
          <Outlet context={{selected,setSelected}}/>
        </div>

        <ContinueButton selected={selected}/>
    </div>
  )
}

export default RootLayout
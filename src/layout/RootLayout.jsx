import React from 'react'
import { Outlet } from 'react-router-dom'
import ContinueButton from '../components/ContinueButton'


function RootLayout() {
  return (
    <div className='m-[2rem]'>
        <div className="min-w-[350px] w-fit h-fit flex justify-center items-center rounded-3xl
                          shadow-xl flex-col relative">
          <Outlet/>
        </div>

        <ContinueButton />
    </div>
  )
}

export default RootLayout
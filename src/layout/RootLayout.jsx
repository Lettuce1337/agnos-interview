import React, { useContext, useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'


function RootLayout() {
  return (
    <section className='w-full h-full flex justify-center items-center flex-col'>
      <div>
        <div className="min-w-[375px] w-fit h-full flex justify-center items-center rounded-3xl
                        shadow-xl">
          <Outlet/>
        </div>
        <button className='w-full text-center p-[2rem] bg-gray-200 mt-5 rounded-3xl'>
          <NavLink to='finger' className="text-[1.5rem]">ต่อไป</NavLink>
        </button>
      </div>
    </section>
  )
}

export default RootLayout
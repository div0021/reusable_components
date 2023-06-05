// import { useState } from 'react'

import { Outlet } from 'react-router'
import Button from './components/Button'
import Sidebar from './components/Sidebar'




function App() {

  return (
    <>
    <div className='grid grid-cols-6 bg-white w-[100vw] h-[100vh]'>
    <div className='h-[100vh] bg-slate-100 p-10 pt-20'><Sidebar /></div>
     <div className='text-black col-span-5'> <Outlet /></div>
    
      
     
      </div>
    </>
    
    
  )
}

export default App

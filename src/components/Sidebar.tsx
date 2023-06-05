import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='w-full h-full flex flex-col items-center font-NotoSans font-medium justify-between'>
        <div className='space-y-5 flex flex-col items-center'>
        <Link className='cursor-pointer hover:font-bold hover:text-[#090f31] text-[#9e9e9e] text-lg' to='/'>Buttons</Link>
        <Link className='cursor-pointer hover:font-bold hover:text-[#090f31] text-[#9e9e9e] text-lg' to='/input'>Inputs</Link>
        </div>
       <div>
        <p className='font-bold text-secondary/50 text-xs'>Don't copy just learn!!</p>
       </div>
    </div>
  )
}

export default Sidebar;
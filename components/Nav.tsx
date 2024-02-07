import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='fixed h-12 border border-b-[#119] w-full'>
      <ul className='h-full px-16 flex items-center gap-16 justify-center'>
        <li><Link href='/' className='text-lg font-medium'>Home</Link></li>
        <li><Link href='/about' className='text-lg font-medium'>About</Link></li>
        <li><Link href='/mood' className='text-lg font-medium'>Mood</Link></li>
      </ul>
    </div>
  )
}

export default Nav
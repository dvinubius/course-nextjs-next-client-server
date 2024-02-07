import CycleDisplay from '@/components/CycleDisplay';
import React from 'react'

function About() {
  return (
    <div className='h-screen w-full pt-32 p-8 flex flex-col gap-8'>
      <h1 className='text-4xl font-bold'>About</h1>
      <p className=''>Much to say about this app lorem ipsum tap tap tap.</p>
      <CycleDisplay>
        <p>It feels good to use</p>
        <h1 className='text-lg'>It looks pretty</h1>
        <pre>It is free!</pre>
      </CycleDisplay>
    </div>
  )
}

export default About
import MoodDisplay from '@/components/MoodDisplay'
import React from 'react'

function MoodPage() {
  return (
    <div className='h-screen w-full pt-32 p-8 flex flex-col gap-8'>
      <h1 className='text-4xl font-bold'>The Leader's Mood</h1>
      <MoodDisplay />
    </div>
  )
}

export default MoodPage
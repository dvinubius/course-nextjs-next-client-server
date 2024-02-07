'use client'

import React, { useEffect } from 'react'

interface MoodData {
  data: {
    mood: string;         // the leader's current mood 
    adorations: number;   // the number of adorations received by the leader since he has this mood
    time: string;         // ISOString representing the time at which the leader got into this mood
  }
}

function MoodDisplay() {
  const [data, setData] = React.useState<MoodData['data'] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://communist-backend-ac625ad53940.herokuapp.com/api/v1/current-mood`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const parsedResponse = await response.json();
      setData(parsedResponse.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className='w-full h-[400px] flex flex-col items-center justify-center 
        border bg-white rounded-lg shadow-sm 
        font-mono text-2xl'>
      {loading && <p className='text-gray-500'>Loading...</p>}
      {data && (
        <span className='text-purple-800 text-[6rem]'>
          {data.mood}
        </span>
      )}
    </div>
  )
}

export default MoodDisplay
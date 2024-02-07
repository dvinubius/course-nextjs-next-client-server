'use client'

import React, { PropsWithChildren, useMemo, useState } from 'react'

type CycleDisplayProps = PropsWithChildren<{}>;

function CycleDisplay({children}: CycleDisplayProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const childrenElements = useMemo(() => React.Children.toArray(children), [children]);
  
  const activeChild = childrenElements[activeIdx];

  const next = () => {
    setActiveIdx((activeIdx + 1) % childrenElements.length);
  }

  return <div className='w-full h-[350px] overflow-y-auto
      flex flex-col items-center justify-between p-8 
      bg-white shadow-md rounded-lg'>
    <h2 className='text-xl font-medium'>Highlights</h2>
    <div className='bg-white p-8 rounded-lg flex items-center justify-center'>
      {activeChild}
    </div>

    <button className='py-4 px-8 border-none rounded-md
        bg-[linear-gradient(30deg,_#d4c_0%,_#d4c_20%,_#a8f_80%,_#a8f_100%)]
        text-white text-lg font-bold cursor-pointer
        transition-all duration-150
        hover:brightness-[0.9]
        focus:outline-none
        active:scale-[0.95]' 
    onClick={next}
    >
    NEXT
  </button>

  </div>
}

export default CycleDisplay
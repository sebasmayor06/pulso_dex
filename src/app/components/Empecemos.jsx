import React from 'react'

export default function Empecemos() {
  return (
    <div className='flex justify-center items-center flex-col m-44 relative'>
        <h1 className="text-4xl md:text-6xl font-bold mb-5">Empecemos</h1>
        <div className='flex justify-center items-center flex-col relative'>
        <span className='text-sm md:text-xl'>Elija el ranking que quiere pertenecer, envíe todos los requisitos y consiga ganancias de hasta un 25%.</span>
        <div className='grid grid-cols-5 mt-12 z-10'>
            <button className='border-2 backdrop:blur rounded-l-2xl border-solid bg-gradient-to-r from-white/80 to-black/20 text-3xl font-bold p-4 hover:bg-indigo-300 hover:bg-opacity-50 w-40 border-slate-200'>1M</button>
            <button className='border-2 backdrop:blur border-solid bg-gradient-to-r from-white/80 to-black/20 text-3xl font-bold p-4 hover:bg-violet-300 hover:bg-opacity-50 w-40 border-slate-200'>3M</button>
            <button className='border-2 backdrop:blur border-solid bg-gradient-to-r from-white/80 to-black/20 text-3xl font-bold hover:bg-orange-200 hover:bg-opacity-50 p-4 w-40 border-slate-200'>5M</button>
            <button className='border-2 backdrop:blur border-solid bg-gradient-to-r from-white/80 to-black/20 text-3xl font-bold p-4 hover:bg-yellow-200 hover:bg-opacity-50 w-40 border-slate-200'>10M</button>
            <button className='border-2 backdrop:blur rounded-r-2xl border-solid bg-gradient-to-r from-white/80 to-black/20 text-3xl font-bold p-4 hover:bg-lime-300 hover:bg-opacity-50 w-40 border-slate-200'>30M</button>
        </div>
        <div className='circulo w-[50px] md:w-[120px] h-[50px] md:h-[120px] bg-gradient-to-r from-white to-customPurple rounded-[100%] absolute top-[20%] md:top-[25%] left-[18%] md:left-[88%] -translate-x-[50%] translate-y-[50%] z-0'></div>

        </div>
    </div>
  )
}

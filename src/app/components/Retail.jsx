import React from 'react';

export default function Retail() {
  return (
    <div className=' border-b-2 border-gray-400 shadow-xl  '>
      <div className='flex justify-center items-center flex-col relative p-32'>
      <div className='circulo2 animate-fade-down animate-once animate-ease-in animate-normal animate-fill-forwards w-[100px] md:w-[100px] h-[100px] md:h-[100px] bg-gradient-to-l from-white to-verdeInicio rounded-[100%] absolute top-[18%] md:top-[20%] left-[85%] md:left-[66%] -translate-x-[50%] translate-y-[50%] z-1'></div>
        <div className='circulo w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-gradient-to-r from-white to-verdeInicio rounded-[100%] absolute top-[20%] md:top-[30%] left-[18%] md:left-[32%] -translate-x-[50%] translate-y-[50%] z-0'></div>
        <div className='circulo3 w-[100px] md:w-[150px] h-[100px] md:h-[150px] bg-gradient-to-tl from-white to-verdeInicio rounded-[5%] absolute top-[60%] md:top-[45%] left-[80%] md:left-[70%] -translate-x-[50%] translate-y-[50%] z-0'></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-5">Retail Investor</h1>
        
        <div className=' md:m-10 border-slate-200 border-2 p-12 w-[300px] md:w-[500px] bg-white/70 backdrop-blur rounded-xl z-10 '>
          <h2 className='md:text-xl text-sm font-extrabold'>Participa y genera utilidades por ventas.</h2>
          <span className='md:text-sm text-xs'>Un retail investor es aquel que aporta determinada cantidad de capital para el desarrollo de una actividad a cambio de beneficios económicos.</span>
          <h2 className='md:text-xl text-sm font-extrabold mt-5'>Que hacemos con el capital?</h2>
          <span className='md:text-sm text-xs'>Tu capital se usa para el desarrollo de nuestro e-commerce y la importación de productos directamente desde la fabrica.</span>
        </div>
      </div>
    </div>
  );
}


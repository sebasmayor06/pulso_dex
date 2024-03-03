import React from 'react';

export default function Retail() {
  return (
    <>
      <div className='flex justify-center items-center flex-col relative'>
      <div className='circulo2 w-[100px] h-[100px] bg-gradient-to-l from-white to-green-600 rounded-[100%] absolute top-[5%] left-[62%] -translate-x-[50%] translate-y-[50%] z-1'></div>
        <div className='circulo w-[200px] h-[200px] bg-gradient-to-r from-white to-green-600 rounded-[100%] absolute top-[8%] left-[35%] -translate-x-[50%] translate-y-[50%] z-0'></div>
        <div className='circulo3 w-[150px] h-[150px] bg-gradient-to-tl from-white to-green-600 rounded-[5%] absolute top-[40%] left-[65%] -translate-x-[50%] translate-y-[50%] z-0'></div>
        <h1 className="text-4xl md:text-6xl font-extrabold">Retail Investor</h1>
        
        <div className='caja m-10 border-slate-400 border-2 p-8 w-96 bg-white/80 backdrop-blur rounded-xl z-10 '>
          <h2 className='text-xl font-extrabold'>Participa y genera utilidades por ventas.</h2>
          <span>Un retail investor es aquel que aporta determinada cantidad de capital para el desarrollo de una actividad a cambio de beneficios económicos.</span>
          <h2 className='text-xl font-extrabold'>Que hacemos con el capital?</h2>
          <span>Tu capital se usa para el desarrollo de nuestro e-commerce y la importación de productos directamente desde la fabrica.</span>
        </div>
      </div>
    </>
  );
}


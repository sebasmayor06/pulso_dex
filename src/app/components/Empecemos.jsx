"use client"
import React, { useState } from "react";

export default function Empecemos() {
    const [numero, setNumero] = useState(1);

    const handleNumero = (value) => {
        setNumero(value)
    }

  return (
    <div className=" border-b-2 border-gray-400 shadow-xl">

    <div className="flex justify-center items-center flex-col p-32 relative">
      <h1 className="text-4xl md:text-6xl font-bold mb-5">Empecemos</h1>
      <div className="flex justify-center items-center flex-col relative">
        <span className="text-sm  md:text-xl">
          Elija el ranking que quiere pertenecer, envíe todos los requisitos y
          consiga ganancias de hasta un 25%.
        </span>
        <div className="grid grid-cols-5 mt-12 z-10">
          <button onClick={() => handleNumero(1)} className="border-2 backdrop:blur rounded-l-lg bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold p-4 hover:bg-indigo-300 hover:bg-opacity-50 w-18 md:w-24">
            1M
          </button>
          <button onClick={() => handleNumero(3)} className="border-2 backdrop:blur bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold p-4 hover:bg-violet-300 hover:bg-opacity-50 w-18 md:w-24">
            3M
          </button>
          <button onClick={() => handleNumero(5)} className="border-2 backdrop:blur bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold hover:bg-orange-200 hover:bg-opacity-50 p-4 w-18 md:w-24">
            5M
          </button>
          <button onClick={() => handleNumero(10)}  className="border-2 backdrop:blur bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold p-4 hover:bg-yellow-200 hover:bg-opacity-50 w-18 md:w-24">
            10M
          </button>
          <button onClick={() => handleNumero(30)}  className="border-2 backdrop:blur rounded-r-lg bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold p-4 hover:bg-lime-300 hover:bg-opacity-50 w-18 md:w-24">
            30M
          </button>
        </div>
        <div className="circulo w-[75px] md:w-[120px] h-[75px] md:h-[120px] bg-gradient-to-r from-white to-customPurple rounded-[100%] absolute top-[20%] md:top-[15%] left-[95%] md:left-[75%] -translate-x-[50%] translate-y-[50%] z-0"></div>
        <div className="circulo w-[120px] md:w-[180px] h-[120px] md:h-[180px] bg-gradient-to-r from-white to-customPurple rounded-[100%] absolute top-[45%] md:top-[30%] left-[10%] md:left-[25%] -translate-x-[50%] translate-y-[50%] z-0"></div>
        <div>
          <table className="min-w-full divide-y divide-gray-200 mt-8 relative z-10 bg-white/50">
            <tbody className=" divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-bold whitespace-nowrap text-sm md:text-xl text-gray-900">
                  Objetivo Utilidad
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-xl text-gray-500">
                  40%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold whitespace-nowrap text-sm md:text-xl text-gray-900">
                  Administracion
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-xl text-gray-500">
                  30% de Participación
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold whitespace-nowrap text-sm md:text-xl text-gray-900">
                  Ecommerce
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-xl text-gray-500">
                  30% de Ganancias
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center mt-10">
        <div className="numero text-black bg-verdeManzana bg-opacity-50  rounded-l-lg font-bold w-16 md:w-24 justify-center flex items-center h-14 md:h-14">{`${numero}M`}</div>
        <button className="border-2 backdrop:blur bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold p-4 md:p-3 rounded-r-lg hover:bg-gray-400 hover:bg-opacity-50">Empezar</button>
        </div>
      </div>
    </div>
    </div>
  );
}

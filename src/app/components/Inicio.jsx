import Image from "next/image";
import React from "react";

export default function Inicio() {
  return (
    <div className="overflow-x-hidden">
      <div className="inicio flex flex-col md:flex-row w-screen h-screen md:h-700px top-67px overflow-hidden left-0 bg-white">
        <div className="flex justify-center items-center h-1/2 md:h-full md:w-1/2 w-full pl-4 pr-4">
          <p className="flex flex-col">
            <span className="text-5xl md:text-6xl font-extrabold">
              Descubre el potencial del
            </span>
            <span className="text-verdeInicio text-5xl md:text-6xl font-extrabold">
              Comercio electrónico.
            </span>
          </p>
        </div>

        <div className="foto relative flex justify-center items-center h-1/2 md:h-full md:w-1/2 w-full">
          <Image
            className="p-4 rounded-full"
            src="/Hombrefuturista.jpg"
            alt="logo"
            width={650}
            height={650}
          />

          <div className="bg-customPurple w-20 md:w-32 h-12 md:h-20 rounded-3xl flex justify-center items-center text-white font-extrabold md:text-3xl text-xl absolute top-32 left-20 md:top-44 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <p>
              <span>IA</span>
            </p>
          </div>
          <div className="bg-customPurple w-20 md:w-32 h-12 md:h-20 rounded-3xl flex justify-center items-center text-white font-extrabold md:text-3xl text-xl absolute top-20 right-16 md:top-32 md:right-32 transform -translate-x-2/4 -translate-y-1/2">
            <p>
              <span>UX</span>
            </p>
          </div>
          <div className="bg-mostaza rounded-3xl p-4 justify-center items-center text-white font-extrabold md:text-3xl text-xl absolute top-60 left-24 md:top-80 md:left-48 transform -translate-x-1/2 -translate-y-1/2 inline-flex">
            <span>Gamificación</span>
          </div>
          <div className="bg-verdeManzana rounded-3xl p-4 justify-center items-center text-white font-extrabold md:text-3xl text-xl absolute left-80 bottom-24 md:bottom-44 md:left-96 transform -translate-x-1/2 -translate-y-1/2 inline-flex">
            <span>Desarrollo</span>
          </div>

          <div className="bg-naranja rounded-3xl p-4 justify-center items-center text-white font-extrabold md:text-3xl text-lg absolute bottom-24 md:bottom-40 md:left-44 left-28 transform -translate-x-1/2 translate-y-1/2 inline-flex">
            <span>Realidad aumentada</span>
          </div>
        </div>
      </div>
    </div>
  );
}

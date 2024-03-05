import Image from "next/image";
import React from "react";

export default function Inicio() {
  return (
    <div className="overflow-x-hidden border-t-2 border-gray-400 shadow-xl p-8">
      <div className="inicio flex flex-col md:flex-row w-screen h-screen md:h-700px top-67px overflow-hidden left-0 bg-white">
        <div className="flex justify-center items-center h-[40%] md:h-full md:w-1/2 w-full pl-4 pr-4">
          <p className="flex flex-col">
            <span className="text-5xl md:text-6xl font-extrabold">
              Descubre el potencial del
            </span>
            <span className="text-verdeInicio text-5xl md:text-6xl font-extrabold">
              Comercio electrónico.
            </span>
          </p>
        </div>

        <div className="foto relative flex justify-center items-center h-[40%] md:h-full md:w-1/2 w-[85%]">
          <Image
            src="/Imagenderecha.png"
            alt="logo"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

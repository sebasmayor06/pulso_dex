import Image from "next/image";

export default function HowItWorks() {
  return (
    <section
      className="md:p-12 p-8 flex flex-col gap-8 md:text-lg text-base
    text-center bg-gradient-purple "
    >
      <h2
        className="text-4xl md:text-6xl font-bold mb-5 
            "
      >
        ¿Cómo funciona?
      </h2>
      <p className="text-sm  md:text-xl">
        Pulso Dex es un Ecommerce Omnicanal, otorgando una experiencia fluida en
        todos los puntos de contacto con el cliente.
      </p>
      <div
        className="w-full grid lg:grid-cols-5 gap-2 
      lg:[grid-template-areas:'register_register_data_data_nosell_contract''verification_sells_data_data_informs_informs''verification_sells_data_data_capital_capital''dex_dex_utilities_utilities_capital_capital']
      grid-cols-2 [grid-template-areas:'register_nosell''verification_sells''contract_sells''dex_dex''data_data''data_data''informs_capital''utilities_utilities']
      bg-gradient-gradient-radial"
      
      >
        <div
          className="w-full bg-white rounded-3xl p-4
        flex flex-col items-center [grid-area:register]"
        >
          <Image src="/icons/registration.svg" width={50} height={50}/>
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold">Regístrese</h3>
        </div>
        <div
          className="w-full bg-white rounded-3xl p-4
        flex flex-col items-center justify-center [grid-area:data]"
        >
          <Image src="/icons/rare-circle.svg" width={150} height={150}/>
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold">Datos y Análisis</h3>
        </div>
        <div
          className="w-full bg-white rounded-3xl p-4
        flex flex-col items-center justify-center [grid-area:nosell]"
        >
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold">Usted no vende</h3>
        </div>
        <div
          className="w-full bg-white rounded-3xl p-4
        flex flex-col items-center justify-center [grid-area:contract]"
        >
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold">Contrato y Certificado</h3>
        </div>
        <div
          className="w-full bg-white rounded-3xl p-4
        flex flex-col items-center justify-center [grid-area:verification]"
        >
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold">Verifíquese</h3>
        </div>
        <div
          className="w-full bg-white rounded-3xl p-4
        flex flex-col items-center justify-center [grid-area:sells]"
        >
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold">Proyección en ventas</h3>
        </div>
        <div
          className="w-full bg-white rounded-3xl p-4
        flex flex-col items-center justify-center [grid-area:informs]"
        >
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold">Acceso a informes de ventas</h3>
        </div>
        <div
          className="w-full bg-white rounded-3xl p-4
        flex flex-col items-center justify-center [grid-area:dex]"
        >
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold">Apertura del Dex de Pulso</h3>
        </div>
        <div
          className="w-full bg-white rounded-3xl p-4
        flex flex-col items-center justify-center [grid-area:utilities]"
        >
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold">Utilidades Semestrales</h3>
        </div>
        <div
          className="w-full bg-white rounded-3xl p-4
        flex flex-col items-center justify-center [grid-area:capital]"
        >
          <Image src="/icons//wallet.svg" width={50} height={50}/>
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold">Recupere su capital</h3>
        </div>
      </div>
    </section>
  );
}

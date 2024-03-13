"use client"
import { Fragment, useState } from "react";
import Empecemos from "./components/Empecemos";
import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Retail from "./components/Retail";
import Form from "./components/Form2";

export default function Home() {

  const [showModal, setShowModal] = useState(false)
console.log(showModal);


  return (
    <Fragment>

    <Navbar setShowModal2={()=>setShowModal(true)}></Navbar>
    <Inicio></Inicio>
    <Retail></Retail>
    <Empecemos setShowModal2={()=>setShowModal(true)}/>
    <HowItWorks />
    <FAQ />
    {/* <Footer></Footer> */}
    <Form isVisible={showModal} onClose={()=>setShowModal(false)}></Form>
    </Fragment>
    
  );
}



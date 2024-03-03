import FAQ from "./components/FAQ";
import HowItWorks from "./components/HowItWorks";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Retail from "./components/Retail";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Inicio></Inicio>
    <Retail></Retail>
    <HowItWorks />
    <FAQ />
    </>
  );
}



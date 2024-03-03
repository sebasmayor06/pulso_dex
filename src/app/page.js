import Empecemos from "./components/Empecemos";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Retail from "./components/Retail";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Inicio></Inicio>
    <Retail></Retail>
    <Empecemos/>
    </>
  );
}



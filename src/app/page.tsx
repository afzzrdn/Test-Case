import Image from "next/image";
import Hero from "./Components/Hero";
import Broadcast from "./Components/Broadcast";
import Campaign from "./Components/Campaign";
import Autoreply from "./Components/Autoreply";
import Opportunity from "./Components/Opportunity";
import Canvas from "./Components/Canvas";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex h-full min-w-[1000px] md:w-full flex-col justify-between bg-[#ECF2FA]">
      <Canvas />
      <Navbar />
      <div className="flex flex-row items-center">
          <Sidebar />
          <div className="flex flex-col">
            <Hero />
            <Broadcast />
            <Campaign />
            <Autoreply />
            <Opportunity />
            <Pricing />
            <Footer />
          </div>
      </div>    
    </main>
  );
}

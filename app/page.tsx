"use client";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import Image from "next/image";

export default function Home() {
  const Earth = dynamic(() => import('@/components/earth'), {

    ssr: false,
  
    loading: () => <p className="opacity-20">...</p>
  
  })
  
  

  const Hero = () => {
    return (
      <div className="w-full h-full flex relative overflow-hidden justify-center p-8 items-center flex-col gap-12 tracking-tight">
        <h1 className="text-5xl text-center font-semibold">
          Conectando o Mundo com a{" "}
          <span className="deepglow-text text-purple-700">
            tecnologia de Ponta
          </span>
        </h1>
        <p className="text-center text-xl w-3/2 font-normal opacity-80">
          Conecte-se ao futuro. Use as nossas soluções inovadoras para manter-se
          conectado
        </p>
        <Link href={"/servicos"}>
          
        </Link>
        <div className="absolute -z-40 w-screen h-screen bg-gradient-to-t from-black via-transparent  to-transparent"/>
        <div className="absolute -z-50 h-[150vh] w-screen flex ">
          <div className="w-full h-full absolute top-[45rem] ">
          <Earth/>
          </div>
        </div>
      </div>
    );
  };

  const AboutCards = () => {
    return (
      <div className="flex items-center flex-col">
        <h1 className="text-2xl my-12">Sobre nós</h1>
        <article className="deepglow-box p-1 m-6 group break-words border-white hover:border-opacity-20 border-opacity-10 bg-zinc-950 border rounded-2xl bg-gradient-radial-t transition-all duration-500 to-black from-purple-950 bg-size-200 bg-pos-100 hover:bg-pos-0">
          <div className="border rounded-xl break-words p-5 border-white border-opacity-5 flex flex-col gap-4">
            <div className="flex flex-row text-2xl font-semibold gap-4 items-center" >
              <div className="p-4 w-14 h-14 flex  justify-center items-center rounded-lg bg-gradient-radial-t from-purple-950 to-black border-white border border-opacity-10">
                1
              </div>
              <h1 className="group-hover:translate-x-3 transition-all duration-150 delay-100">Nossa Missão</h1>
            </div> 
            <p className="text-opacity-70 text-white">Na Skylink, nossa missão é conectar pessoas e empresas ao futuro através de soluções tecnológicas inovadoras e de alta qualidade.</p>
          </div>
        </article>
        <article className="deepglow-box p-1 m-6 group break-words border-white hover:border-opacity-20 border-opacity-10 bg-zinc-950 border rounded-2xl bg-gradient-radial-t transition-all duration-500 to-black from-purple-950 bg-size-200 bg-pos-100 hover:bg-pos-0">
          <div className="border rounded-xl break-words p-5 border-white border-opacity-5 flex flex-col gap-4">
            <div className="flex flex-row text-2xl font-semibold gap-4 items-center" >
              <div className="p-4 w-14 h-14 flex  justify-center items-center rounded-lg bg-gradient-radial-t from-purple-950 to-black border-white border border-opacity-10">
                2
              </div>
              <h1 className="group-hover:translate-x-3 transition-all duration-150 delay-100">Nossos Valores</h1>
            </div> 
            <p className="text-opacity-70 text-white">Valorizamos a inovação, a excelência e o atendimento ao cliente. Nossos valores nos guiam em tudo o que fazemos, garantindo que sempre entregamos serviços de alta qualidade com integridade e transparência.</p>
          </div>
        </article>
        <article className="deepglow-box p-1 m-6 group break-words border-white hover:border-opacity-20 border-opacity-10 bg-zinc-950 border rounded-2xl bg-gradient-radial-t transition-all duration-500 to-black from-purple-950 bg-size-200 bg-pos-100 hover:bg-pos-0">
          <div className="border rounded-xl break-words p-5 border-white border-opacity-5 flex flex-col gap-4">
            <div className="flex flex-row text-2xl font-semibold gap-4 items-center" >
              <div className="p-4 w-14 h-14 flex  justify-center items-center rounded-lg bg-gradient-radial-t from-purple-950 to-black border-white border border-opacity-10">
                3
              </div>
              <h1 className="group-hover:translate-x-3 transition-all duration-150 delay-100">Nossa História</h1>
            </div> 
            <p className="text-opacity-70 text-white">Fundada por especialistas em tecnologia, a Skylink nasceu com o objetivo de revolucionar a conectividade. Desde o início, nos dedicamos a desenvolver soluções avançadas que facilitam a vida de nossos clientes. </p>
          </div>
        </article>
      </div>
    );
  };
  const Services = () => {
    return <div></div>;
  };
  const FeedBacks = () => {
    return <div></div>;
  };

  return (
    <main className="flex flex-col justify-center items-center relative overflow-hidden">
      <section className="h-screen w-full max-w-[1440px] m-auto">
        <Hero />
      </section>
      <section className="h-screen">
        <AboutCards />
      </section>
      <section className="h-screen">
        <Services />
      </section>
      <section className="h-screen">
        <FeedBacks />
      </section>
      <Footer />
    </main>
  );
}

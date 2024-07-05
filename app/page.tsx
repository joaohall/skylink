"use client";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/footer";

export default function Home() {
  const Hero = () => {
    return (
      <div className="w-full h-full flex justify-center items-center flex-col gap-12 tracking-tight">
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
      </div>
    );
  };

  const AboutCards = () => {
    return (
      <div className="flex items-center flex-col">
        <h1 className="text-2xl my-12">Sobre nós</h1>
        <article className="deepglow-box p-1 m-6  break-words border-white border-opacity-10 bg-zinc-950 border rounded-2xl bg-gradient-radial-t from-purple-950 to-black">
          <div className="border rounded-xl break-words p-5 border-white border-opacity-5 flex flex-col gap-4">
            <div className="flex flex-row text-2xl font-semibold gap-4 items-center" >
              <div className="p-4 w-14 h-14 flex justify-center items-center rounded-lg bg-gradient-radial-t from-purple-950 to-black border-white border border-opacity-10">
                1
              </div>
              <h1 className="">Nossa Missão</h1>
            </div> 
            <p className="text-opacity-70 text-white">Na Skylink, nossa missão é conectar pessoas e empresas ao futuro através de soluções tecnológicas inovadoras e de alta qualidade.</p>
          </div>
        </article>
        <article className="deepglow-box p-1 m-6  break-words border-white border-opacity-10 bg-zinc-950 border rounded-2xl bg-gradient-radial-t from-purple-950 to-black">
          <div className="border rounded-xl break-words p-5 border-white border-opacity-5 flex flex-col gap-4">
            <div className="flex flex-row text-2xl font-semibold gap-4 items-center" >
              <div className="p-4 w-14 h-14 flex justify-center items-center rounded-lg bg-gradient-radial-t from-purple-950 to-black border-white border border-opacity-10">
                2
              </div>
              <h1 className="">Nossos Valores</h1>
            </div> 
            <p className="text-opacity-70 text-white">Valorizamos a inovação, a excelência e o atendimento ao cliente. Nossos valores nos guiam em tudo o que fazemos, garantindo que sempre entregamos serviços de alta qualidade com integridade e transparência. </p>
          </div>
        </article>
        <article className="deepglow-box p-1 m-6  break-words border-white border-opacity-10 bg-zinc-950 border rounded-2xl bg-gradient-radial-t from-purple-950 to-black">
          <div className="border rounded-xl break-words p-5 border-white border-opacity-5 flex flex-col gap-4">
            <div className="flex flex-row text-2xl font-semibold gap-4 items-center" >
              <div className="p-4 w-14 h-14 flex justify-center items-center rounded-lg bg-gradient-radial-t from-purple-950 to-black border-white border border-opacity-10">
                3
              </div>
              <h1 className="">Nossa História</h1>
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
      <section className="h-screen w-full max-w-[1440px] m-auto p-8">
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

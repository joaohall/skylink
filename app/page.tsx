"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const Hero = () =>{
    return(
      <div className="w-full h-full flex justify-center items-center flex-col gap-12 tracking-tight">
        <h1 className="text-5xl text-center font-semibold">Conectando o Mundo com a <span className="deepglow-text text-purple-700">tecnologia de Ponta</span></h1>
        <p className="text-center text-xl w-3/2 font-normal opacity-80">Conecte-se ao futuro. Use as nossas soluções inovadoras para manter-se conectado</p>
        <Link href={'/servicos'}>
          <button className="bg-purple-800 font-semibold px-5 py-3 rounded-lg border-neutral-300 border-[1px] border-opacity-50">
            Conhecer o futuro
          </button>
        </Link>
      </div>
    )
  }
  
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <section className="h-full w-screen max-w-[1440px] m-auto p-8">
        <Hero/>
      </section>
      <section>

      </section>
      <section>

      </section>
    </main>
  );
}

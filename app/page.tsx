"use client";
import Link from "next/link";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import {
  HistoryCard,
  StatisticCard,
  TestimonialCard,
  ServicesCard,
} from "@/components/cards";
import { Slide } from "@/components/typography";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });
  const Earth = dynamic(() => import("@/components/earth"), {
    ssr: false,

    loading: () => <p className="opacity-20">...</p>,
  });

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
        <Link href={"/servicos"}></Link>
        <div className="absolute -z-40 w-screen h-screen bg-gradient-to-t from-black via-transparent  to-transparent" />
        <div className="absolute -z-50 h-[150vh] w-screen flex ">
          <div className="w-full h-[100rem] absolute top-[45rem] ">
            <Earth />
          </div>
        </div>
      </div>
    );
  };

  const AboutCards = () => {
    return (
      <div className="flex items-center flex-col m-6 gap-6">
        <h1 className="text-2xl my-12 font-semibold">Sobre nós</h1>
        <HistoryCard
          numeration={1}
          title="Nossa missão"
          subtitle="Na Skylink, nossa missão é conectar pessoas e empresas ao futuro
              através de soluções tecnológicas inovadoras e de alta qualidade."
        />
        <HistoryCard
          numeration={2}
          title="Nossos Valores"
          subtitle="Valorizamos a inovação, a excelência e o atendimento ao cliente.
              Nossos valores nos guiam em tudo o que fazemos, garantindo que
              sempre entregamos serviços de alta qualidade com integridade e
              transparência."
        />
        <HistoryCard
          numeration={3}
          title="Nossa História"
          subtitle="Fundada por especialistas em tecnologia, a Skylink nasceu com o
              objetivo de revolucionar a conectividade. Desde o início, nos
              dedicamos a desenvolver soluções avançadas que facilitam a vida de
              nossos clientes."
        />
      </div>
    );
  };

  const Services = () => {
    return (
      <article className="p-6 flex flex-col gap-10">
        <div className="flex gap-6 flex-col my-10">
          <Slide direction={"left"} progress={scrollYProgress} left={"-40%"} />
          <Slide direction={"right"} progress={scrollYProgress} left={"-25%"} />
          <Slide direction={"left"} progress={scrollYProgress} left={"-75%"} />
        </div>
        <h1 className="text-2xl font-semibold">Por que escolher a Skylink?</h1>
        <div>
          <StatisticCard
            title={"+2000 clientes satisfeitos"}
            subtitle={
              "Mais de 2000 clientes felizes com nossos serviços excepcionais."
            }
          />
        </div>
        <div>
          <StatisticCard
            title={"Velocidade de 2Gbps"}
            subtitle={
              "Navegue na velocidade de até 2Gbps para uma experiência de internet sem interrupções."
            }
          />
        </div>
        <div>
          <StatisticCard
            title={"Conexão 5GHz"}
            subtitle={
              "Conexão estável e rápida com a tecnologia avançada de 5GHz."
            }
          />
        </div>
        <div>
          <ServicesCard tier={0} price={150} benefits={[]} cons={[]} title={""} subtitle={""} />
          <ServicesCard tier={0} price={200} benefits={[]} cons={[]} title={""} subtitle={""} />
          <ServicesCard tier={0} price={300} benefits={[]} cons={[]} title={""} subtitle={""} />
        </div>
      </article>
    );
  };

  const Feedback = () => {
    return (
      <article className="p-6 flex flex-col gap-10">
        <div>
          <h1 className="text-center text-2xl my-12 font-semibold">
            Avaliações de diferentes tipos
          </h1>
          <div className="flex gap-4 flex-col">
            <TestimonialCard
              userName={"Lacerda"}
              userPhoto={"/usersPhotos/user1.png"}
              rating={5}
              title={"Desenvolvedor Web"}
              subtitle={
                "Essa conexão de 2Gbps da Skylink é como um café extra forte: me mantém acordado e produtivo o dia todo! Pushs rápidos e estabilidade constante são a cereja do bolo. Recomendo fortemente, especialmente se você quer evitar crises de internet na hora do commit!"
              }
            />
            <TestimonialCard
              userName={"Jady Hall"}
              userPhoto={"/usersPhotos/user2.png"}
              rating={5}
              title={"Terapeuta"}
              subtitle={
                "Precisar trabalhar em casa como terapeuta ocupacional significa que meu atendimento aos clientes depende de uma conexão estável e de qualidade. Com a Skylink, posso garantir que meus clientes recebem um serviço de excelência, sem interrupções. Estou muito satisfeita com a confiabilidade e a velocidade proporcionadas!"
              }
            />
            <TestimonialCard
              userName={"Hadassa"}
              userPhoto={"/usersPhotos/user3.png"}
              rating={5}
              title={"Violinista"}
              subtitle={
                "Como professora de violino, a Skylink tem sido essencial para expandir minhas práticas online. A conexão rápida e estável permite que eu conduza aulas com qualidade, sem atrasos ou quedas na transmissão. Estou muito feliz por poder oferecer aos meus alunos uma experiência de aprendizado superior."
              }
            />
          </div>
        </div>
      </article>
    );
  };

  return (
    <main className="flex flex-col justify-center items-center relative overflow-hidden">
      <section className="h-screen w-full max-w-[1440px] m-auto">
        <Hero />
      </section>
      <section className="w-full max-w-[1440px] m-auto">
        <AboutCards />
      </section>
      <section className="w-full max-w-[1440px] m-auto">
        <Services />
      </section>
      <section className="w-full max-w-[1440px] m-auto">
        <Feedback />
      </section>
      <Footer />
    </main>
  );
}

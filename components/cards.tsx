import {
  StatisticCardProps,
  TestimonialCardProps,
  HistoryCardProps,
  ServicesCardProps
} from "@/utils/interfaces";
import Image from "next/image";

export function StatisticCard(props:StatisticCardProps) {
  const {title, subtitle} = props
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="opacity-70">
        {subtitle}
      </p>
    </div>
  );
}

export function TestimonialCard(props: TestimonialCardProps) {
  const { title, subtitle, userName, userPhoto, rating } = props;
  return (
    <article className="deepglow-box w-full group p-6 break-words border-white hover:border-opacity-20 border-opacity-10 bg-zinc-950 border rounded-2xl bg-gradient-radial-t transition-all duration-500 to-black from-purple-950 bg-size-200 bg-pos-100 hover:bg-pos-0">
      <div className="flex items-end gap-4">
        <Image
          src={userPhoto}
          width={50}
          height={50}
          className="w-16 h-16 object-cover rounded-lg"
          alt="Foto do usuário"
        />
        <div>
          <h1 className="text-2xl font-semibold">{userName}</h1>
          <p className="opacity-60 mb-1">{title}</p>
          <div className="flex gap-1">
             {Array.from({ length: rating }, (_, index) => (
              <Image
                key={index}
                src={"/icons/star.svg"}
                width={10}
                height={10}
                alt="Ícone estrela"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-4">
        <p>{subtitle}</p>
      </div>
    </article>
  );
}

export function HistoryCard(props: HistoryCardProps) {
  const { title, subtitle, numeration } = props;
  return (
    <article className="deepglow-box p-1 group break-words border-white hover:border-opacity-20 border-opacity-10 bg-zinc-950 border rounded-2xl bg-gradient-radial-t transition-all duration-500 to-black from-purple-950 bg-size-200 bg-pos-100 hover:bg-pos-0">
      <div className="border rounded-xl break-words p-5 border-white border-opacity-5 flex flex-col gap-4">
        <div className="flex flex-row text-2xl font-semibold gap-4 items-center">
          <div className="p-4 w-14 h-14 flex  justify-center items-center rounded-lg bg-gradient-radial-t from-purple-950 to-black border-white border border-opacity-10">
            {numeration}
          </div>
          <h1 className="group-hover:translate-x-3 transition-all duration-150 delay-100">
            {title}
          </h1>
        </div>
        <p className="text-opacity-70 text-white">{subtitle}</p>
      </div>
    </article>
  );
}

export function ServicesCard(props:ServicesCardProps){
  return(
    <article>
      
    </article>
  )
}
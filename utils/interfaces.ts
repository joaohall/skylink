import { MotionValue } from "framer-motion";

// interfaces.ts
export interface sizes {
    height: number;
    width: number;
}
export interface image extends sizes{
    alternativeText : string;
    source : string;
    about? : string;
    contentFill? : string;
}


interface CardBase{
    title: string;
    subtitle:string;
}
export interface StatisticCardProps extends CardBase{}
export interface TestimonialCardProps extends CardBase{
    userName: string;
    userPhoto: string;
    rating: number;
  }

  export interface HistoryCardProps extends CardBase{
    numeration: number;
  }

  export interface ServicesCardProps extends CardBase{
    tier: number;
    price: number;
    benefits: string[];
    cons: string[];
  } 

  export interface SlideProps{
    direction:string;
    progress:MotionValue;
    left:string;

  }
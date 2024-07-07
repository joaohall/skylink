'use client'
import {motion, useTransform} from 'framer-motion'
import { SlideProps } from '@/utils/interfaces';

export const Slide = (props:SlideProps) => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  
    return (
      <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
        <Phrase />
      </motion.div>
    )
  }

const Phrase = () => {
  return (
    <div className={'px-5 flex gap-5 items-center bg-purple-800 text-black __className_22c20b'}>
      <p className="text-[7.5vw] text-opacity-5">Skylink </p>
      <p className="text-[7.5vw] ">Skylink </p>
      <p className="text-[7.5vw] ">Skylink </p>
      <p className="text-[7.5vw] ">Skylink </p>
      <p className="text-[7.5vw] ">Skylink </p>
      <p className="text-[7.5vw] ">Skylink </p>
    </div>
  );
};

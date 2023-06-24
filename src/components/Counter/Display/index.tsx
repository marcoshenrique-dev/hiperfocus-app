import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

type DisplayProps = {
  startTime: number;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

export const Display = ({startTime, isPlaying, setIsPlaying}: DisplayProps) => {
  const [remainingTime, setRemainingTime] = useState(startTime);

  useEffect(() => {
    setRemainingTime(startTime);
  }, [startTime]);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if(isPlaying) {
     timer = setInterval(() => {
       
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          setIsPlaying(false);
          clearInterval(timer);
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPlaying, setIsPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const calculateProgress = () => {
    return ((remainingTime * 100) / 60).toFixed(2);
  };

  return (
  <CircularProgressbarWithChildren styles={
    {
      path: {
        stroke: '#FACC15'
      },
      trail: {
        stroke: '#facc151f'
      }
    }
    
  } value={parseInt(calculateProgress())} >
    <h1 className="font-bold text-4xl">{formatTime(remainingTime)}</h1>
  </CircularProgressbarWithChildren>
  );
};


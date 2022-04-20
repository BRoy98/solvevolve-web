import React, { useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

const MasterHead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const refContainer = React.useRef<HTMLDivElement>(null);
  const { scrollY } = React.useContext(ScrollContext);

  let progress = 0;

  if (refContainer.current) {
    progress = Math.min(1, scrollY / refContainer.current.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
    console.log("image loaded");
  }, []);

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col item-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(${-progress * 20}vh)`,
      }}
    >
      {/* 0 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/final-v1-small.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full object-cover bg-black opacity-60" />
      <div
        className={`flex-grow-0 text-center pb-20 md:pb-10 pt-20 md:pt-10 transition-all 
        duration-1000 items-center justify-center ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={"/assets/logo-white.png"}
          alt="solvevolve logo"
          height={40}
          width={219.04}
          onLoad={handleImageLoaded}
        />
      </div>
      <div className="p-12 font-bold z-10 text-center text-white flex flex-1 flex-col items-center justify-center">
        {/* <h1 className="mb-6 text-4xl xl:text-5xl">Solvevolve</h1> */}
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Internet of Things,</span> <span>done right.</span>
        </h2>
      </div>
      <div
        className={`flex-grow-0 text-center pb-20 pt-20 md:pb-10 md:pt-10 transition-all duration-1000 items-center justify-center  ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src={"/assets/angle-down-solid.svg"}
          alt="scroll down"
          height={40}
          width={40}
          onLoadingComplete={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default MasterHead;

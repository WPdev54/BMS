import { Code } from "@nextui-org/code";
import { Snippet } from "@nextui-org/snippet";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center 3xl:h-screen">
      <div>
        <div className="w-full text-9xl font-bold">
            <div className="flex w-full text-9xl items-center justify-center bg-black1">
              <span className="absolute animate-pulse mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-7xl box-content font-extrabold text-transparent text-center select-none">
              Play Limitless And <br /> Dive Into A Endless Adventure
              </span>
              <h1 className="text-6xl leading-[rem] mx-5 font-black">
          <span className="text-[2.2rem] mb-5 text-transparent bg-clip-text bg-gradient-to-tl from-[#05cf76] via-[#6de730] to-[#00ffa4]">
            Bangladesh Minecraft Society <br />
          </span>
          <span>
            Play Limitless And <br />
          </span>
          <span>Dive Into A Endless Adventure</span>
          <br />
          <span>
            {" "}
            <Snippet symbol="" className="capitalize" variant="flat">
            PLAY.MINECRAFTBANGLADESH.COM
            </Snippet>
          </span>
        </h1>
            </div>
          </div>
      </div>
      <div>{/* <img src="/hero.png" alt='hero'  /> */}</div>
    </div>
  );
};

export default Hero;

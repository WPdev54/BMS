"use client";
import { Snippet } from "@nextui-org/snippet";
import React from "react";

const VoteHero = () => {
  return (
    <div>
      <div className="flex items-center 3xl:h-screen">
        <div>
          <div className="w-full text-9xl font-bold">
            <div className="flex w-full text-9xl items-center justify-center bg-black1">
              <span className="animate-pulse absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-7xl box-content font-extrabold text-transparent text-center select-none">
                Vote Our Server <br /> For Getting OP Loots For <br /> Free
                Within In Few Clicks
              </span>
              <h1 className="text-6xl leading-[rem] mx-5 font-black">
                <span className="text-[2.2rem] mb-5 text-transparent bg-clip-text bg-gradient-to-tl from-[#05cf76] via-[#6de730] to-[#00ffa4]">
                  Bangla Network <br />
                </span>
                <span>
                  Vote Our Server
                  <br />
                </span>
                <span>
                  For Getting High Rated Loots For <br />
                </span>
                <span>Free Within In Few Clicks</span>
                <br />
                <span>
                  {" "}
                  <Snippet symbol="" variant="flat">
                  PLAY.BANGLANETWORK.XYZ
                  </Snippet>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div>{/* <img src="/hero.png" alt='hero'  /> */}</div>
      </div>
    </div>
  );
};

export default VoteHero;

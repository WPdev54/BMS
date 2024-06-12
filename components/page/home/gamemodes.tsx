import React from "react";

const OurGameModes = () => {
  return (
    <div>
      <div className="heading cursor-default">
        <div className="flex w-full items-center justify-center bg-black1">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
            Check Our Gamemodes
          </span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
            Check Our Gamemodes
          </h1>
        </div>
      </div>

      <div className="gamemodes md:flex gap-12">
        <div>
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="/survival.webp"
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">Sruvival</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              A Competitive Economy Based Survival
            </div>
          </article>
        </div>
        <div>
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="bedwar.jpg"
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">Bedwars</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Protect Your Bed From Being Distroyed
            </div>
          </article>
        </div>
        <div>
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="csgo.jpg"
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">Factions</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                Coming Soon ..........................................
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default OurGameModes;

import React from "react";

const Branding = () => {
  return (
   <div className="relative">
   
   <div className="font-Minecraft  grid grid-cols-12 my-20 select-none gap-4">
      <div className="col-span-2">
        <img src="/logo.png" alt="" />
      </div>
      <div className="col-span-10">
        <div className="flex w-full  justify-between">
          <p>Minecraft Server</p>
          <div className="flex gap-2">
            <p>28 / 200</p>
            <img className="bg-gray-700" src="/ping.png" alt="" />
          </div>
        </div>
        <p>
          <span className="text-[20px] mb-5 text-transparent bg-clip-text bg-gradient-to-tl from-[#0dda9f] via-[#1cc2c4] to-[#c34dfb] font-bold">
            Bangladesh{" "}
          </span>
          <span className="text-[20px] mb-5 text-transparent bg-clip-text bg-gradient-to-tl from-[#05cf76] via-[#6de730] to-[#00ffa4] font-bold">
            Minecraft{" "}
          </span>
          <span className="text-[20px] mb-5 text-transparent bg-clip-text bg-gradient-to-tl from-[#c9eee4] via-[#797a7a] to-[#bfb4c4] font-bold">
            Society{" "}
          </span>
        </p>
        <p className="leading-3">
          <span className="text-[20px] mb-5 text-transparent bg-clip-text bg-gradient-to-tl from-[#c9eee4] via-[#797a7a] to-[#bfb4c4] font-bold">
            ---==={" "}
          </span>
          <span className="text-[20px] mb-5 text-transparent bg-clip-text bg-gradient-to-tl from-[#05cf37]  to-[#a5ddc9] font-bold">
            {" "}
            [Survival And Bedwars]{" "}
          </span>
          <span className="text-[20px] mb-5 text-transparent bg-clip-text bg-gradient-to-tl from-[#c9eee4] via-[#797a7a] to-[#bfb4c4] font-bold">
            ===---{" "}
          </span>
        </p>
      </div>
    </div>

    {/* OVERLAPPING */}

    <div className="font-Minecraft absolute grid grid-cols-12 my-20 select-none gap-4">
      <div className="col-span-2">
      </div>
      <div className="col-span-10">
       
      </div>
    </div>
   
   </div>
  );
};

export default Branding;

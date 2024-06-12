import { title } from "@/components/primitives";
import TransitionFrame from "../transition";
import { Snippet } from "@nextui-org/snippet";

export default function AboutPage() {
  return (
    <div className="flex items-center gap-20 3xl:h-screen">
      <div>
        <div className="w-full text-2xl font-bold">
          <div className="flex w-full text-9xl items-center justify-center bg-black1">
            <span className="absolute animate-pulse mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-7xl box-content font-extrabold text-transparent text-center select-none">
              About Us
            </span>
            <h1 className="text-6xl leading-[rem] mx-5 font-black">
              <span>
                About Us <br />
              </span>
            </h1>
          </div>
            <p className="text-[20px] text-slate-400 py-5 max-w-[40rem] ">We Are The Minecraft First Server In Bangladesh Which Is Not A Pay To Win Server Instead It Is A Play To Win Server So You Can So That Can Show Your Skills For Your Progress And Show The Entire Server How You Play The Game .  As This Is Not Pay-To-Win Server We Can Buy Ranks By Using Our Skills Like It Is A Economy Based Server .</p>
        </div>
      </div>
      <div><img src="/hero.png" width={"400px"} alt='hero'  /></div>
      <TransitionFrame />
    </div>
  );
}

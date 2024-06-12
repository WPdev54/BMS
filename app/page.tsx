import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Hero from "@/components/page/home/hero";
import Branding from "@/components/page/home/branding";
import "../styles/globals.css";
import TransitionFrame from "./transition";
import OurGameModes from "@/components/page/home/gamemodes";
import FAQ from "@/components/page/faq";
import Footer from "@/components/page/home/footer";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Hero />
        <Branding />
        <OurGameModes />
      </section>
      <section className="md: mx-20">
      <FAQ />
      </section>
      <TransitionFrame />
    </>
  );
}

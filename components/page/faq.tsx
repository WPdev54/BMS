"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { faq } from "@/config/constants";

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const FAQ = () => {
  return (
    <div className="py-8">
      <div className="heading cursor-default">
        <div className="flex w-full items-center justify-center bg-black1">
          <span className=" animate-pulse absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
            FAQS
          </span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
            FAQS
          </h1>
        </div>
      </div>
      <Accordion>
        {faq.map((f,i) => (
          <AccordionItem
            key={i}
            aria-label={f.label}
            subtitle="Click For Knowing About Us"
            title={f.label}
          >
            {f.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;

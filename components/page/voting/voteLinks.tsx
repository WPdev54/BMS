"use client";
import { voteLinks } from "@/config/constants";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import React from "react";

const VoteLinks = () => {
  return (
    <div className="py-16">
      <div className="heading cursor-default">
        <div className="flex w-full items-center justify-center bg-black1">
          <span className="animate-pulse absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
            Vote Links
          </span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
            Vote Links
          </h1>
        </div>
      </div>

    <div className="cards py-10 md:grid grid-cols-2 gap-10">
        {voteLinks.map((v, i) => (
          <div key={i} className="">
            <Card className="py-4 my-6 max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  className="rounded-sm"
                  src="/hero.png"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Vote Link {i + 1}</p>
                  <p className="text-small text-default-500">{v.protocol}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Vote To This Website By Clicking The Button Below</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href={v.link}>
                  Vote
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteLinks;

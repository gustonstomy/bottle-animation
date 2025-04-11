"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAnimatingDown, setIsAnimatingDown] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fullBottleUp, setullBottleUp] = useState(false);

  // useEffect(() => {
  //   const animtationSequence = () => {
  //     setIsAnimating(false);
  //     setIsAnimatingDown(false);

  //     setTimeout(() => {
  //       setIsAnimating(true);
  //     }, 1000);

  //     setTimeout(() => {
  //       setIsAnimatingDown(true);
  //     }, 3000);

  //     setTimeout(() => {
  //       setFadeOut(true);
  //     }, 5000);

  //     setTimeout(() => {
  //       setullBottleUp(true);
  //     }, 5500);
  //   };

  //   animtationSequence();

  //   const intervalId = setInterval(animtationSequence, 7000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className=" h-[100dvh] no-scrollbar overflow-hidden">
      <main
        className={`relative h-[100dvh]  overflow-hidden bg-[#032427] transition-transform duration-2000  no-scrollbar ${
          isAnimatingDown ? "-translate-y-full" : ""
        } ${fadeOut ? "translate-y-0" : ""}`}
      >
        <div className=" w-full flex justify-between gap-4 px-[5rem] pt-[1rem]">
          <div className="flex items-center ">
            <Image
              alt="b"
              width={80}
              height={80}
              src={"/images/solar_bottle-broken.svg"}
            />
            <p className="text-[24px] font-[500]">Hydrate</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[20px] text-[#FFFFFF] font-[500]">Home</p>
            <p className="text-[20px] text-gray-500 font-[500]">About us</p>
            <p className="text-[20px] text-gray-500 font-[500]">
              All collection
            </p>
            <p className="text-[20px] text-gray-500 font-[500]">Contact us</p>
          </div>
          <div className="flex items-center ml-[5rem]">
            <button
              // onClick={handleClickDown}
              className=" bg-[#FF4D03] hover:bg-[#FF4D20] text-white font-bold py-2 px-4 rounded-[42px]"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="absolute left-[25%] top-[22rem]">
          <div
            className={`flex flex-col gap-0 items-center transition-all duration-2000 ${
              fadeOut
                ? "opacity-0 scale-50"
                : isAnimating
                ? "opacity-100 scale-100"
                : "opacity-0 scale-50"
            } `}
          >
            <span className="text-[64px] font-[500] text-white p-0 m-0">
              Elevate Hydration, Inspire Living
            </span>
            <span className="text-[64px] font-[500] text-white p-0 m-0">
              – Pure Essence in Every Drop.
            </span>

            <span className="text-[20px] font-[500] text-white p-0 my-[24px]">
              Hydration Elevated: Sip Excellence with Every Drop
            </span>
            <button className=" bg-[#FF4D03] hover:bg-[#FF4D20] text-white font-bold py-2 px-4 rounded-[42px]">
              Resume Animation
            </button>
          </div>
        </div>
      </main>

      <div
        className={` no-scrollbar absolute inset-x-0 bottom-0 h-[100dvh] bg-[#021618]  flex transition-all duration-2000 ${
          isAnimatingDown ? "translate-y-0" : "translate-y-full"
        } ${fadeOut ? "opacity-0" : ""}`}
      >
        <div className="h-full w-full gap-[104px] flex-col flex-1 flex items-center bg-[#2B575B] justify-center">
          <div className="flex flex-col gap-[20px] items-center">
            <Image alt="lead" src={"/images/hand.svg"} width={80} height={80} />
            <p className="text-[32px] font-[500] text-white">
              SUSTAINABLE & BPA FREE
            </p>
          </div>
          <div className="flex flex-col gap-[20px] items-center">
            <Image alt="lead" src={"/images/drop.svg"} width={80} height={80} />
            <p className="text-[32px] font-[500] text-white">LIGHTWEIGHT</p>
          </div>
          <div className="flex flex-col gap-[20px] items-center">
            <Image
              alt="lead"
              src={"/images/fontisto_recycle.svg"}
              width={80}
              height={80}
            />
            <p className="text-[32px] font-[500] text-white">
              LIFETIME WARRANTY
            </p>
          </div>
        </div>
        <div className="h-full w-full flex-1 relative bg-[#2B575B]">
          <Image
            alt="lead"
            src={"/images/greenBottle.svg"}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className={``}>
        <div
          className={`absolute z-10 top-[49%] sm:top-[45%] md:top-[45%] xl:top-[50%] 2xl:top-[36%]  left-[47%] md:left-[45.5%] xl:left-[44.8%] transition-all duration-4000  ${
            fullBottleUp && "animate-move-all-up "
          } ${isAnimating ? "animate-move-up" : ""} ${
            isAnimatingDown ? "animate-move-top-down" : ""
          }`}
        >
          <Image alt="lead" src={"/images/lead.svg"} width={180} height={180} />
        </div>

        <div
          className={`absolute sm:-bottom-70  lg:-bottom-70 2xl:-bottom-40 left-[42%] xl:left-[43%] transition-all duration-4000  ${
            fullBottleUp && "animate-move-all-up "
          } ${
            isAnimatingDown
              ? "animate-move-down-up"
              : isAnimating
              ? "animate-move-down"
              : ""
          } `}
        >
          <Image alt="lead" src={"/images/full.svg"} width={250} height={250} />
        </div>
      </div>
    </div>
  );
}

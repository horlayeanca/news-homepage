import React from "react";
import heroDesktop from "../assets/images/heroDesktop.jpg";

export default function Hero() {
  return (
    <div className="px-5 flex flex-col gap-4 sm:flex-row pt-5">
      <div className="">
        <div className="w-full border border-blue-400">
          <img src={heroDesktop} alt="hero" className="w-full h-[280px]" />
        </div>
        <div className="flex flex-col w-full md:w-full md:flex-row">
          <div
            className="text-4xl sm:w-1/2 py-5
        "
          >
            <h1 className="font-black text-6xl font-interExtrabold">
              The Bright Future of <br /> Web 3.0?
            </h1>
          </div>
          <div className="px-3 pt-5 pb-2 sm:w-1/2">
            <p className="text-base font-interRegular leading-6">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="py-2 px-10 text-white font-interRegular bg-red-600 mt-14 hover:bg-white hover:text-black duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 bg-black text-white pt-3 mt-5 sm:mt-0">
        <h1 className="font-extrabold text-3xl py-5 font-interRegular">NEW</h1>
        <div className="font-normal border-b border-white">
          <h2 className="text-lg pb-2 font-interRegular font-semibold">
            Hydrogen VS Electric Cars
          </h2>
          <p className="text-xs font-thin pb-6 font-interRegular leading-7">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="font-normal border-b border-white py-5">
          <h2 className="text-lg pb-2">The Downsides of AI Artistry</h2>
          <p className="text-xs font-thin pb-6 font-interRegular leading-7">
            What are the possible adverse effects of on-demand AI image
            generation
          </p>
        </div>
        <div className="font-normal pt-5">
          <h2 className="text-lg pb-2">Is VC Funding Drying Up?</h2>
          <p className="text-xs font-thin pb-6 font-interRegular leading-7">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
}

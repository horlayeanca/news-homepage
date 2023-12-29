import React from "react";
import retro from "../assets/images/retro.jpg";
import laptops from "../assets/images/laptops.jpg";
import gaming from "../assets/images/gaming.jpg";

export default function Trending() {
  return (
    <div className="flex flex-col sm:flex-row px-5 py-5 gap-2">
      <div className="flex gap-4">
        <img src={retro} alt="electronics" className="h-40" />
        <div className="px-2 grid place-self-stretch">
          <span className="text-2xl text-gray-500 pb-3 font-interBold font-extrabold">
            01
          </span>
          <h1 className="text-lg font-interBold">Reviving Retro PCs</h1>
          <p className="text-sm font-interRegular">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <img src={laptops} alt="laptops" className="h-40" />
        <div className="px-2 grid place-self-stretch">
          <span className="text-2xl text-gray-500 pb-3 font-interBold font-extrabold">
            02
          </span>
          <h1 className="text-lg font-interBold">Top 10 Laptops of 2022</h1>
          <p className="text-sm font-interRegular">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <img src={gaming} alt="gaming" className="h-40" />
        <div className="px-2 grid place-self-stretch">
          <span className="text-2xl text-gray-500 pb-3 font-interBold font-extrabold">
            03
          </span>
          <h1 className="text-lg font-interBold">The Growth of Gaming</h1>
          <p className="text-sm font-interRegular">
            How the pandemic has sparked fresh opprtunities.
          </p>
        </div>
      </div>
    </div>
  );
}

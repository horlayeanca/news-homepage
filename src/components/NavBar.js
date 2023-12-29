import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/images/logo.svg";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const toggleMenu = () => setNav(!nav);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "New",
    },
    {
      id: 3,
      link: "Popular",
    },
    {
      id: 4,
      link: "Trending",
    },
    {
      id: 5,
      link: "Categories",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-5">
      <span className="text-3xl font-extrabold ">
        <img src={logo} alt="logo" />
      </span>

      <div className="hidden md:flex justify-between font-interRegular">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 list-none text-lg hover:scale-100 duration-300 hover:text-red-400 cursor-pointer"
          >
            <a href="/">{link}</a>
          </li>
        ))}
      </div>
      <div onClick={toggleMenu} className="pr-4 z-10 md:hidden cursor-pointer">
        {nav ? <RxCross2 size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center absolute top-0 right-0 w-2/3 bg-gray-200 h-screen md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-3 list-none text-lg hover:scale-100 duration-300 hover:text-red-400 cursor-pointer hover:bg-gray-50 font-interRegular"
            >
              <a href="/" onClick={() => setNav(!nav)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

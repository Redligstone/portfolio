import React from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = React.useState(false);

  const links = [
    {
      id: 1,
      link: "Главная",
    },
    {
      id: 2,
      link: "Обо мне",
    },
    {
      id: 3,
      link: "Портфолио",
    },
    {
      id: 4,
      link: "Навыки",
    },
    {
      id: 5,
      link: "Контакты",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-10">
      <div>
        <h1 className="text-5xl font-signature ml-2 cursor-pointer"><Link to='Главная' smooth duration={500}>Gleb Marenin</Link></h1>
      </div>

      <ul className="hidden md:flex ">

        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-2xl cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

import React from "react";
import photo from "../assets/photo.jpg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div
      name="Главная"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center  justify-center md:gap-8  h-full md:flex-row px-4">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white ">Я начинающий Front-End разработчик</h2>
            <p className="text-gray-500 py-6 max-w-md">
            Я имею более чем двухлетний опыт программирования и разрабатываю приложения используя такие технологии как React, Redux, Javascript и TypeScript.
            </p>
            <div>
              <Link to='Портфолио' smooth duration={500}>
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                  Портфолио
                  <span className=" group-hover:rotate-90 duration-300">
                    <HiOutlineArrowNarrowRight size={20} className="ml-2"/>
                  </span>
                </button>
              </Link>
            </div>
        </div>

        <div className="mb-0 sm:mb-10">
          <img src={photo} className="rounded-2xl  mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import one from "../assets/portfolio/shop-preview.jpg";
import two from "../assets/portfolio/social-preview.jpg";
import three from "../assets/portfolio/weather-preview.jpg";
import four from "../assets/portfolio/chat-preview.jpg";
import five from "../assets/portfolio/crypto-preview1.jpg";
import six from "../assets/portfolio/notes-preview.jpg";

const Portfolio = () => {
  const [showProject, setShowProject] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      src: one,
      about:
        "Этот проект я сделал после прохождения курса React-Pizza v2. Сайт был сверстан с нуля по макету из интернета. Сайт не адаптивный, т.к. целью этого проекта было закрепить полученные знания по работе с React,React-Hooks,Redux-toolkit,Typescript и React-redux. ",
      link: "https://github.com/Redligstone/clothes-shop",
      demo: "https://redligstone.github.io/clothes-shop/#/shop",
    },
    {
      id: 2,
      src: two,
      about: (
        <div class="break-words">
          Авторизация на этом сайте работает через получение cookies с API{" "}
          <a
            style={{ textDecoration: "underline" }}
            href="https://social-network.samuraijs.com/"
          >
            https://social-network.samuraijs.com/
          </a>
          . Чтобы ознакомиться с работой сайта, необходимо в доп. вкладке
          авторизооваться на сайте с API используя следующие email –
          free@samuraijs.com и пароль – free. Этот проект я сделал в течении
          прохождения курса “React JS –путь самурая 1.0”. Его прохождение дало
          мне понимание технологий React и Redux, а также принципы работы с UI –
          DAL – BLL уровнями.
        </div>
      ),
      link: "https://github.com/Redligstone/Social_network",
      demo: "https://redligstone.github.io/Social_network/",
    },
    {
      id: 3,
      src: three,
      about: (
        <div>
          <p>
            *Поиск города происходит на английском языке. Из-за особенности API.
          </p>
          <p>
            Работа над данным проектом помогла мне более глубоко понять принципы
            взаимодействия API. Также здесь я потренировал типизацию через
            TypeScript и начал знакомство с библиотекой Tailwind CSS.
          </p>
        </div>
      ),
      link: "https://github.com/Redligstone/WeatherApp",
      demo: "https://redligstone.github.io/WeatherApp/",
    },
    {
      id: 4,
      src: four,
      about: "При работе над этим проектом я ознакомился с библиотекой Socket.IO и её базовыми принципами работы. Также поверхностно коснулся работы с сервером, после чего задеплоил его на платформе Render.",
      link: "https://github.com/Redligstone/chat",
      demo: "https://redligstone.github.io/chat/",
    },
    {
      id: 5,
      src: five,
      about: "",
      link: "https://github.com/Redligstone/CryptoTracker",
      demo: "https://redligstone.github.io/CryptoTracker/",
    },
    {
      id: 6,
      src: six,
      about: "",
      link: "https://github.com/Redligstone/Notes",
      demo: "https://redligstone.github.io/Notes/#/",
    },
  ];

  return (
    <div
      name="Портфолио"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Портфолио
          </p>
          <p className="py-6">Здесь вы можете ознакомиться с моими проектами</p>
        </div>

        <div className="grid px-6 sm:grid-cols-2 md:grid-cols-3 gap-8  lg:px-0">
          {projects.map(({ id, src, about, link, demo }) => (
            <div>
              {showProject === false && selectedProject === id ? (
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 rounded-lg p-5 "
                >
                  <p className="mb-4 overflow-auto h-48 no-scrollbar break-words">
                    {about}
                  </p>
                  <a
                    className="hover:scale-110 text-blue-300 py-2 duration-200  cursor-pointer"
                    onClick={() => setShowProject(true)}
                  >
                    Назад
                  </a>
                </div>
              ) : (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="object-cover w-full h-48 rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center md:flex-col lg:flex-row">
                    <a
                      href={demo}
                      target="blank"
                      className="w1/3 px-5 py-2 m-2 duration-200 hover:scale-110 hover:text-blue-300"
                    >
                      Демо
                    </a>
                    <a
                      href={link}
                      target="blank"
                      className="w1/3 px-5 py-2 m-4 duration-200 hover:scale-110 hover:text-blue-300"
                    >
                      Код
                    </a>
                    <a
                      className="w1/3 px-5 py-2 m-4 duration-200 hover:scale-110 hover:text-blue-300"
                      onClick={() => {
                        setShowProject(false);
                        setSelectedProject(id);
                      }}
                    >
                      Инфо
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

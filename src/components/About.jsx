import React from "react";

const About = () => {
  return (
    <div
      name="Обо мне"
      className="w-full lg:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Обо мне
          </p>
        </div>
        <p className="text-lg mt-5">
          Я начинающий фронтенд-разработчик. Мое погружение в мир
          программирования началось два года назад, когда я решил исследовать
          свой интерес к информационным технологиям и отодвинул карьеру
          преподавателя на второй план. Предыдущий карьерный опыт научил меня
          ценным навыкам, таким как стрессоустойчивость и способность быстро
          обучаться новым концепциям, которые, как я считаю, отлично переносятся
          на мир языков программирования.
        </p>

        <br />

        <p className="text-lg">
          Проведя четыре года преподавая английский язык, я отточил свои навыки
          коммуникации и развил внимание к деталям. Программирование стало для
          меня захватывающим вызовом, который сочетает творческий подход и
          систематическое решение проблем. Умение находить элегантные и
          эффективные решения сложных проблем, подобно головоломкам, подкупает
          меня и мотивирует постоянно развивать свои навыки. За последние два
          года я сосредоточился на освоении различных языков программирования.
          Начиная с основных языков, таких как HTML, CSS и JavaScript, я
          применял свои навыки в создании динамичных и пользовательских
          интерфейсов. Постепенно я перешёл к React, Redux и TypeScript , после
          изучения которых обрел способность создавать полноценные
          веб-приложения с более сложной структурой.
          <p className="mt-10 text-lg">
            Я понимаю, что самый быстрый способ повысить свои навыки и
            компетенцию – это создание настоящих коммерческих продуктов, именно
            поэтому я с нетерпением жду возможности попасть в команду таких же
            мотивированных разработчиков для совместной разработки современных
            веб-приложений.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;

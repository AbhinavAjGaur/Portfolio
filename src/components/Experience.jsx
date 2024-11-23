import React from "react";
import html from "../../images/html.png";
import css from "../../images/css.jpg";
import javascript from "../../images/javascript.png";
import tailwind from "../../images/tailwind.png";
import reactjs from "../../images/reactjs.png";
import bootstrap from "../../images/bootstrap.png";
import github from "../../images/github.png";
import mongodb from "../../images/mongodb.jpg";
import nodejs from "../../images/node.png";
import express from "../../images/express.png";

const Experience = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 2,
      logo: css,
      name: "Css",
    },
    {
      id: 3,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "Reactjs",
    },
    {
      id: 5,
      logo: tailwind,
      name: "Tailwind",
    },
    {
      id: 6,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 7,
      logo: github,
      name: "Github",
    },
    {
      id:1,
      logo:mongodb,
      name:"MongoDB"
    },
    {
      id:2,
      logo:express,
      name:"Express"
    },
    {
      id:3,
      logo:nodejs,
      name:"Nodejs"
    }
  ];
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <span>
          I've been working on the following technologies for over a year.
        </span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-4">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] p-1 rounded-full"
                alt=""
              />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

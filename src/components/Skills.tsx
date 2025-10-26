import React from "react";
import javaLogo from "../assets/javaLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";
import htmlLogo from "../assets/htmlLogo.png";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
      <p className="text-xl md:text-5xl font-semibold bg-gradient-to-r from-[#7CCBFF] to-[#B6A9FF] bg-clip-text text-transparent mb-4">
        Here is the tech stack I have used
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <section className=" flex flex-col justify-center items-center">
          <img
            className="w-28 h-28 mb-4 object-contain"
            src={htmlLogo}
            alt="HTML logo"
          />
          <a className="bg-[#68B5FF] text-white font-medium px-8 py-2 rounded-full hover:bg-[#4EA5F7] transition-colors">
            HTML
          </a>
        </section>
        <section className="flex flex-col justify-center items-center">
          <img
            className="w-28 h-28 mb-4 object-contain"
            src={tailwindLogo}
            alt="Tailwind logo"
          />
          <a className="bg-[#68B5FF] text-white font-medium px-8 py-2 rounded-full hover:bg-[#4EA5F7] transition-colors">
            Tailwind
          </a>
        </section>
        <section className="flex flex-col justify-center items-center">
          <img
            className="w-28 h-28 mb-4 object-contain"
            src={javascriptLogo}
            alt="JavaScript logo"
          />
          <a className="bg-[#68B5FF] text-white font-medium px-8 py-2 rounded-full hover:bg-[#4EA5F7] transition-colors">
            JavaScript
          </a>
        </section>
        <section className="flex flex-col justify-center items-center">
          <img
            className="w-28 h-28 mb-4 object-contain"
            src={reactLogo}
            alt="React logo"
          />
          <a className="bg-[#68B5FF] text-white font-medium px-8 py-2 rounded-full hover:bg-[#4EA5F7] transition-colors">
            React
          </a>
        </section>
        <section className="flex flex-col justify-center items-center">
          <img
            className="w-28 h-28 mb-4 object-contain"
            src={javaLogo}
            alt="Java logo"
          />
          <a className="bg-[#68B5FF] text-white font-medium px-8 py-2 rounded-full hover:bg-[#4EA5F7] transition-colors">
            Java
          </a>
        </section>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import javaLogo from "../assets/javaLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";



const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
      <p className="text-xl md:text-5xl font-semibold bg-gradient-to-r from-[#7CCBFF] to-[#B6A9FF] bg-clip-text text-transparent mb-4">
        Here is the tech stack I have used
      </p>
      <div className="flex gap-4">
        <section>
          <img className="py-2 px-2 w-40 h-40" src={reactLogo} alt="React logo" />
          <a className="bg-[#68B5FF] text-white font-medium px-6 py-3 rounded-full hover:bg-[#4EA5F7] transition-colors">
          React
        </a>
        </section>
        <section>
          <img className="py-2 px-2 w-40 h-40" src={javaLogo} alt="Java logo" />
          <a className="bg-[#2C2F38] text-white font-medium px-8 py-2 rounded-full hover:bg-[#3A3E49] transition-colors">
          Java
        </a>
        </section>
        <section>
          <img className="py-2 px-2 w-40 h-40" src={tailwindLogo} alt="Tailwind logo" />
          <a className="bg-[#68B5FF] text-white font-medium px-6 py-3 rounded-full hover:bg-[#4EA5F7] transition-colors">
          Tailwind
        </a>
        </section>
        <section>
          <img className="py-2 px-2 w-40 h-40" src={javascriptLogo} alt="JavaScript logo" />
          <a className="bg-[#68B5FF] text-white font-medium px-6 py-3 rounded-full hover:bg-[#4EA5F7] transition-colors">
          JavaScript
        </a>
        </section>
      </div>
    </section>
  );
};

export default Skills;

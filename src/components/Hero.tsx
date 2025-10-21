import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
      <h2 className="text-5xl font-bold mb-4">Hi, I'm Anna</h2>
      <p className="text-xl mb-6">Frontend Developer | React + TypeScript Enthusiast</p>
      <a href="#projects" className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition">View My Work</a>
    </section>
  );
};

export default Hero;

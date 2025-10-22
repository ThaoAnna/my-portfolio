import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-50 pt-24">
      {/* pt-24 = offset for fixed navbar */}
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Hi, I’m Thao, a frontend developer specializing in React and TypeScript. 
        I love building modern, responsive web applications with clean code and beautiful design.
      </p>
    </section>
  );
};

export default Home;

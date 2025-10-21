import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Anna</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-purple-600">About</a></li>
            <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
            <li><a href="#skills" className="hover:text-purple-600">Skills</a></li>
            <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

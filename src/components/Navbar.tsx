import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
      <div className="bg-white dark:bg-gray-950">
        <div className="flex h-16 items-center justify-between gap-8 px-4 sm:pz-6">
          <div className="flex flex-row w-full justify-between">
            <h1 className="text-xl font-bold">Anna Thao</h1>
          </div>
          <div className="flex items-center gap-6 max-md:hidden">
              <button className="inline-flex items-center gap-1 rounded-full bg-gray-950/2 px-2 py-1">
                <a href="#home" className="hover:text-purple-600">
                  Home
                </a>
              </button>
              <button className="inline-flex items-center gap-1 rounded-full bg-gray-950/2 px-2 py-1">
                <a href="#projects" className="hover:text-purple-600">
                  Projects
                </a>
              </button>
              <button className="inline-flex items-center gap-1 rounded-full bg-gray-950/2 px-2 py-1">
                <a href="#contact" className="hover:text-purple-600">
                  Contact
                </a>
              </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-col-2 lg-grid-cols-3 gap-8">
        <div className="rounded-xl overflow-hidden shadow-md bg-white/10 backdrop-blur-md border boder-white/20 hover:scale-105 transition-transform">
          <img alt="Project 1" className="w-full h-56 object-cover"></img>
          <div className="p-4 text-center text-while">
            <h2 text-l font-semibold>
              Project 1
            </h2>
            <p className="text-sm text-gray-200">
              This project use to book a hotel room{" "}
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform">
          <img alt="Project 2" className="w-full h-56 object cover" />
          <div>
            <h2 className="text-l font-semibold">Project 2</h2>
            <p className="text-sm text-gray-200">
              {" "}
              This project is about a dashboard
            </p>
          </div>
        </div>

        <div className="rounded-xl overfloe-hidden shadow-md bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform">
          <img alt="Project 3" className="w-full h-56 object-cover" />
          <div>
            <h2 className="text-xl font-semibold">Project 3</h2>
            <p className="text-sm text-gray-200">
              This project is a kind of e-commerce web app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

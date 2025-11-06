import React, { useEffect, useRef  } from "react";

const Home: React.FC = () => {

  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    const starCount = 200;
    const container = starsRef.current;

    for (let  i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "absolute rounded-full bg-white animate-pulse";

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const duration = 20 + Math.random() * 40;

      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = (Math.random() * 0.7 + 0.3).toString();
      star.style.animation = `moveStars ${duration}s linear infinite`;

      container.appendChild(star);

    }
      return () => {
        container.innerHTML = "";
      };

  }, []);


  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 relative overflow-hidden bg-gradient-to-t from-slate-900 via-slate-800 to-slate-950"
    >
      {/* CSS Animation */}
      <style>{`
      @keyframes moveStars {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
            10% {
            opacity: 1; 
            }
            90% {
            opacity: 1;
            }
            100% {
            transform: translateY(100vh) translateX(50px);
            opacity: 0;
            }
        }
      `}</style>

      {/*Stars  container */}
      <div ref={starsRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 text-white">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">About Me</h2>
        <p className="text-lg max-w-2xl text-center text-gray-200">
          Hi, I’m Thao, a frontend developer specializing in React and
          TypeScript. I love building modern, responsive web applications with
          clean code and beautiful design.
        </p>
      </div>
    </section>
  );
};

export default Home;

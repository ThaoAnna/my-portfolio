import React from "react";
import githubLogo from "../assets/githubLogo.png";
import gmailLogo from "../assets/gmailLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-10 mt-15 max-w-5xl mx-auto text-center">
      <div>
        <h2 className="text-xl md:text-4xl font-semibold bg-gradient-to-r from-[#7CCBFF] to-[#B6A9FF] bg-clip-text text-transparent mb-4 pb-8">
          If your're interested to work with me, just drop me in{" "}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <section className="flex flex-col justify-center items-center">
          <img
            className="w-18 h-18 mb-4 object-contain"
            src={githubLogo}
            alt="Github logo"
          />
          <a 
          className="bg-[#68B5FF] text-white font-medium px-6 py-1 rounded-full hover:bg-[#4EA5F7] transition-colors"
          target="_blank"
          href="https://github.com/ThaoAnna"
          rel="noopener noreferrer">
            Github
          </a>
        </section>
        <section className="flex flex-col justify-center items-center" >
          <img
            className="w-18 h-18 mb-4 object-contain "
            src={gmailLogo}
            alt="Gmail logo"
          />
          <a 
          className="bg-[#68B5FF] text-white font-medium px-6 py-1 rounded-full hover:bg-[#4EA5F7] transition-colors"
          target="_blank"
          href="https://github.com/ThaoAnna"
          rel="noopener noreferrer">
            Gmail
          </a>
        </section>
        <section className="flex flex-col justify-center items-center">
          <img
            className="w-18 h-18 mb-4 object-contain"
            src={linkedinLogo}
            alt="LinkedIn logo"
          />
          <a 
          className="bg-[#68B5FF] text-white font-medium px-6 py-1 rounded-full hover:bg-[#4EA5F7] transition-colors"
          target="_blank"
          href="https://www.linkedin.com/feed/"
          rel="noopener noreferrer">
            LinkedIn
          </a>
        </section>
      </div>
    </section>
  );
};

export default Contact;

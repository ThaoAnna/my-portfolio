import React from "react";
import githubLogo from "../assets/githubLogo.png";
import gmailLogo from "../assets/gmailLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          If your're interested to work with me, just drop me in{" "}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <section className="flex flex-col justify-center items-center">
          <img
            className="w-28 h-28 mb-4 object-contain"
            src={githubLogo}
            alt="Github logo"
          />
          <a 
          className="bg-[#68B5FF] text-white font-medium px-8 py-3 rounded-full hover:bg-[#4EA5F7] transition-colors"
          target="_blank"
          href="https://github.com/ThaoAnna"
          rel="noopener noreferrer">
            Github
          </a>
        </section>
        <section className="flex flex-col justify-center items-center" >
          <img
            className="py-5 px-5 w-30 h-30 justify-center "
            src={gmailLogo}
            alt="Gmail logo"
          />
          <a 
          className="bg-[#68B5FF] text-white font-medium px-8 py-3 rounded-full hover:bg-[#4EA5F7] transition-colors"
          target="_blank"
          href="https://github.com/ThaoAnna"
          rel="noopener noreferrer">
            Gmail
          </a>
        </section>
        <section className="flex flex-col justify-center items-center">
          <img
            className="py-5 px-5 w-30 h-30"
            src={linkedinLogo}
            alt="LinkedIn logo"
          />
          <a 
          className="bg-[#68B5FF] text-white font-medium px-8 py-3 rounded-full hover:bg-[#4EA5F7] transition-colors"
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

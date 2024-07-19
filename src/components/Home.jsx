import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import link from "../assets/jasvant_resume.pdf";
function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-[#161513] py-4">
        <div className="mx-auto">
          <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            <img src="https://i.imgur.com/4U5tBXC.png" alt="" />
          </div>
          <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold text-white">
            I do code and <br />
            make content{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
              about it!
            </span>
          </h1>
          <p className="mx-auto mt-[40px] mb-[54px] text-[18px] font-light text-[#C5C5C5] text-center max-w-lg">
            I am a seasoned full-stack web developer with 3 major of
            professional experience, specializing in backend development.
          </p>
          <div className="text-center">
            <a
              href="http://linkedin.com/in/Mr-jas91"
              id="#contact"
              className="text-gray-800 inline-block px-[30px] py-[16px] mr-[18px] bg-white rounded-full font-semibold text-[22px]"
            >
              Get In Touch
            </a>
            <a
              href={link}
              download="jasvant_resume.pdf"
              className="text-white inline-block px-[30px] py-[16px] bg-transparent border-2 rounded-full font-semibold text-[22px]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

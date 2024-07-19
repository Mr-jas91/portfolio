import React from "react";

function Contact() {
  return (
    <>
      <h1 className="font-bold text-5xl text-black text-center" id="contact">
        Contact me
      </h1>
      <div className="border border-black rounded-full my-2">
        <div className="flex p-2 items-center justify-center">
          <i className="fa-solid fa-envelope mx-2"></i>
          <a href="mailto:jaswantmaddheshiya@gmail.com" className="text-xl">
            Email: Jaswantmaddheshiya@gmail.com
          </a>
        </div>
        <div className="flex p-2 items-center justify-center">
          <i class="fa-brands fa-linkedin mx-2"></i>
          <p className="text-xl text-center">
            <a href="http://linkedin.com/in/Mr-jas91">Linkedin</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;

import React from "react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/abhinavajgaur/#"
                target="_blank"
              >
                <FaInstagramSquare
                  size={24}
                  className="text-2xl cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinavgaur5800"
                target="_blank"
              >
                <FaLinkedin size={24} className="text-2xl cursor-pointer" />
              </a>
              <a href="https://x.com/AbhinavGaur5800" target="_blank">
                <FaSquareXTwitter
                  size={24}
                  className="text-2xl cursor-pointer"
                />
              </a>
            </div>
            <div className="mt-9 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; 2024 Abhinav Gaur. All right reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

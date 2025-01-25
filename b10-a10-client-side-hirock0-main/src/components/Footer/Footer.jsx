import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
    });
  }, []);

  return (
    <footer className="bg-gray-800 py-20 text-gray-200 ">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Fade triggerOnce>
            <div data-aos="fade-up">
              <h3 className="text-xl font-semibold text-white mb-4">
                About Us
              </h3>
              <p className="text-gray-400">
                We provide high-quality sports equipment for athletes and
                enthusiasts, empowering every game with the best gear and
                accessories.
              </p>
            </div>
          </Fade>

          <Fade triggerOnce>
            <div data-aos="fade-up">
              <h3 className="text-xl font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to={""} className="hover:underline hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to={""} className="hover:underline hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={""} className="hover:underline hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={""} className="hover:underline hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </Fade>

          <Fade triggerOnce>
            <div data-aos="fade-up">
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Us
              </h3>
              <p className="text-gray-400 mb-4">
                Stay connected through our social media channels.
              </p>
              <div className="flex space-x-4 text-xl">
                <Link
                  to={"https://facebook.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to={"https://twitter.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to={"https://instagram.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to={"https://linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </Fade>

          <Fade triggerOnce>
            <div data-aos="fade-up">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Us
              </h3>
              <p className="text-gray-400">Email: hirockdutta0@gmail.com</p>
              <p className="text-gray-400">Phone: +8801700554293</p>
              <p className="text-gray-400">Manirampur,Jashore,Bangladesh</p>
            </div>
          </Fade>
        </div>
      </div>
      <Fade triggerOnce>
        <div className="py-4 mt-10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sports Store. All Rights Reserved.
          </p>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;

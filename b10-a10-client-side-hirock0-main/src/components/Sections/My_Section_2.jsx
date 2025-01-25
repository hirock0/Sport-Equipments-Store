import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
const My_Section_2 = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div
      className={`h-screen relative text-white bg-[url(https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover bg-no-repeat bg-fixed `}
    >
      <div className=" flex flex-col gap-10  items-center justify-center h-full bg-zinc-800/80">
        <Fade>
          <div
            data-aos="fade-left"
            className=" container mx-auto px-5  text-9xl max-lg:text-8xl max-sm:text-7xl  font-semibold text-center"
          >
            <Typewriter
              options={{
                strings: [
                  "Don't be lazy",
                  "Let's play in ground",
                  "Buy sports equipments",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Fade>
      </div>
      <div className=" absolute bottom-10 flex items-center justify-center right-0 left-0">
        <Link to={"/products"}>
          <button className=" bg-blue-600 px-5 py-4 rounded-md shadow-lg ">
            See our Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default My_Section_2;

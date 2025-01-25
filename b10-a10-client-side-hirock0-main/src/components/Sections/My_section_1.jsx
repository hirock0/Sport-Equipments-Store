import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "About Us",
    description:
      "We are a trusted sports equipment provider, offering high-quality gear for athletes of all levels. Passionate about sports, we aim to empower your game.",
    icon: "🏆",
    link: "/about-us",
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "To inspire and equip sports enthusiasts with top-notch equipment, helping them achieve their fitness and athletic goals.",
    icon: "🎯",
    link: "/mission",
  },
  {
    id: 3,
    title: "Sustainability",
    description:
      "Committed to eco-friendly practices, we offer sustainable products and prioritize reducing our environmental impact.",
    icon: "🌍",
    link: "/sustainability",
  },
  {
    id: 4,
    title: "Customer Support",
    description:
      "Our dedicated support team is here to assist you with any inquiries or issues, ensuring a smooth shopping experience.",
    icon: "📞",
    link: "/support",
  },
  {
    id: 5,
    title: "Store Locations",
    description:
      "Visit our stores across multiple locations to explore our products in person and experience exceptional customer service.",
    icon: "📍",
    link: "/locations",
  },
  {
    id: 6,
    title: "Careers",
    description:
      "Join our team and be part of a company that values passion, innovation, and a love for sports. Explore our career opportunities.",
    icon: "💼",
    link: "/careers",
  },
];
const InformationArray = [
  {
    title: "Importance of sports",
    description:
      " Sports play a vital role in promoting physical and mental well-being. They enhance fitness, strengthen muscles, and improve cardiovascular health, while also fostering discipline, teamwork, and leadership skills. Engaging in sports reduces stress, boosts mood, and sharpens focus, making it beneficial for mental health. Sports also unite people, breaking barriers of culture and language, and instill a sense of community and camaraderie. They teach life lessons such as perseverance, resilience, and time management, shaping individuals into well-rounded personalities. Whether played professionally or recreationally, sports are an essential part of a balanced lifestyle, contributing to personal growth and overall happiness.",
  },
  {
    title: " Awareness",
    description:
      "Awareness of sports is essential for fostering a healthier and more active society. It highlights the physical, mental, and social benefits of engaging in sports, encouraging people of all ages to adopt a more active lifestyle. Promoting sports awareness helps combat sedentary habits, reduces the risk of lifestyle diseases, and enhances overall well-being. It also brings attention to inclusivity in sports, encouraging participation from diverse groups and emphasizing equal opportunities. Sports awareness campaigns inspire individuals to explore their interests, discover hidden talents, and connect with their communities. By understanding the significance of sports, we nurture a culture of fitness, discipline, and teamwork.",
  },
  {
    title: "Safety During Sports",
    description:
      "Safety during sports is crucial to prevent injuries and ensure a positive experience for participants. Wearing appropriate gear, such as helmets, pads, and proper footwear, protects against common injuries. Following game rules and practicing good sportsmanship minimizes risks and promotes a fair play environment. ha sd Adequate warm-ups and stretches prepare the body for physical activity, reducing the chance of strains or sprains. Staying hydrated and taking regular breaks prevent fatigue and heat-related issues. Proper supervision, especially for children, ensures that safety protocols are followed. Prioritizing safety allows athletes to focus on enjoying the game, improving their skills, and maintaining long-term health.",
  },
  {
    title: "Body Fitness ",
    description:
      " Sports play a significant role in achieving and maintaining body fitness. Engaging in regular physical activities such as running, swimming, or team sports helps improve cardiovascular health, build muscle strength, and enhance flexibility. Sports promote better posture and coordination, reducing the risk of injuries in daily life. They also aid in weight management by burning calories and boosting metabolism. Consistent participation in sports enhances endurance and energy levels, keeping the body active and agile. Beyond physical benefits, sports contribute to mental well-being by reducing stress and improving mood, making them a holistic approach to achieving a fit and healthy lifestyle.",
  },
];
const My_section_1 = () => {
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
      className={` bg-base-200 bg-[url(https://images.unsplash.com/photo-1562771379-44b243dedac5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover bg-no-repeat bg-fixed`}
    >
      <div className="bg-zinc-800/80 py-20">
        <div className="">
          <Fade>
            <h2 className="text-3xl font-bold text-white text-center mb-8 ">
              Our Details
            </h2>
          </Fade>

          <Marquee pauseOnClick>
            <div className=" flex items-center gap-10 ">
              {products.map((item, index) => (
                <Fade cascade>
                  <div
                    data-aos="fade-up"
                    key={index}
                    className={`${
                      index === 0 && "ml-10"
                    } p-5 h-96 w-60 bg-base-100 rounded-lg shadow-lg`}
                  >
                    <h1 className=" text-center font-semibold text-2xl">
                      {item.title}
                    </h1>
                    <div className=" text-8xl mt-5 flex justify-center items-center">
                      {item.icon}
                    </div>
                    <p className=" mt-5">{item.description}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </Marquee>
        </div>
        {/* ----------- */}
        <div className=" container mx-auto px-5 mt-20">
          <div className=" grid grid-cols-2 max-lg:grid-cols-1 gap-5">
            {InformationArray.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className=" h-[500px] max-sm:h-full  p-5 bg-base-100 shadow-lg w-full"
              >
                <h1 className="text-center text-2xl font-semibold">
                  {item.title}
                </h1>
                <p className=" mt-4">{item.description}</p>
                <div className=" mt-5 flex items-center justify-center">
                  <Link to={"/products"}>
                    <button className=" bg-blue-600 text-white px-5 py-2 rounded-sm shadow-lg">
                      See Products
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_section_1;

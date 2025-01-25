import { Helmet } from "react-helmet";
import Hero_Section from "./components/Sections/Hero_Section";
import My_section_1 from "./components/Sections/My_section_1";
import My_Section_2 from "./components/Sections/My_Section_2";
import Product_Section from "./components/Sections/Product_Section";

const App = () => {
  return (
    <main className="min-h-screen">
      <Hero_Section />
      <Product_Section />
      <My_section_1 />
      <My_Section_2 />
    </main>
  );
};

export default App;

import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const HelmetProviderContext = ({ children }) => {
  const pathname = useLocation().pathname;
  const [pathUrl, setPathUrl] = useState("");
  const pathOptions = () => {
    if (pathname == "/") {
      setPathUrl("");
    } else {
      const splitPath = pathname.split("/");
      const filterPath = splitPath.filter((item) => item !== "");
      const reducePath = filterPath.reduce((accu, item) => accu + " | " + item);
      setPathUrl(reducePath);
    }
  };

  useEffect(() => {
    pathOptions();
  }, [pathname, pathUrl]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pathname == "/" ? "Home" : pathUrl}</title>
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default HelmetProviderContext;

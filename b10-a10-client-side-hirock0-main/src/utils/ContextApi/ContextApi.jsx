import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
const MyContext = createContext();
export const useApiContext = () => {
  const context = useContext(MyContext);
  if (context) {
    return context;
  } else {
    throw new Error("Something goes wrong in context api.");
  }
};

const ContextApi = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [navFlag, setNavFlag] = useState(false);
  const [themeFlag, setThemeFlag] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupFlag, setPopupFlag] = useState(false);
  const [productId, setProductId] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [sortFlag, setSortFlag] = useState(false);
  const [homepageProduct, setHomePageProduct] = useState([]);
  const [passwordEye, setPasswordEye] = useState(false);
  // api_calls

  useEffect(() => {
    const unsubscribe = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/products/all_products`
      );

      if (response?.data?.success) {
        setProducts(response?.data?.products);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } else {
        setProducts([]);
      }
    };
    unsubscribe();
    return () => unsubscribe();
  }, [refreshFlag, loading]);
  // home page 6 data

  useEffect(() => {
    const unsubscribe = async () => {
      const homeResponse = await axios.get(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/products/limited`
      );

      if (homeResponse?.data?.success) {
        setHomePageProduct(homeResponse?.data?.products);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } else {
        setHomePageProduct([]);
      }
    };
    unsubscribe();
    return () => unsubscribe();
  }, [refreshFlag, loading]);
  // auth_data
  useEffect(() => {
    const unsubscribe = () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedUser(user?.providerData[0]);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        } else {
          setLoggedUser(null);
        }
      });
    unsubscribe();
    return () => unsubscribe();
  }, [loading]);

  // popup event_start

  useEffect(() => {
    if (popupFlag) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [popupFlag]);

  // window_events
  useEffect(() => {
    window.addEventListener("click", () => {
      setNavFlag(false);
      setSortFlag(false);
    });

    if (!themeFlag) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [navFlag, themeFlag]);
  // ------------------------------------------

  const contextInfo = {
    loggedUser,
    setLoggedUser,
    navFlag,
    setNavFlag,
    themeFlag,
    setThemeFlag,
    loading,
    setLoading,
    products,
    setProducts,
    popupFlag,
    setPopupFlag,
    productId,
    setProductId,
    refreshFlag,
    setRefreshFlag,
    sortFlag,
    setSortFlag,
    homepageProduct,
    setHomePageProduct,
    passwordEye,
    setPasswordEye,
  };
  return (
    <MyContext.Provider value={contextInfo}>{children}</MyContext.Provider>
  );
};

export default ContextApi;

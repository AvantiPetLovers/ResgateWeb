import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import background from "../assets/background.svg";

export default function Layout({ children }) {
  const location = useLocation();
  const [layoutVisible, setLayoutVisible] = useState();

  useEffect(() => {
    const hiddenPaths = ["/login", "/register", "/new-pet"];
    setLayoutVisible(!hiddenPaths.includes(location.pathname));
  }, [location]);

  return (
    <div className="w-screen min-h-screen">
      <div
        className={`${
          layoutVisible ? "" : "bg-cover bg-center bg-cyan-100"
        }`}
        style={{
          backgroundImage: layoutVisible ? "none" : `url(${background})`,
        }}
      >
        {layoutVisible && <Navbar />}
        <main
          className={`${
            layoutVisible
              ? "container mx-auto w-full min-h-screen mt-20"
              : "flex items-center justify-center min-h-screen"
          }`}
        >
          {children}
        </main>
        {layoutVisible && <Footer />}
      </div>
    </div>
  );
}

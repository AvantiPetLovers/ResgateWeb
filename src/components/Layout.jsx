import Navbar from "./navbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const location = useLocation();
  const [layoutVisible, setLayoutVisible] = useState();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setLayoutVisible(false)
    } else {
      setLayoutVisible(true)
    }
  }, [location])

  return (
    <div className="w-screen min-h-screen">
      {layoutVisible && <Navbar />}
      <main className={layoutVisible ? "container mx-auto w-full min-h-screen mt-20 bg-slate-800" : ""}>
        {children}
      </main>
      {layoutVisible && <Footer />}
    </div>
  );
}
import Navbar from "./navbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const location = useLocation();
  const [layoutHidden, setLayoutHidden] = useState();

  useEffect(() => {
    if(location.pathname === "/login" || location.pathname === "/register") {
      setLayoutHidden(false)
    } else {
      setLayoutHidden(true)
    }
  }, [location])

  return (
    <div className="d-flex flex-column vh-100">
      {layoutHidden && <Navbar />}
      <main className="flex-grow-1 py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          {children}
        </div>
      </main>
      {layoutHidden && <Footer />}
    </div>
  );
}
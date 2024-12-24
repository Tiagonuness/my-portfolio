import { useEffect } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/Home/sections/About/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const icons = document.getElementById("iconsPerfis");
        const navbar = document.getElementById("bordaNavbar");
        if (icons) {
          if (entry.isIntersecting) {
            icons.classList.add("dark-icons");
          } else {
            icons.classList.remove("dark-icons");
          }
        }

        if (navbar) {
          if (entry.isIntersecting) {
            navbar.classList.add("dark-icons");
          } else {
            navbar.classList.remove("dark-icons");
          }
        }
      },
      { threshold: 0.5 }
    );

    const aboutSection = document.getElementById("aboutSection");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <>
      <Home />
      <About />
    </>
  );
};

export default App;

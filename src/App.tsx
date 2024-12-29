import { useEffect } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/Home/sections/About/About";
import Projects from "./pages/Home/sections/Projects/Projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const icons = document.getElementById("iconsPerfis");
        if (icons) {
          if (entry.isIntersecting) {
            icons.classList.add("dark-icons");
          } else {
            icons.classList.remove("dark-icons");
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
      <Projects />
      {/* rodapé com informações de copyright */}
      <footer style={{ textAlign: 'center', padding: '20px' /*, backgroundColor: '#000000'*/ }}>
        <p style={{ color: 'white' }}>© 2024 All rights Tiago Nunes.</p>
      </footer>
    </>
  );
};

export default App;
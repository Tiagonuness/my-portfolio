import React, { useRef, useEffect } from "react";

const logos = [
  { src: "/icons8-html-96.svg", alt: "HTML", title: "HTML5" },
  { src: "/icons8-css.svg", alt: "CSS", title: "CSS3" },
  { src: "/icons8-bootstrap.svg", alt: "Bootstrap", title: "Bootstrap" },
  { src: "/icons8-python.svg", alt: "Python", title: "Python" },
  { src: "/PHP-Logo.wine.svg", alt: "PHP", title: "PHP" },
  { src: "/jquery-icon.svg", alt: "jQuery", title: "jQuery" },
  { src: "/icons8-microsoft-sql-server.svg", alt: "SQL Server", title: "SQL Server" },
  { src: "/PostgreSQL-Logo.wine.svg", alt: "PostgreSQL", title: "PostgreSQL" },
  { src: "/icons8-c.svg", alt: "C++", title: "C++" },
];

const Carousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (track) {
      const logosElements = Array.from(track.children) as HTMLElement[];
      logosElements.forEach((logo) => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone); // Clona e adiciona os logos ao final
      });

      // Ajusta a largura do carrossel para acomodar os clones
      track.style.width = `${logos.length * 2 * 100}px`;
    }
  }, []);

  const stopAnimation = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  };

  const startAnimation = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div id="carouselTecnologias" className="carousel-tecnologias mt-4">
      <div
        ref={trackRef}
        className="carousel-track"
        onMouseEnter={stopAnimation}
        onMouseLeave={startAnimation}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            title={logo.title}
            className="logo-icon grayscale"
            onMouseEnter={(e) => e.currentTarget.classList.remove("grayscale")}
            onMouseLeave={(e) => e.currentTarget.classList.add("grayscale")}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
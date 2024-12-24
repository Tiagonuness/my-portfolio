import React from "react";
import Slider from "react-slick";

const logos = [
  { src: "/icons8-html-96.svg", alt: "HTML", title: "HTML5" },
  { src: "/icons8-css.svg", alt: "CSS", title: "CSS3" },
  { src: "/icons8-react-native.svg", alt: "React", title: "React" },
  { src: "/icons8-typescript.svg", alt: "Typescript", title: "Typescript" },
  { src: "/icons8-bootstrap.svg", alt: "Bootstrap", title: "Bootstrap" },
  { src: "/icons8-python.svg", alt: "Python", title: "Python" },
  { src: "/PHP-Logo.wine.svg", alt: "PHP", title: "PHP" },
  { src: "/icons8-javascript.svg", alt: "Javascript", title: "Javascript" },
  { src: "/jquery-icon.svg", alt: "jQuery", title: "jQuery" },
  { src: "/icons8-c.svg", alt: "C++", title: "C++" },
  { src: "/icons8-microsoft-sql-server.svg", alt: "SQL Server", title: "SQL Server" },
  { src: "/PostgreSQL-Logo.wine.svg", alt: "PostgreSQL", title: "PostgreSQL" },
  { src: "/icons8-mysql-logo.svg", alt: "MySQL", title: "MySQL" },
  { src: "/icons8-git.svg", alt: "Git", title: "Git" },
  { src: "/icons8-github.svg", alt: "GitHub", title: "GitHub" },
  { src: "/icons8-gitlab.svg", alt: "GitLab", title: "GitLab" },
  { src: "/jenkins-icon.svg", alt: "Jenkins", title: "Jenkins" },
  { src: "/icons8-adobe-photoshop.svg", alt: "Photoshop", title: "Adobe Photoshop" },
  { src: "/icons8-canva.svg", alt: "Canva", title: "Canva" },
  { src: "/icons8-microsoft-excel-2019.svg", alt: "Excel", title: "Excel" },
  { src: "/icons8-word.svg", alt: "Word", title: "Word" },
  { src: "/icons8-power-point.svg", alt: "PowerPoint", title: "PowerPoint" },
  { src: "/icons8-notion.svg", alt: "Notion", title: "Notion" },
  { src: "/visualstudio_code-icon.svg", alt: "VS Code", title: "Visual Studio Code" },
  { src: "/logo-notepad.svg", alt: "Notepad++", title: "Notepad++" },
  { src: "/icons8-pycharm.svg", alt: "PyCharm", title: "PyCharm" },
  { src: "/icons8-teams.svg", alt: "Teams", title: "Microsoft Teams" },
  { src: "/icons8-discord.svg", alt: "Discord", title: "Discord" },
];

const Carousel: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="carousel-item mt-4">
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="logo-icon grayscale mb-4"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
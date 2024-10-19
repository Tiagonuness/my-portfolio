import Hero from "./sections/Hero/Hero";
import {FaGithub, FaTwitter, FaLinkedin, FaInstagram,} from "react-icons/fa";
import "./Home.css";
import RedesSociais from "./infos";

const Home = () => {
    return (
        <>
            <div className="container">
                <div id="navbar" className="col-lg-6 mt-2 mx-auto justify-content-center" >
                    <nav>
                        <div id="bordaNavbar" className="d-flex justify-content-center align-items-center">
                            <ul className="list-unstyled d-flex col-lg-12 mt-2">
                                <li className="col-lg-4 text-center"><a href="#" className="nav-link">Sobre</a></li>
                                <li className="col-lg-4 text-center"><a href="#" className="nav-link">Habilidades</a></li>
                                <li className="col-lg-4 text-center"><a href="#" className="nav-link">Projetos</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div id="iconsPerfis" className="col-lg-1">
                    <ul>
                        <li>
                            <a href="#" target="_blank">
                            <FaTwitter/>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                            <FaGithub/>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                            <FaLinkedin/>
                            </a>
                        </li>
                        <li>
                            <a href={RedesSociais.instagram} target="_blank">
                            <FaInstagram/>
                            </a>
                        </li>
                    </ul>
                    <p>Me Siga</p>
                </div>

                <Hero />
            </div>
        </>
    );
  }
  
  export default Home
  
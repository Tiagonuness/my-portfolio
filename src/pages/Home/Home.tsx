import Hero from "./sections/Hero/Hero";
import {FaGithub, FaTwitter, FaLinkedin, FaInstagram,} from "react-icons/fa";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div id="navbar"  className="col-lg-6 mx-auto justify-content-center" >
                <nav>
                    <div id="bordaNavbar" className="mt-1 py-2 d-flex justify-content-center align-items-center">
                        <ul className="list-unstyled d-flex">
                            <li className="mx-3 ml-3"><a href="#">About</a></li>
                            <li className="mx-3"><a href="#">Skills</a></li>
                            <li className="mx-3"><a href="#">Projects</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div id="iconsPerfis" className="col-lg-12">
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
                        <a href="#" target="_blank">
                        <FaInstagram/>
                        </a>
                    </li>
                </ul>
                <p>Me Siga</p>
            </div>

            <div style={{ position: "relative", zIndex: -1 }}>
                <Hero />
            </div>
        </>
    );
  }
  
  export default Home
  
import Hero from "./sections/Hero/Hero";
import {FaGithub, FaTwitter, FaLinkedin, FaInstagram,} from "react-icons/fa";
import "./Home.css";
import RedesSociais from "./infos";

const Home = () => {
    
    return (
        <>
            <div className="container">
                <div id="iconsPerfis" className="col-lg-1">
                    <ul>
                        <li>
                            <a href={RedesSociais.twitter} target="_blank">
                            <FaTwitter/>
                            </a>
                        </li>
                        <li>
                            <a href={RedesSociais.github} target="_blank">
                            <FaGithub/>
                            </a>
                        </li>
                        <li>
                            <a href={RedesSociais.linkedin} target="_blank">
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
  
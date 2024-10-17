import Hero from "./sections/Hero/Hero";
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine} from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import {FaGithub, FaTwitter, FaLinkedin, FaInstagram,} from "react-icons/fa";
import "./Home.css";

const Home = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                        out_mode: "out",
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                        nb_sides: 5
                        }
                    },
                    size: {
                        value: { min: 0.1, max: 5 },
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                },
                detectRetina: true,
                }}
                style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}
            />

            <div className="iconsPerfis col-lg-12">
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

            <div style={{ position: "relative", zIndex: 1 }}>
                <Hero />
            </div>
        </>
    );
  }
  
  export default Home
  
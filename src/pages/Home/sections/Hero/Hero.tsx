import Particles from "./Particles"
import "./Hero.css"
import { FaDownload, FaWhatsapp } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
        <div className="container">
            <div id="cabecalhoHero" className="col-lg-12">
                <div id="titulo">
                    <h1 className="text-white text-center mt-4" id="tituloNome"><span>TIAGO NUNES</span></h1>
                </div>
                <div id="area">
                    <h4 className="text-white text-center mt-2">
                        <Typewriter
                            options={{
                                strings: ['Desenvolvedor Full Stack', 'Analista de Dados'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h4>
                </div>
                <div id="buttons" className="text-center mt-4 row col-lg-12 justify-content-center">
                    <div id="buttonCV" className="col-lg-2">
                        <button type="button" className="buttonCabecalho col-lg-12">
                            <i className="me-3"><FaDownload /></i>Download CV
                        </button>
                    </div>
                    <div id="buttonContato" className="col-lg-2">
                        <button type="button" className="buttonCabecalho col-lg-12">
                            <span><i className="me-3"><FaWhatsapp /></i>Me Contate</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div style={{ position: "relative", zIndex: -1 }}>
            <Particles />
        </div>
        
    </>
  )
}

export default Hero
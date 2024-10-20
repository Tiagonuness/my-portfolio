import Particles from "./Particles"
import "./Hero.css"
import { FaDownload, FaWhatsapp } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
        <div className="container" id="teste">
            <div id="cabecalhoHero" className="col-lg-12">
                <div id="titulo">
                    <h1 className="text-white text-center mt-4"><span>TIAGO NUNES</span></h1>
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
                        <button type="button" className="buttonCabecalho col-lg-12" onClick={contatoWhatsapp}>
                            <span><i className="me-3"><FaWhatsapp /></i>Me Contate</span>
                        </button>
                    </div>
                </div>
            </div>

            <div id="particles">
                <Particles />
            </div>
        </div>
        
    </>
  )
}

const contatoWhatsapp = () => {
    window.open("https://wa.me/5561992451421", "_blank");
}

export default Hero
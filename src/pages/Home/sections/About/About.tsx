import React from 'react';
import './About.css';
import Carousel from "./TecnologiasFerramentas";
import { MdOutlineWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp} from "react-icons/fa";
import { DiMsqlServer, DiJqueryLogo } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { SiCplusplus } from "react-icons/si";
import  logoPresidencia  from "/brasaooficialcolorido.png";
import  logoUnB  from "/logoUnB.png";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div id="aboutSection" className="aboutSction">
      <div className="row">
        <div id="tituloSobre" className="col-lg-12 d-flex justify-content-center">
          <h2 className="text-center verticalTitulo" data-shadow="SOBRE">SOBRE</h2>
        </div>
        <div className="row col-lg-12 mt-4">
          <div className="col-lg-1"></div>
          <div className="col-lg-5" id="descricao">
            <p>
            Meu nome é Tiago Nunes, nasci em 2002 em uma cidade do interior de Pernambuco. Desde criança, sempre fui fascinado por tecnologia e tinha uma curiosidade imensa em entender como as coisas funcionavam.
            Meu primeiro contato significativo com eletrônicos, além de celulares, foi em 2009, quando ganhei um tablet. Passei horas explorando seus recursos e jogando. No ano seguinte, em 2010, recebi meu primeiro computador, um notebook. Foi um marco importante na minha vida, pois descobri minha paixão por programação. Eu passava horas aprendendo sobre as tecnologias da época, experimentando e até tentando modificar jogos.
            Em 2018, escrevi meu primeiro código em uma aula de robótica no ensino médio. O projeto consistia em criar um script para Arduino que controlava um ar-condicionado. Essa experiência consolidou meu desejo de cursar Engenharia da Computação na Universidade de Brasília (UnB).
            Na faculdade, minha curiosidade me levou além da sala de aula. Aprendi diversas linguagens de programação e explorei novos métodos de desenvolvimentos. Grande parte desse conhecimento também foi adquirida por conta própria, através de projetos e estudos independentes.
            Em 2024, tive a oportunidade de estagiar na Presidência da República. Esse estágio foi uma experiência transformadora, onde aprimorei ainda mais meus conhecimentos em áreas como segurança da informação, experiência do usuário, linguagens SQL, análise de dados e outras habilidades essenciais para minha carreira.
            Minha trajetória até aqui reflete minha paixão pela tecnologia e minha constante busca por aprendizado e crescimento.
            </p>
          </div>
          <div className="col-lg-6" id="carreira">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-9">
                <div className="card bg-dark text-white" >
                <div className="card-header"><MdOutlineWork /> Experiências</div>
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <img
                        src={logoPresidencia}
                        alt="Logo da Empresa"
                        title='Presidência da Reúplica'
                        className="me-3"
                        style={{ width: '70px', height: '70px', borderRadius: '50%' }}/>
                      <div>
                        <p className="card-text mb-0"><b>Presidência da República</b></p>
                        <p className='card-text mb-0'>Desenvolvedor Full-stack | Cientista de Dados</p>
                        <p className='card-text'><i>2024 - Atualmente</i></p>
                        <p>Linguagens: <FaHtml5 title='HTML'/> <FaCss3Alt title='CSS'/> <FaPhp title='PHP'/> <FaBootstrap title='Framework Bootstrap'/> <DiJqueryLogo title='JQuery'/> <FaPython title='Python'/> <DiMsqlServer title='SQL Server'/> <BiLogoPostgresql title='Postgresql'/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 mt-3">
                <div className="card bg-dark text-white">
                  <div className="card-header"><PiStudentFill /> Educação</div>
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <img
                        src={logoUnB}
                        alt="Logo da Empresa"
                        title='Universidade de Brasília'
                        className="me-4"
                        style={{ width: '60px', height: '60px', borderRadius: '0%' }}/>
                      <div>
                        <p className="card-text mb-0"><b>Universidade de Brasília (UnB)</b></p>
                        <p className='card-text mb-0'>Estudante de Engenharia da Computação</p>
                        <p className='card-text'><i>2020 - Atualmente</i></p>
                        <p>Linguagens: <FaPython title='Python'/> <BsFiletypeSql title='SQL Light'/> <SiCplusplus title='C++'/> </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Começo Tecnologias e Ferramentas */}
        <div id="tituloTecnologiasFerramentas" className="col-lg-12 mt-3 d-flex justify-content-center">
          <h2 className="text-center tituloTecnlogiasFerramentas" data-shadow="TECNOLOGIAS E FERRAMENTAS">TECNOLOGIAS E FERRAMENTAS</h2>
        </div>
        < Carousel />
        {/* Fim Tecnologias e Ferramentas*/}
      </div>
    </div>
  );
};

export default About;
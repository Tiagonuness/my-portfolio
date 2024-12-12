import React from 'react';
import './About.css';
import { MdOutlineWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaFileExcel} from "react-icons/fa";
import { DiMsqlServer, DiJqueryLogo } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { SiCplusplus } from "react-icons/si";
import  logoPresidencia  from "../../../../../public/brasaooficialcolorido.png";
import  logoUnB  from "../../../../../public/logoUnB.png";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione corporis temporibus enim dicta in nemo voluptatem mollitia repellendus laborum? Quam ut nulla excepturi voluptatum non provident odit libero. Maxime.
              Officia in consectetur perferendis ipsum autem eos labore quos saepe dicta! Eligendi, eum cumque sequi aspernatur maxime repellat, saepe ratione veniam cupiditate eos sunt animi culpa vel quas. Ullam, eaque?
              Animi quibusdam ipsa voluptatem eveniet exercitationem provident, voluptate earum debitis architecto esse cumque nemo iure voluptates est officiis deserunt rerum velit. Dolores voluptatem perferendis repellendus soluta sapiente recusandae natus libero.
              Provident fuga officia aspernatur perspiciatis nesciunt illo, vitae, molestias soluta, maiores reprehenderit voluptas molestiae quod. Aspernatur quod eveniet illum aliquam voluptatem, blanditiis deleniti corrupti voluptatibus unde laudantium a dolorem odio.
              Possimus non est minima dolorum eum facilis eligendi, dolor dolores! Dolorum reprehenderit quos eveniet obcaecati similique veniam molestiae placeat amet ullam, autem itaque ea asperiores magnam explicabo, distinctio eum deserunt.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center" id="carreira">
            <div className="row col-lg-12">
              <div className="col-lg-11">
                <div className="card bg-dark text-white">
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
              <div className="col-lg-11 mt-3">
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
                        <p className="card-text mb-0"><b>Universidade de Brasília</b></p>
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
      </div>
    </div>
  );
};

export default About;
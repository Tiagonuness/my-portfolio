import "./About.css";
import logoUnB from "../../../../../public/logoUnB.png";
import logoPresidencia from "../../../../../public/brasaooficialcolorido.png";

const About = () => {
    return (
      <div id="aboutSection" className="col-lg-12 aboutSction">
        <div className="row col-lg-12">
          <div id="tituloSobre" className="row col-lg-1 d-flex justify-content-center align-items-center vh-100">
            <h2 className="text-center text-dark verticalTitulo" data-shadow="SOBRE">SOBRE</h2>
          </div>
          <div className="row col-lg-11 mt-4">
            <div className="quadro col-lg-3" id="unb">
              <div className="d-flex align-items-center">
                <img src={logoUnB} alt="Universidade de Brasília"/>
                <div className="d-flex flex-column">
                  <p className="mb-0"><b>Faculdade:</b></p>
                  <p><em>Universidade de Brasília</em></p>
                </div>
              </div>
              <p className="mb-0"><b>Curso:</b> Engenharia da computação</p>
              <p className="mb-0"><b>Início:</b> 2020.1</p>
              <p><b>Conclusão:</b> 8º Semestre</p>
            </div>
            <span id="divisoria"></span>
            <div className="quadro col-lg-7" id="estagio">
              <div className="d-flex align-items-center">
                <img src={logoPresidencia} alt="Presidência da República"/>
                <div className="d-flex flex-column">
                  <p className="mb-0"><b>Estágio:</b></p>
                  <p className="mb-0"><em>Diretoria de Acompanhamento da Execução Orçamentária (DEO)</em></p>
                  <p className="mb-0"><em>Secretaria Especial de Acompanhamento Governamental (SEAG)</em></p>
                  <p className="mb-0"><em>Secretaria de Relações Institucionais da Presidência da República (SRI – PR)</em></p>
                </div>
              </div>
              <div className="mt-2">
                <p className="mb-0"><b>Função:</b> Desenvolvedor Full Stack</p>
                <p className="mb-0"><b>Atividade:</b> Auxiliar no desenvolvimento de soluções de TI, para automatizar processos
                da secretaria de Relações Institucionais, da Presidência da República.</p>
              </div>
            </div>
            <div id="descricao">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam est perferendis quisquam voluptate suscipit nesciunt incidunt assumenda quod voluptatibus adipisci mollitia consequuntur quas, cumque quia, eos fuga ut eaque? Sint?</p>
            </div>
          </div>
        </div>
        
      </div>      
    );
  };
  
  export default About;
  
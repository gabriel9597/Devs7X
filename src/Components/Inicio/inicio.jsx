import React, {useRef} from 'react';
import "./inicio.css";
import { Link } from 'react-router-dom';
import Usa_Flag from "../../Images/langavaiUSA.png";
import Brazil_Flag from "../../Images/langavaiBR.png";
import Logo from "../../Images/Devs7X_New_Logo_1.png";

import MainImg from "../../Images/MainImg7V.png";
import ImgEx1 from "../../Images/imgex1.jpg";
import ImgEx2 from "../../Images/imgex2v.png";
import ImgEx3 from "../../Images/imgex3v.png";
import ImgEx4 from "../../Images/imgex4v.png";
import ImgAb1 from "../../Images/img5V.jpg";
import ImgAb2 from "../../Images/img6.png";
import ImgAb3 from "../../Images/img7.jpg";
import { 
    FaBars,
    FaHouseChimney,
    FaCopyright,
    FaPhone,
    FaQuoteLeft,
    FaQuoteRight,
    FaSquareInstagram,
    FaSquareWhatsapp,
    FaTv
} from "react-icons/fa6";
import { 
    IoIosArrowBack,
    IoIosArrowForward
} from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import TestImg1 from "../../Images/testimg1.2.jpg";
import TestImg2 from "../../Images/imgtest2.v.jpg";
import TestImg3 from "../../Images/imgtest3.jpg";
import TestImg4 from "../../Images/imgtest4.jpg";
import WhatsappLogo from "../../Images/logowhatsapp.png";
import {motion} from "framer-motion";

function Inicio() { 

    const variantsDTP = {
        initial: {
        y: 100,
        opacity: 0
        },
        animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
      }
    }

    const variantsDTPFooter = {
        initial: {
        y: 15,
        opacity: 0
        },
        animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1
        }
      }
    }

    const variantsTTD = {
        initial: {
            y: -55,
            opacity: 0
            },
            animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                staggerChildren: 0.1
            }
        }
    }

    const variantsLTR = {
        initial: {
        x: -300,
        opacity: 0
        },
        animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1
        }
      }
    }

    const variantsRTL = {
        initial: {
        x: 300,
        opacity: 0
        },
        animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1
        }
      }
    }
    
    const Mov = useRef();

    return <>
    <div className="Uni-Cont">

            <motion.div ref={Mov} variants={variantsTTD} initial="initial" whileInView="animate" className="Langs-Available">
                <h5>Linguagens Disponíveis</h5>
                <div className='Flags_Of_Langs'>
                    <Link to="/Home-EngVersion">
                        <img className='USA' src={Usa_Flag} alt="Bandeira que indica que a Linguagem Americana disponível"/>
                    </Link>
                    
                    <Link to="#">
                        <img className='BR' src={Brazil_Flag} alt="Bandeira que indica que a Linguagem Português do Brasil disponível" />
                    </Link>
                </div>
            </motion.div>

            <header className='header w-100 d-flex align-items-center z-3'>
                <nav className="navbar navbar-expand-lg bg-transparent" aria-label="Offcanvas navbar large">
                    <Link to="/" className='Link-Logo me-auto'><motion.img  initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Logo' src={Logo} alt="Logo"/></Link>
                    
                    <motion.button initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='navbar-toggler ms-auto' type='button' data-bs-toggle="offcanvas" data-bs-target="#nav-principal" aria-controls="nav-principal" aria-label="Toggle navigation" id="b-Menu">
                        <span role='button'>
                            <FaBars className='menu-icon' aria-hidden="true"/>
                        </span>
                    </motion.button>

                    <div className="offcanvas offcanvas-end backg-menu" tabIndex="-1" id="nav-principal" aria-labelledby="nav-principalLabel">
                        <div className="offcanvas-header">
                            <motion.img initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='M-Logo' src={Logo} alt="Menu-Logo"/>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <motion.ul  initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className="navbar-nav ms-auto">
                                <li className='nav-item'>
                                <Link to="/" className='nav-link active'><FaHouseChimney className='Menu-icons'/> Início</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Servicos" className='nav-link S'><FaTv className='Menu-icons'/> Serviços</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Contato" className='nav-link T'><FaPhone className='Menu-icons'/> Contato</Link>
                                </li>
                            </motion.ul>

                            <button className='btn btn-M2'><Link to="/Servicos" className="Sm-Link">Veja como Atuamos!</Link></button>

                            <div className='footer-header'>
                                <h6>Fale Conosco Também por esses Meios:</h6>
                                <div className='fh-icons'>
                                    <a href="https://www.instagram.com/devs7x.st/" className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href="https://api.whatsapp.com/send?phone=5511982747281" className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/> </a>
                                    <Link className='link-Rs'> <MdOutlineMail className='footer-icons' /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="Hero d-flex align-items-center">
                
                <motion.div initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Hero-Col-Left'>
                    <h1 className='overflow-y-hidden'>Seja Bem Vindo a Devs7X</h1>
                    <h3>Aqui É Onde Sua Presença Digital Será Construída</h3>
                    <p> Veja Agora as Formas que Podemos Tornar sua Empresa Bem-Sucedida na Internet!</p>

                    <div className="HBtn-Section">
                        <button className='btn btn-lg btn-A1'><Link className='S-Link' to="/Servicos">Veja nossos Serviços</Link></button>
                        <button className='btn btn-lg btn-A2'><Link className='C-Link' to="/Contato">Contate-Nos</Link></button>
                    </div>
                </motion.div> 

                <motion.div initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Hero-Col-Right'>
                    <img className="Main-Img" src={MainImg} alt="Imagem do Banner Principal: que Contém as Diversas Resoluções que nossos sites atuam"/>
                </motion.div>
            </section>

            <motion.section ref={Mov} variants={variantsDTP} initial="initial" whileInView="animate" className="Examples-Section">
                <div className="content-exps">
                    <div className="head-exps overflow-hidden text-center">
                        <h2 className='overflow-hidden'>Modelos de Sites que Fazemos</h2>
                    </div>

                    <div className="CardEx-Items d-flex overflow-hidden">
                        <div className="Card d-flex"><img src={ImgEx1} alt="Modelo de Site Institucional"/><span className="Titles-Ex1">Institucional</span></div>
                        <div className="Card d-flex"><img src={ImgEx2} alt="Modelo de Site E-commerce"/><span className="Titles-Ex2">E-Commerce</span></div>
                        <div className="Card d-flex"><img src={ImgEx3} alt="Modelo de Site PreSell"/><span className="Titles-Ex3">PreSell</span></div>
                        <div className="Card d-flex"><img src={ImgEx4} alt="Modelo de Site no Estilo Plataforma"/><span className="Titles-Ex4">Plataforma</span></div>
                    </div>
                </div>
            </motion.section>

            <section className="about-section">
                <motion.div ref={Mov} variants={variantsLTR} initial="initial" whileInView="animate" className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="display-4 fw-bold overflow-hidden">Qual é a Função de um Site?</h1>
                    
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">A Função de um Site é de Conectar Clientes com Tipos, Gostos e Localidades Diferentes ao seu Negócio E de Ser um Bastião Online de Sua Empresa Onde seu Cliente terá o Primeiro Contato com Ela, Se Interessará e Buscará Saber Mais Sobre, Mesmo sem Nunca tê-la a visto Fisicamente, O Que Possibilita que Ele não Dependa Exclusivamente do seu Negócio Físico para Realizar uma Compra, Mas o que isso Gera de Benefício?, Você deve estar se Perguntando...</p>
                        
                        <div className="gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <button type="button" className="btn btn-A1 btn-lg px-4 me-sm-3">
                                <Link className='S-Link' to="/Servicos">Conheça Nossas Soluções</Link>
                            </button>
                            <button type="button" className="btn btn-A2 btn-lg px-4">
                                <Link className='C-Link' to="/Contato">Entre em Contato!</Link>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="container px-sm-5 bsg">
                            <img src={ImgAb1} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Exemplo de Site 1" width="700" height="500" loading="lazy"/>
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={Mov} variants={variantsRTL} initial="initial" whileInView="animate" className="px-4 pt-5 my-5 text-center border-bottom">
                    <div className="overflow-hidden">
                        <div className="container px-sm-5 bsg">
                            <img src={ImgAb2} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Exemplo de Site 2" width="700" height="500" loading="lazy"/>
                        </div>
                    </div>

                    <h1 className="display-4 fw-bold overflow-hidden">Quais os Benefícios que um Site Fornece?</h1>
                    
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-3">Para o seu Cliente: Comodidade, Pois pode Comprar ou Mesmo Conhecer Melhor sua Empresa de onde ele Estiver,Seja de sua Casa,Trabalho ou Mesmo outro Continente;</p>
                        <p className='lead mb-4'>Para o seu Negócio: A Capacidade de Aumentar seus Lucros de Forma Escalonada, Pois Aquilo que sua Marca vendia apenas Localmente, Agora pode ser Adquirido em Todo País, Até Mesmo no Mundo Inteiro!</p>
                    
                        <div className="gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <button type="button" className="btn btn-A1 btn-lg px-4 me-sm-3">
                                <Link className='S-Link' to="/Servicos">Conheça Nossas Soluções</Link>
                            </button>

                            <button type="button" className="btn btn-A2 btn-lg px-4">
                                <Link className='C-Link' to="/Contato">Entre em Contato!</Link>
                            </button>

                        </div>
                    </div>
                </motion.div>

                <motion.div ref={Mov} variants={variantsLTR} initial="initial" whileInView="animate" className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="display-4 fw-bold overflow-hidden">Como Nós Podemos Te Ajudar a Crescer?</h1>
                    
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">A Forma como Podemos Ajudá-lo é Bem Simples: Através de Nossos Sites, Feitos Pelas mais Novas Tecnologias e Por Excelentes Profissionais, que te Proporcionarão os Benefícios Citados Acima e mais alguns, Dentre Eles: Aumento de Relevância e Popularidade, A Possibilidade de Difundir sua Empresa no Âmbito Virtual, Aumentando Assim sua Chance de Vender E A Criação de um Espaço Único de Contato entre a Sua Empresa e o Seu Cliente na Maior Rede de Interação Atualmente: A Internet; Entre Outros.</p>
                        
                        <div className="gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <button type="button" className="btn btn-A1 btn-lg px-4 me-sm-3">
                                <Link className='S-Link' to="/Servicos">Conheça Nossas Soluções</Link>
                            </button>

                            <button type="button" className="btn btn-A2 btn-lg px-4">
                                <Link className='C-Link' to="/Contato">Entre em Contato!</Link>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="container px-sm-5 bsg">
                            <img src={ImgAb3} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Exemplo de Site 3" width="700" height="500" loading="lazy"/>
                        </div>
                    </div>
                </motion.div>
            </section>

            <motion.section ref={Mov} variants={variantsRTL} initial="initial" whileInView="animate" className='Testimonials'>
                <div className='container mt-n5 pb-5 Testimonials-Slider overflow-hidden' id='H-Testimonials' style={{opacity: 1, transform: "none"}}>
                    <div className='Lines'>
                        <div id='T-Testimonials'>Depoimentos</div>
                    </div>

                    <div id='CarouselCaption' className='carousel slide'>
                        <div className='total'>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#CarouselCaption" data-bs-slide-to="0" className='active' aria-current="true" aria-label='Slide 1'></button>
                                <button type="button" data-bs-target="#CarouselCaption" data-bs-slide-to="1" aria-label='Slide 2'></button>
                                <button type="button" data-bs-target="#CarouselCaption" data-bs-slide-to="2" aria-label='Slide 3'></button>
                                <button type="button" data-bs-target="#CarouselCaption" data-bs-slide-to="3" aria-label='Slide 4'></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">                                     
                                        <div className="thumbnail">
                                            <img src={TestImg1} alt='Imagem da Primeira Testemunha do nosso Trabalho: Rafaela Amorim'/>
                                        </div>

                                        <div className="aside">
                                            <p>
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                    Só tenho a Agradeçer a Devs7X Por me Ajudar a Estabelecer uma Forte na Presença na Internet, Com Ajuda Deles Consegui Elevar Meus Ganhos a Níveis Muito Maiores que Tinha Antes e a Minha Empresa a um Novo Patamar.
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            <div className="name">
                                                <h4>Rafaela Amorim</h4>
                                                <p>Dona da empresa: Rfa Fashion Company</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">
                                        <div className="thumbnail">
                                            <img src={TestImg2} alt='Imagem da Segunda Testemunha do nosso Trabalho: Nikolas Almeida'/>
                                        </div>

                                        <div className="aside">
                                            <p> 
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                Agradeço Muito a Ajuda que a Devs7x me Oferceu Pois Agora Consigo Apresentar e Mostrar as Informações de Minha Construtora e Meus Projetos Muito Mais Facilmente E Ser Contatado por Clientes De Onde eu Nunca Esperaria que Seria.
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            
                                            
                                            <div className="name">
                                                <h4>Nikolas Almeida</h4>
                                                <p>Dono da Toronto Construções</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">
                                        <div className="thumbnail">
                                            <img src={TestImg3} alt='Imagem da Terceira Testemunha do nosso Trabalho: Fernando Cruz' />
                                        </div>
                                        <div className="aside">
                                            <p>
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                Com a Devs7x Consegui Aumentar Bastante o Número de Consultas tanto Físicas Quanto Digitais, Pois Agora Consigo Alcançar Meus Clientes De Uma Forma Que Nunca Achei que Poderia Fazer e Consequentemente Aumentar os Lucros, Só Tenho a Agradecer!
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            
                                            
                                            <div className="name">
                                                <h4>Fernando Cruz</h4>
                                                <p>Dono da FCR Bem-Estar - Escritório de Psicologia</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">
                                        <div className="thumbnail">
                                            <img src={TestImg4} alt='Imagem da Quarta Testemunha do nosso Trabalho: Priscila Almeida'/>
                                        </div>
                                        <div className="aside">
                                            <p>
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                Com o Auxílio da Devs7x eu Consegui Aumentar Muito a Popularidade de Meu Negócio, Antigamente Só Conseguia Atingir As Pessoas de Meu Bairro E Agora Consigo Vender Para Pessoas em Todo o meu Estado, E Estou Planejando Mais, Considero que Tenho Obtido Tudo Isso Devido ao Fator de Escala que um Site Proporciona, A Devs7x só Digo uma Coisa Muito Obrigada!
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            
                                            
                                            <div className="name">
                                                <h4>Priscila Almeida</h4>
                                                <p className='Esp'>Dona da Psc Maquiagens</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Control-Prev-T">
                                <button className='carousel-control-prev' type='button' data-bs-target="#CarouselCaption" data-bs-slide="prev">
                                    <span role='button'>
                                        <IoIosArrowBack className='Testimonial-Icon-Left' aria-hidden="true"/>
                                    </span>
                                    <span className='visually-hidden'>Previous</span>
                                </button>
                            </div>

                            <div className="Control-Next-T">
                                <button className='carousel-control-next' type='button' data-bs-target="#CarouselCaption"  data-bs-slide="next">
                                    <span role='button'>
                                        <IoIosArrowForward className='active Testimonial-Icon-Right' aria-hidden="true"/>
                                    </span>
                                    <span className='visually-hidden'>Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section ref={Mov} variants={variantsTTD} initial="initial" whileInView="animate" className="cta-section">
                <div className='cta-row d-flex'>
                    <div className='center-cta'>
                        <h2 className="Cta-Text">A Ideia de Elevar sua Empresa Foi Boa, Mas Seu Tempo Está Acabando, Conheça Já como Podemos te dar uma Presença Forte na Internet!</h2>
                        <button className='btn btn-lg btn-A2 d-flex mt-3 mx-auto'><Link className='C-Link' to="/Servicos">Conheça Nossos Serviços!</Link></button>
                    </div>
                </div>
            </motion.section>

            <section ref={Mov} className='footer-section'>
                    <div className="footer-cont overflow-y-hidden">
                        <div className="footer-row">
                            <motion.div variants={variantsDTPFooter} initial="initial" whileInView="animate" className="footer-col1">
                                <h5 className='a'>Contate-nos Também por Telefone:</h5>
                                <h6>(11) 98274-7281</h6>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter} initial="initial" whileInView="animate" className="footer-col2">
                                <img src={Logo} alt='Logo do Rodapé'/>
                                <p>Buscando Sempre Evoluir a Forma que as Empresas se Apresentam e Impactam a Internet</p>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter} initial="initial" whileInView="animate" className="footer-col3">
                                <h5>Páginas do Site:</h5>
                                <ul>  
                                    <Link to="/" className='footer-links'>Início</Link>
                                    <Link to="/Servicos" className='footer-links'>Serviços</Link>
                                    <Link to="/Contato" className='footer-links'>Contato</Link>
                                </ul>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter} initial="initial" whileInView="animate" className="footer-col4">
                                <ul>
                                    <h5>Conheça-Nos e Tire Qualquer Dúvida Também por Esses Meios:</h5>
                                    <a href='https://www.instagram.com/devs7x.st/' className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href='https://api.whatsapp.com/send?phone=5511982747281' className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/> </a>
                                    <Link className='link-Rs'> <MdOutlineMail className='footer-icons' /> </Link>
                                </ul>
                            </motion.div>
                        </div>
                        <hr />
                        <motion.p className='copyright'><FaCopyright /> CopyRight 2025 - Devs7x International - Todos os Direitos Reservados</motion.p>
                    </div>
            </section>
    </div>

            <motion.div initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='fixed-bottom p-3 bg-transparent' style={{zIndex: "7", left: "initial" }} >
                <a href='https://wa.me/11982747281' target='_blank'>
                    <img src={WhatsappLogo} width="60" className='zap-button' alt='Logo do Whatsapp'/>
                </a>
            </motion.div>
</>

}

export default Inicio;
import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Devs7X_New_Logo_1.png';
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";


import { 
    FaBars,
    FaCopyright,
    FaHouseChimney,
    FaPhone,
    FaSquareInstagram,
    FaSquareWhatsapp,
    FaTv
 } from 'react-icons/fa6';
import ContHero from "../../Images/conthero2.png";
import WhatsappLogo from "../../Images/logowhatsapp.png";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";

function Contato() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
     .sendForm(
        "service_e4xxk3g",
        "template_agqn1ae",
        form.current, {
        publicKey: "PbnYJdk1g9qBq1Mz2",
        })
        .then(
            () => {
            console.log('SUCESSO!');
            },
            (error) => {
            console.log('FALHA...', error.text);
            }
        );
  }

    const variantsContactPage = {
        initial: {
        y: 40,
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

    const variantsDTPFooter3 = {
        initial: {
        y: 15,
        opacity: 0
        },
        animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1,
        }
      }
    }

    const Mov3 = useRef();

     return <>
        <div>
            <header className='header w-100 d-flex align-items-center z-3'>
                <nav className="navbar navbar-expand-lg bg-transparent" aria-label="Offcanvas navbar large">
                    <Link to="/" className='Link-Logo me-auto'><motion.img initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Logo' src={Logo} alt="Logo"/></Link>
                    
                    <motion.button initial={{ opacity: 0, x: 90 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='navbar-toggler ms-auto' type='button' data-bs-toggle="offcanvas" data-bs-target="#nav-principal" aria-controls="nav-principal" aria-label="Toggle navigation" id="b-Menu">
                        <span role='button'>
                            <FaBars className='menu-icon' aria-hidden="true"/>
                        </span>
                    </motion.button>

                    <div className="offcanvas offcanvas-end backg-menu" tabIndex="-1" id="nav-principal" aria-labelledby="nav-principalLabel">
                        <div className="offcanvas-header">
                            <img className='M-Logo' src={Logo} alt="Menu-Logo"/>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <motion.ul initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className="navbar-nav ms-auto">
                                <li className='nav-item'>
                                    <Link to="/" className='nav-link I'><FaHouseChimney className='Menu-icons'/> Início</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Servicos" className='nav-link S'><FaTv className='Menu-icons'/> Serviços</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Contato" className='nav-link active'><FaPhone className='Menu-icons'/> Contato</Link>
                                </li>
                            </motion.ul>

                            <button className='btn btn-M4'><Link to="/" className="Sm-Link">Mais Informações!</Link></button>

                            <div className='footer-header'>
                                <h6>Entre em Contato Também por esses Meios:</h6>
                                <div className='fh-icons'>
                                    <a href='https://www.instagram.com/devs7x.st/' className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href='https://api.whatsapp.com/send?phone=5511982747281' className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/> </a>
                                    <Link className='link-Rs'> <MdOutlineMail className='footer-icons' /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <motion.section initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Contact-BG'>
                <img src={ContHero} alt="Background de um Homem Usando um Site" className='Contact-Img'/>
            </motion.section>

            <motion.section ref={Mov3} variants={variantsContactPage} initial="initial" whileInView="animate" className='contact-form'>
                <div id="Form-Container">
                    <div className="textContainer">
                        <h1>Contate-Nos e de o Próximo Passo para o Sucesso de Sua Empresa!</h1>
                        
                        <div className="item1">
                            <h2>Email</h2>
                            <span>Contact@Devs7x.com</span>
                        </div>

                        <div className="item2">
                            <h2>Horário de Funcionamento</h2>
                            <span>08:00H as 17:00H</span>
                        </div>

                        <div className="item3">
                            <h2>Telefone para Contato:</h2>
                            <span>(11) 98274-7281</span>
                        </div>
                        
                    </div>

                    <div className="formContact">
                        <form className='Form-Input-Container' ref={form} onSubmit={sendEmail}>
                            <div className="input-group">
                                <input type="text" name="Nome" required=""/>
                                <label for="">Qual é seu Nome?</label>
                            </div>
                            
                            <div className="input-group">
                                <input type="tel" name="Numero" required=""/>
                                <label for="">Qual é seu Número?</label>
                            </div>

                            <div className="input-group">
                                <input type="text" name="Nome_da_Empresa" required=""/>
                                <label for="">Qual é o Nome de sua Empresa?</label>
                            </div>

                            <div className="input-group">
                                <textarea name="Site_Escolhido" required=""></textarea>
                                <label for="">Qual Tipo de Projeto está Interessado em Fazer?</label>
                            </div>

                            <div id="" className="input-group txt-long2">
                                <input type="text" name="Horario_Para_Contato" required=""/>
                                <label for="">Qual é o Melhor Horário para Entrarmos em Contato?</label>
                            </div>

                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </motion.section>

            <section ref={Mov3} className='footer-section'>
                    <div className="footer-cont">
                        <div className="footer-row">
                            <motion.div  variants={variantsDTPFooter3} initial="initial" whileInView="animate" className="footer-col1">
                                <h5 className='a'>Contate-nos Também por Telefone:</h5>
                                <h6>(11) 98274-7281</h6>
                            </motion.div>

                            <motion.div  variants={variantsDTPFooter3} initial="initial" whileInView="animate" className="footer-col2">
                                <img src={Logo} alt='Logo do Rodapé'/>
                                <p>Buscando Sempre Evoluir a Forma que as Empresas se Apresentam e Impactam a Internet</p>
                            </motion.div>

                            <motion.div  variants={variantsDTPFooter3} initial="initial" whileInView="animate" className="footer-col3">
                                <h5>Páginas do Site:</h5>
                                <ul>  
                                    <Link to="/" className='footer-links'>Início</Link>
                                    <Link to="/Servicos" className='footer-links'>Serviços</Link>
                                    <Link to="/Contato" className='footer-links'>Contato</Link>
                                </ul>
                            </motion.div>

                            <motion.div  variants={variantsDTPFooter3} initial="initial" whileInView="animate" className="footer-col4">
                                <ul>
                                    <h5>Conheça-Nos e Tire Qualquer Dúvida Também por Esses Meios:</h5>
                                    <a href='https://www.instagram.com/devs7x.st/' className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href='https://api.whatsapp.com/send?phone=5511982747281' className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/></a>
                                    <Link className='link-Rs'> <MdOutlineMail className='footer-icons' /> </Link>
                                </ul>
                            </motion.div>
                        </div>

                        <hr />
                        
                        <p className='copyright'><FaCopyright /> CopyRight 2024 - Devs7x International - Todos os Direitos Reservados</p>   
                    </div>
            </section>
        </div>

            <motion.div initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='fixed-bottom p-3 zap-button' style={{zIndex: "7", left: "initial" }} >
                <a href='https://wa.me/11982747281' target='_blank'>
                    <img src={WhatsappLogo} width="60" alt='Logo do Whatsapp'/>
                </a>
            </motion.div>
    </>
}

export default Contato;
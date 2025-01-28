import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Devs7X_New_Logo_1.png';
import "./contactEng.css";
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

function ContatoEng() {

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
            console.log('SUCESS!');
            },
            (error) => {
            console.log('ERROR...', error.text);
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
                    <Link to="/Home-EngVersion" className='Link-Logo me-auto'><motion.img initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Logo' src={Logo} alt="Logo"/></Link>
                    
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
                                    <Link to="/Home-EngVersion" className='nav-link I'><FaHouseChimney className='Menu-icons'/> Home</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Services-EngVersion" className='nav-link S'><FaTv className='Menu-icons'/> Services</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Contact-EngVersion" className='nav-link active'><FaPhone className='Menu-icons'/> Contact</Link>
                                </li>
                            </motion.ul>

                            <button className='btn btn-M4'><Link to="/" className="Sm-Link">More Informations!</Link></button>

                            <div className='footer-header'>
                                <h6>Contact Us Also Through These Means:</h6>
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
                <img src={ContHero} alt="Background of a Men Using a Website" className='Contact-Img'/>
            </motion.section>

            <motion.section ref={Mov3} variants={variantsContactPage} initial="initial" whileInView="animate" className='contact-form'>
                <div id="Form-Container">
                    <div className="textContainer">
                        <h1>Contact Us and Give the Next Pass to Sucess of your Company!</h1>
                        
                        <div className="item1">
                            <h2>Email</h2>
                            <span>Contact@Devs7x.com</span>
                        </div>

                        <div className="item2">
                            <h2>Business Hours</h2>
                            <span>08:00H as 17:00H</span>
                        </div>

                        <div className="item3">
                            <h2>Phone Number to Contact:</h2>
                            <span>(11) 98274-7281</span>
                        </div>       
                    </div>

                    <div className="formContact">
                        <form className='Form-Input-Container' ref={form} onSubmit={sendEmail}>
                            <div className="input-group">
                                <input type="text" name="Nome" required=""/>
                                <label for="">What's your Name?</label>
                            </div>
                            
                            <div className="input-group">
                                <input type="tel" name="Numero" required=""/>
                                <label for="">What's your Number?</label>
                            </div>

                            <div className="input-group">
                                <input type="text" name="Nome_da_Empresa" required=""/>
                                <label for="">What is The Name of your Company?</label>
                            </div>

                            <div className="input-group">
                                <textarea name="Site_Escolhido" required=""></textarea>
                                <label for="">What Type of Project Are You Interested in Doing?</label>
                            </div>

                            <div id="" className="input-group txt-long2">
                                <input type="text" name="Horario_Para_Contato" required=""/>
                                <label for="">When is the Best Time to Get in Touch?</label>
                            </div>

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </motion.section>

            <section ref={Mov3} className='footer-section'>
                    <div className="footer-cont">
                        <div className="footer-row">
                            <motion.div  variants={variantsDTPFooter3} initial="initial" whileInView="animate" className="footer-col1">
                                <h5 className='a'>Also Contact Us By Phone:</h5>
                                <h6>(11) 98274-7281</h6>
                            </motion.div>

                            <motion.div  variants={variantsDTPFooter3} initial="initial" whileInView="animate" className="footer-col2">
                                <img src={Logo} alt='Logo do Rodapé'/>
                                <p>Always Seeking to Evolve the Way Companies Present Themselves and Impact the Internet</p>
                            </motion.div>

                            <motion.div  variants={variantsDTPFooter3} initial="initial" whileInView="animate" className="footer-col3">
                                <h5>Website Pages:</h5>
                                <ul>  
                                    <Link to="/Home-EngVersion" className='footer-links'>Home</Link>
                                    <Link to="/Services-EngVersion" className='footer-links'>Services</Link>
                                    <Link to="/Contact-EngVersion" className='footer-links'>Contact</Link>
                                </ul>
                            </motion.div>

                            <motion.div  variants={variantsDTPFooter3} initial="initial" whileInView="animate" className="footer-col4">
                                <ul>
                                    <h5>Get To Know Us and Ask Any Questions you Have through These Means:</h5>
                                    <a href='https://www.instagram.com/devs7x.st/' className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href='https://api.whatsapp.com/send?phone=5511982747281' className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/></a>
                                    <Link className='link-Rs'> <MdOutlineMail className='footer-icons' /> </Link>
                                </ul>
                            </motion.div>
                        </div>

                        <hr />
                        
                        <p className='copyright'><FaCopyright /> CopyRight 2025 - Devs7x International - All Rights Reserved</p>   
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

export default ContatoEng;
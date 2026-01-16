import React, {useRef, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Usa_Flag from "../../Images/langavaiUSA.png";
import Brazil_Flag from "../../Images/langavaiBR.png";
import Logo from '../../Images/Devs7X_New_Logo_1.png';
import ChatBot_Logo from "../../Images/Devs7xChatBotLogo.png";

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
 import {
    IoIosArrowUp,
    IoIosArrowDown
} from "react-icons/io";
import ContHero from "../../Images/conthero2.png";
import { BsChatLeftTextFill } from "react-icons/bs";
import { ChatbotInfo } from "../../ChatbotInfo.js";
import WhatsappLogo from "../../Images/logowhatsapp.png";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";

import Header from '../Comp_Reut/Header/header.jsx';
import Footer from '../Comp_Reut/Footer/footer.jsx';
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

    const variantsTTDContPage = {
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

    const [chatHistory3, setChatHistory3] = useState([{
            hideInChat3: true,
            role: "model",
            text: ChatbotInfo,
         },
        ]);
        const [showChatbot3, setShowChatBot3] = useState(false);
        const chatBodyRef3 = useRef();
    
        const generateBotResponse3 = async (history3) => {
            const updateHistory3 = (text, isError3 = false) => {
                setChatHistory3((prev) => [...prev.filter((msg) => msg.text !== "Carregando..."), {role: "model", text, isError3}])
            }
    
            history3 = history3.map(({role, text}) => ({role, parts: [{text}] }));
    
            const requestOptions3 = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({contents: history3})
            }
    
            try {
                const response3 = await fetch(import.meta.env.VITE_API_URL, requestOptions3)
                const data3 = await response3.json();
                if(!response3.ok) throw new Error(data3.error.message || "Opa, Algo Está Errado!")
    
                const apiResponseText3 = data3.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim()
                updateHistory3(apiResponseText3)
            } catch (error) {
                updateHistory3(error.message, true)
            }
        }
    
        useEffect(() => {
            chatBodyRef3.current.scrollTo({top: chatBodyRef3.current.scrollHeight, behavior: "smooth"})
        }, [chatHistory3])
    
        const inputRef3 = useRef();
    
        const handleFormSubmit = (e) => {
            e.preventDefault();
            const userMessage3 = inputRef3.current.value.trim();
            if (!userMessage3) return;
            inputRef3.current.value = "";
    
            setChatHistory3((history3) => [...history3, { role: "user", text: userMessage3 }])
    
            setTimeout(() => { 
                setChatHistory3((history3) => [...history3, { role: "model", text: "Carregando..."}]);
            
                generateBotResponse3([...chatHistory3, { role: "user", text: `Usando os detalhes fornecidos acima, responda a esta consulta: ${userMessage3}`}])
            }, 600);        
        
        }

    const Mov3 = useRef();

     return <>
        <div>
            <motion.div ref={Mov3} variants={variantsTTDContPage} initial="initial" whileInView="animate" className="Langs-Available">
                <h5>Linguagens Disponíveis</h5>
                <div className='Flags_Of_Langs'>
                    <Link to="/Contact-EngVersion">
                        <img className='USA' src={Usa_Flag} alt="Bandeira que indica que a Linguagem Americana disponível"/>
                    </Link>
                    
                    <Link to="#">
                        <img className='BR' src={Brazil_Flag} alt="Bandeira que indica que a Linguagem Português do Brasil disponível" />
                    </Link>
                </div>
            </motion.div>

            <Header />

            <motion.section initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Contact-BG'>
                <img src={ContHero} alt="Background de um Homem Usando um Site" className='Contact-Img'/>
            </motion.section>

            <motion.section ref={Mov3} variants={variantsContactPage} initial="initial" whileInView="animate" className='contact-form'>
                <div id="Form-Container">
                    <div className="textContainer">
                        <h1>Contate-Nos e de o Próximo Passo para o Sucesso de Sua Empresa!</h1>
                        
                        <div className="item1">
                            <h2>Email</h2>
                            <span>gabrieldevs7x@gmail.com</span>
                        </div>

                        <div className="item2">
                            <h2>Horário de Funcionamento</h2>
                            <span>08:00H as 17:00H</span>
                        </div>

                        <div className="item3">
                            <h2>Telefone para Contato:</h2>
                            <span>(11) 98053-9398</span>
                        </div>       
                    </div>

                    <div className="formContact">
                        <form className='Form-Input-Container' ref={form} onSubmit={sendEmail}>
                            <div className="input-group">
                                <input type="text" name="Nome" required/>
                                <label for="">Qual é seu Nome?</label>
                            </div>
                            
                            <div className="input-group">
                                <input type="tel" name="Numero" required/>
                                <label for="">Qual é seu Número?</label>
                            </div>

                            <div className="input-group">
                                <input type="text" name="Nome_da_Empresa" required/>
                                <label for="">Qual é o Nome de sua Empresa?</label>
                            </div>

                            <div className="input-group">
                                <textarea name="Site_Escolhido" required></textarea>
                                <label for="">Qual Tipo de Projeto está Interessado em Fazer?</label>
                            </div>

                            <div id="" className="input-group txt-long2">
                                <input type="text" name="Horario_Para_Contato" required/>
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
                                <h6>(11) 98053-9398</h6>
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
                                    <a href='https://www.instagram.com/devs7x_institucional/' className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href='https://api.whatsapp.com/send?phone=5511980539398' className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/></a>
                                    <a href="mailto:gabrieldevs7x@gmail.com" className='link-Rs'><MdOutlineMail className='footer-icons'/></a>
                                </ul>
                            </motion.div>
                        </div>

                        <hr />
                        
                        <Footer />   
                    </div>
            </section>
        </div>

            <div className={`CB-Cont ${showChatbot3 ? "show-CB" : ""}`}>
                            <motion.button initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} onClick={() => setShowChatBot3((prev) => !prev)} id="chat-toggler">
                                <BsChatLeftTextFill className="Chat-Icon"/>
                            </motion.button>
            
                            <div className="CB-popup">
                                <div className="chat-Header">
                                    <div className="header-info">
                                        <img src={ChatBot_Logo} alt="Logo do Chatbot" className='Chat-Logo'/>
                                        <h2 className="Logo_Text">Devs7X</h2>
                                    </div>
                                    <button onClick={() => setShowChatBot3(prev => !prev)}>
                                        <IoIosArrowDown className="ATD-Chat-Icon"/>
                                    </button>
                                </div>
            
                                <div ref={chatBodyRef3} className='chat-Body'>
                                    <div className="message bot-message">
                                        <img src={ChatBot_Logo} alt="Logo do Chatbot" className='S-Chat-Logo'/>
                                        <p className="message-text">
                                            Olá, Como posso te Ajudar?
                                        </p>
                                    </div>
            
                                    {chatHistory3.map((chat, index) => (
                                        !chat.hideInChat3 && (
                                        <div key={index} className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError3 ? "error" : "" }`}>
                                            {chat.role === "model" && <img src={ChatBot_Logo} alt="Logo do Chatbot" className='S-Chat-Logo'/>}
                                            <p className="message-text">
                                                {chat.text}
                                            </p>
                                        </div>
                                    )))}
                                </div>
            
                                <div className="chat-Footer">
                                    <form action="#" className="chat-Form" onSubmit={handleFormSubmit}>
                                        <input ref={inputRef3} type='text' placeholder='Mensagem...' className='message-input' required/>
                                        <button>
                                            <IoIosArrowUp className="ATP-Chat-Icon"/>
                                        </button>{/*Talvez Tirar*/}
                                    </form>
                                </div>
                            </div>   
                        </div>

            <motion.div initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='fixed-bottom p-3 bg-transparent' style={{zIndex: "7", left: "initial" }} >
                <a href='https://wa.me/11980539398' target='_blank'>
                    <img src={WhatsappLogo} width="60" className='zap-button' alt='Logo do Whatsapp'/>
                </a>
            </motion.div>
    </>
}

export default Contato;
import React, {useRef, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Usa_Flag from "../../Images/langavaiUSA.png";
import Brazil_Flag from "../../Images/langavaiBR.png";
import Logo from '../../Images/Devs7X_New_Logo_1.png';
import ChatBot_Logo from "../../Images/Devs7xChatBotLogo.png";

import "./services.css";
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
    IoIosArrowBack,
    IoIosArrowForward,
    IoIosArrowDown
} from "react-icons/io";
import ImgServ1 from "../../Images/serviceimg1.png";
import ImgServ2 from "../../Images/serviceimg2.jpg";
import ImgServ3 from "../../Images/serviceimg3.png";
import ImgServ4 from "../../Images/serviceimg4.png";
import ImgBenf1 from "../../Images/imgbeneficios1.8.png";
import ImgBenf2 from "../../Images/imgbeneficios2.6.png";
import ImgBenf3 from "../../Images/imgbeneficios3.6.png";
import ImgBenf4 from "../../Images/imgbeneficios4.6.png";
import { BsChatLeftTextFill } from "react-icons/bs"
import { ChatbotInfo } from "../../ChatbotInfo";
import WhatsappLogo from "../../Images/logowhatsapp.png";
import {motion} from "framer-motion";

function Servicos() {
     
    if(window.matchMedia("{min-width:576px}").matches) {
        
        const carouselWidth = document.querySelector("#carouselSliderServices .carousel-slider-inner")[0].scrollWidth;
        const boxWidth = document.querySelector("#carouselSliderServices .carousel-slider-item").width();

        let scrollPosition = 0;

        document.querySelector("#carouselSliderServices .Control-Next-S .carousel-control-next").onclick("click", () => {
                if(scrollPosition < (carouselWidth - (boxWidth * 4))) {
                console.log("next");
                scrollPosition = scrollPosition + boxWidth;
                document.querySelector("#carouselSliderServices .carousel-slider-inner").animate({
                    scrollLeft: scrollPosition}, 600);
                }
        })

        document.querySelector("#carouselSliderServices .Control-Prev-S .carousel-control-prev").onclick("click", () => {
                if(scrollPosition > 0) {
                console.log("prev");
                scrollPosition = scrollPosition - boxWidth;
                document.querySelector("#carouselSliderServices .carousel-slider-inner").animate({
                    scrollLeft: scrollPosition}, 600);
                }
        })
    } 

    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.bootstrap && typeof window.bootstrap.Carousel === 'function' && carouselRef.current) {
                console.log(window.bootstrap)
                new window.bootstrap.Carousel(carouselRef.current).cycle();
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);
        
    const variantsDTPFooter2 = {
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

    const variantsTTDServPage = {
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
    
    const variantsLTRServPage = {
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

    const variantsRTLServPage = {
        initial: {
        x: 100,
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

    const [chatHistory2, setChatHistory2] = useState([{
        hideInChat2: true,
        role: "model",
        text: ChatbotInfo,
     },
    ]);
    const [showChatbot2, setShowChatBot2] = useState(false);
    const chatBodyRef2 = useRef();

    const generateBotResponse2 = async (history2) => {
        const updateHistory2 = (text, isError2 = false) => {
            setChatHistory2((prev) => [...prev.filter((msg) => msg.text !== "Carregando..."), {role: "model", text, isError2}])
        }

        history2 = history2.map(({role, text}) => ({role, parts: [{text}] }));

        const requestOptions2 = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({contents: history2})
        }

        try {
            const response2 = await fetch(import.meta.env.VITE_API_URL, requestOptions2)
            const data2 = await response2.json();
            if(!response2.ok) throw new Error(data2.error.message || "Opa, Algo Está Errado!")

            const apiResponseText2 = data2.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim()
            updateHistory2(apiResponseText2)
        } catch (error) {
            updateHistory2(error.message, true)
        }
    }

    useEffect(() => {
        chatBodyRef2.current.scrollTo({top: chatBodyRef2.current.scrollHeight, behavior: "smooth"})
    }, [chatHistory2])

    const inputRef2 = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage2 = inputRef2.current.value.trim();
        if (!userMessage2) return;
        inputRef2.current.value = "";

        setChatHistory2((history2) => [...history2, { role: "user", text: userMessage2 }])

        setTimeout(() => { 
            setChatHistory2((history2) => [...history2, { role: "model", text: "Carregando..."}]);
        
            generateBotResponse2([...chatHistory2, { role: "user", text: `Usando os detalhes fornecidos acima, responda a esta consulta: ${userMessage2}`}])
        }, 600);        
    
    }

    const Mov2 = useRef();

    return <>
        <div className="">
            <motion.div ref={Mov2} variants={variantsTTDServPage} initial="initial" whileInView="animate" className="Langs-Available">
                <h5>Linguagens Disponíveis</h5>
                <div className='Flags_Of_Langs'>
                    <Link to="/Services-EngVersion">
                        <img className='USA' src={Usa_Flag} alt="Bandeira que indica que a Linguagem Americana disponível"/>
                    </Link>
                    
                    <Link to="#">
                        <img className='BR' src={Brazil_Flag} alt="Bandeira que indica que a Linguagem Português do Brasil disponível" />
                    </Link>
                </div>
            </motion.div>

            <header className='header w-100 d-flex align-items-center z-3'>
                <nav className="navbar navbar-expand-lg bg-transparent" aria-label="Offcanvas navbar large">
                    <Link to="/" className='Link-Logo me-auto'><motion.img initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Logo' src={Logo} alt="Logo"/></Link>
                    
                    <motion.button initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='navbar-toggler ms-auto' type='button' data-bs-toggle="offcanvas" data-bs-target="#nav-principal" aria-controls="nav-principal" aria-label="Toggle navigation" id="b-Menu">
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
                                    <Link to="/Servicos" className='nav-link active'><FaTv className='Menu-icons'/> Serviços</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Contato" className='nav-link T'><FaPhone className='Menu-icons'/> Contato</Link>
                                </li>
                            </motion.ul>

                            <button className='btn btn-M3'><Link to="/Contato" className="Sm-Link">Fale Conosco!</Link></button>

                            <div className='footer-header'>
                                <h6>Contate-Nos Também por esses Meios:</h6>
                                <div className='fh-icons'>
                                    <a href='https://www.instagram.com/devs7x_institucional/' className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href='https://api.whatsapp.com/send?phone=5511980539398' className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/> </a>
                                    <a href="mailto:gabrieldevs7x@gmail.com" className='link-Rs'><MdOutlineMail className='footer-icons'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <motion.section initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className="heroS">
                <div className="heroS-Cont">
                    <h1 className='heroS-Title'>Conheça os Tipos de Sites que Elevarão sua Empresa a outro Patamar!</h1>
                    <p className='heroS-P'>Desde E-Commerces até Institucionais, Aqui Você terá tudo o que for Necessário Para O: Sucesso da sua Empresa E A Expansão de Sua Marca!</p>
                    <button className="btn btn-A3">
                        <Link className="C-Link "to="/Contato">Contate-Nos</Link>
                    </button>
                </div>
            </motion.section>

            <motion.section className='Services-Section'>
                <motion.div ref={Mov2} variants={variantsRTLServPage} initial="initial" whileInView="animate" id="carouselSliderServices" className="carousel slider-container slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselSliderServices" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselSliderServices" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselSliderServices" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselSliderServices" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>

                    <div className="carousel-inner carousel-slider-inner">
                        <div className="carousel-item active carousel-slider-item">
                            <div className='Slider-Box'>
                                <h6 className='devs7x'>DEVS7X</h6>
                                <img src={ImgServ1} alt='Exemplo de Site Institucional' className='card-serv'/>
                                <div className='Serv-Details'>
                                    <h5>Site Institucional</h5>
                                    <p>O Site Institucional Tem por Objetivo Fornecer ao Cliente Informações Úteis(Sejam elas: Telefone de Contato, Email, Serviços Prestados, Localidade, Horário de Funcionamento, História da Empresa etc) De Sua Empresa Sem que Para Isso Ele Tenha que se Deslocar de Onde Esteja, Pois Agora Tudo que ele Precisa Pode ser Obtido em Qualquer Localidade Seja Ela: Outra Cidade, Outro Estado ou Mesmo Outro País;</p>
                                    <p>O que Facilita Muito o Processo do Cliente em Conhecer A Sua Marca e Ainda Possibilita ao Seu Negócio Alcançar Áreas Antes Impossíveis, Pois com um Site Sua Ideia Não Fica Limitada a Espaços Geográficos; Além de Servir como o Espaço Online de seu Negócio,Local onde o Cliente Terá um Primeiro Contato, Conheçerá Melhor Sua Empresa, e Com Isso Entrará em Contato Buscando Saber Mais Sobre como Fechar um Negócio;</p>                           
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item carousel-slider-item">
                            <div className='Slider-Box'>
                                <h6 className='devs7x'>DEVS7X</h6>
                                <img src={ImgServ2} alt='Exemplo de Site E-Commerce' className='card-serv'/>
                                <div className='Serv-Details'>
                                    <h5>Site E-Commerce</h5>
                                    <p>O Site E-Commerce É um Tipo de Site que Possibilita que o Seu Negócio Consiga Realizar Vendas Diretamente Pela Internet, Tornando o Repertório de Sua Empresa Muito Maior, Pois Agora se Conseguirá Vender em 2 Locais ao Mesmo Tempo E Ainda Em Escala, Porque o Cliente Terá Recursos a Mais que Anteriormente Ele Não Tinha Como: Poder Escolher Se Quer que o Produto Seja Entregue Diretamente em sua Casa, O que Aumenta e Muito a Chance de Vendas, Pois para o Cliente Comodidade é tudo;</p>
                                    <p>Este Modelo Também Tem Como Benefícios: Aumentar o Alcance de Seus Produtos, A Possibilidade de se Fazer Dropshipping(Modadlidade que Permite Vender Produtos sem Estoque) para qualquer região do mundo; E a Capacidade de Fazer sua Marca estar Presente onde as Empresas mais Bem-Sucedidas Vendem Atualmente: Na Internet!</p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item carousel-slider-item">
                            <div className='Slider-Box'>
                                <h6 className='devs7x'>DEVS7X</h6>
                                <img src={ImgServ3} alt='Exemplo de PreSell para Afiliados' className='card-serv'/>
                                <div className='Serv-Details'>
                                    <h5>PreSell</h5>
                                    <p>A PreSell é Utilizada por Anunciantes Afiliados para Servir como um Meio Confiável Entre um Comprador e um Produtor sem que para isso se tenha que Criar um Novo Site ou Quando há a Impossiblidade de se Utilizar o Domínio Disponibilizado pelas Plataformas de Afiliação;</p>
                                    <p>Com este Tipo de Site, O Afiliado obterá Muitos Benefícios Dentre Eles: 1º A Capacidade de ser Reutilizável, Algo que elimina a Necessidade de se Criar Novos Domínios para Cada Novo Produto que for ser Anunciado; 2º A Facilidade de sua Criação e Manutenção pois conterá Somente Itens Essenciais para Levar o Cliente ao Próximo Passo; 3º A Segurança de se ter um Metódo Mensurável ao Seu Favor, Pois se Consegue Obter Informações Vitais para a Reformulação de Estratégias(Ex:Gastar Pouco e Ganhar Muito etc) e Sua Devida Aplicação;</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="carousel-item carousel-slider-item">
                            <div className='Slider-Box'>
                                <h6 className='devs7x'>DEVS7X</h6>
                                <img src={ImgServ4} alt='Exemplo de Plataformas' className='card-serv'/>
                                <div className='Serv-Details'>
                                    <h5>Plataformas</h5>
                                    <p>As Plataformas são Utilizadas por Empresas que tem o Interesse de Fazer Aplicações Mais Robustas para um Determindado Próposito, Que Geralmente Consiste em Armazenar Grande Quantidade de Dados(Como Por Exemplo: Google,Instagram e Netflix) e Ser um Espaço Intermediário entre Compradores e Vendedores(Como por Exemplo: GetNinjas, AirBnb e Olx);</p>
                                    <p>Este Tipo de Site Detém Vários Benefícios: 1º Possuir Diversas Estatísticas para Posterior Criação de Relatórios, 2º Um Ambiente Completo Voltado para um Objetivo, Que Visa a Não Necessidade de Se Ter uma Parte Física Ou Que Seja um Excelente Complemento a Ela; 3º A Capacidade de se Ter em Mãos Dados Inseridos Automaticamente sem a Necessidade de Intervenção Humana, Ou Seja: Uma Automação de Dados!</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="Control-Prev-S">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselSliderServices" data-bs-slide="prev">
                            <span role="button">
                                <IoIosArrowBack className='Service-Icon-Left' aria-hidden="true"/>
                            </span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                    </div>

                    <div className="Control-Next-S">
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselSliderServices" data-bs-slide="next">
                            <span role='button'>
                                <IoIosArrowForward className='Service-Icon-Right' aria-hidden="true"/>
                            </span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </motion.div>
            </motion.section>

            <motion.section ref={Mov2} variants={variantsLTRServPage} initial="initial" whileInView="animate" className="Benefits-Section">
                <h2 className='Benefits-Title'>Benefícios que sua Empresa Terá Estando Junto Conosco</h2>

                <div id="carouselExampleSlidesOnly" ref={carouselRef} className="carousel slide" data-bs-ride="carousel" data-bs-pause="false" >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="15000">
                            <div className='Benefits-Cont'>
                                <div className='Benefits-Img After-Effect'>
                                    <img src={ImgBenf1} alt='Imagem de Uma Lampada que remete a Inovação' className='BenfsImg1'/>
                                </div>


                                <div className="Benefits-Content">
                                    <div className='Benefits-Texts'>
                                        <h4 className='Benefits-SubTitle'>1º Inovação</h4>
                                        <p className='Benefits-Text'>Com nossos Meios Tecnológicos, Sua Empresa Conseguirá Criar uma Presença na Internet Forte, Moderna e Totalmente Centralizada em Superar Aquilo que os Clientes Esperam no Mercado Atualmente</p>
                                        <p className='Benefits-Text'>Tendo por Difusor Recursos Altamente Tecnológicos, Tais Como: Interface Visual Moderna que Gera uma Boa Impressão Logo ao Primeiro Contato do Cliente, Integração de Seus Conteúdos com Todos os Tipos de Dispositivos Existentes E a Capacidade de Conter Meios de Contato e Estatísticas Necessárias Para que seu Negócio Consiga Atingir um Número Cada Vez Maior de Clientes Online</p>
                                        <p className='Benefits-Text'>Sua Marca só Tende a se Expandir Consistentemente e Alcançar Cada Vez Mais Lucros, Pois estará no Lugar Certo Para Isso, Entretanto não Oferecemos Somente Isso...</p>
                                    </div>

                                    <div className="Benefits-Btn">
                                        <button className='btn btn-Bfs-1'>
                                            <Link to="/Contato" className='C-Link'>Contate-Nos</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="12000">
                            <div className='Benefits-Cont'>
                                <div className='Benefits-Img After-Effect'>
                                    <img src={ImgBenf2} alt='Imagem de Um Escudo que remete a Segurança' className='BenfsImg2'/>
                                </div>


                                <div className="Benefits-Content">
                                    <div className='Benefits-Texts'>
                                        <h4 className='Benefits-SubTitle'>2º Segurança</h4>
                                        <p className='Benefits-Text'>Como Extensão dos Fatores que Nós Oferecemos Temos Também a Segurança que sua Empresa terá em Contar Profissionais Altamente Qualificados E Com uma Empresa que detém uma Reputação Intacta Desde Quando Iniciou Suas Operações no Mercado</p>
                                        <p className='Benefits-Text'>Tendo também como Fator de Segurança Todos os Nossos Projetos e Clientes Atendidos que Garantem e Atestam a Qualidade de Nossos Serviços!</p>
                                        <p className='Benefits-Text'>Além de Poder Ter Profunda Certeza de que se está Trabalhando Com Uma Empresa que Garantirá a Segurança de Seus Dados, Dos de Seus Clientes e de Tudo Aquilo que for Confiado a Nós!</p>
                                    </div>

                                    <div className="Benefits-Btn">
                                        <button className='btn btn-Bfs-1'>
                                            <Link to="/Contato" className='C-Link'>Contate-Nos</Link>
                                        </button>
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="12000">
                            <div className='Benefits-Cont'>
                                <div className='Benefits-Img After-Effect'>
                                    <img src={ImgBenf3} alt='Imagem de Vários Dispositivos que remete a Versatilidade' className='BenfsImg3'/>
                                </div>


                                <div className="Benefits-Content">
                                    <div className='Benefits-Texts'>
                                        <h4 className='Benefits-SubTitle'>3º Versatilidade</h4>
                                        <p className='Benefits-Text'>Outro Fator que Podemos Oferecer a Sua Empresa É a Capacidade de Ser Versátil, Devido a que quando Nossos Serviços forem Iniciados, Seu Negócio terá a Possibilidade de Operar em Dois Mundos Diferentes(Real e Virtual) Com as Mesmas Capacidades e Perspectivas Que se Tinha Somente em um Lugar Anteriormente</p>
                                        <p className='Benefits-Text'>Contendo Além do Mais a Forma de Viabilizar Agora um Negócio que se Pensava Anteriormente que só poderia ser uma Ideia Física, A Estar na Internet e Assim Conseguir Ter Presença Onde Mais Ocorre Vendas no Mundo Atual!</p>
                                        <p className='Benefits-Text'>Tendo ainda Essa Decisão de Tornar sua Empresa Também Virtual, Dado a Ela a Chance de Iniciar Algo que Todas as Empresas Querem Porém nem Todas Conseguem Por Não Estarem no Lugar Certo: A Expansão!</p>
                                    </div>

                                    <div className="Benefits-Btn">
                                        <button className='btn btn-Bfs-1'>
                                            <Link to="/Contato" className='C-Link'>Contate-Nos</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="12000">
                            <div className='Benefits-Cont'>
                                    <div className='Benefits-Img After-Effect'>
                                        <img src={ImgBenf4} alt='Imagem de Ondas na água que remete a Expansão' className='BenfsImg4'/>
                                    </div>


                                    <div className="Benefits-Content">
                                        <div className='Benefits-Texts'>
                                            <h4 className='Benefits-SubTitle'>4º Expansão</h4>
                                            <p className='Benefits-Text'>Além de Tudo que Nós Falamos Até Agora, Temos a Certeza que o Maior Benefício que Podemos Oferecer a Sua Marca É a Expansão, Algo que Sempre na História do Mundo Dos Negócios Foi um Fator Determinante para a Consolidação do Sucesso de uma Empresa</p>
                                            <p className='Benefits-Text'>Pois com ela se Concretiza Aquilo que Toda Empresa Precisa Para se Fortalecer e se Tornar Bem-Sucedida: A Capacidade de Crescer em Escala! Somente Dessa Forma sua Marca irá se Expandir e Alcançar Tudo Aquilo que Sempre Imaginou Para o seu Negócio</p>
                                            <p className='Benefits-Text'>Tudo Que Foi Falado Até Agora, Foram Somente 4 Benefícios que Oferecemos ao Seu Negócio, Sendo eles Uma Pequena Parte do Que Podemos Oferecer ao Crescimento de Sua Empresa e ao Fortalecimento de Sua Marca, No Momento que Escolher Estar Conosco, Não Irá se arrepender dos Outros Benefícios que Descubrirá E De Nosso Serviço Prestado, Conte Conosco para o Sucesso de Sua Empresa!</p>
                                        </div>

                                        <div className="Benefits-Btn">
                                            <button className='btn btn-Bfs-1'>
                                                <Link to="/Contato" className='C-Link'>Contate-Nos</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                          </div>
                    </div>
                </div>
            </motion.section>

            <motion.section ref={Mov2} variants={variantsTTDServPage} initial="initial" whileInView="animate" className="cta-section">
                <div className='cta-row d-flex'>
                    <div className='center-cta'>
                        <h2 className="Cta-Text">Contate-Nos Agora e Eleve sua Marca ao Lugar que ela Merece: o Topo!</h2>
                        <button className='btn btn-lg btn-A2 d-flex mt-3 mx-auto'><Link className='C-Link' to="/Contato">Contate-Nos</Link></button>
                    </div>
                </div>
            </motion.section>

            <section ref={Mov2} className='footer-section'>
                    <div className="footer-cont">
                        <div className="footer-row">
                            <motion.div variants={variantsDTPFooter2} initial="initial" whileInView="animate" className="footer-col1">
                                <h5 className='a'>Contate-nos Também por Telefone:</h5>
                                <h6>(11) 98053-9398</h6>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter2} initial="initial" whileInView="animate" className="footer-col2">
                                <img src={Logo} alt='Logo do Rodapé'/>
                                <p>Buscando Sempre Evoluir a Forma que as Empresas se Apresentam e Impactam a Internet</p>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter2} initial="initial" whileInView="animate" className="footer-col3">
                                <h5>Páginas do Site:</h5>
                                <ul>  
                                    <Link to="/" className='footer-links'>Início</Link>
                                    <Link to="/Servicos" className='footer-links'>Serviços</Link>
                                    <Link to="/Contato" className='footer-links'>Contato</Link>
                                </ul>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter2} initial="initial" whileInView="animate" className="footer-col4">
                                <ul>
                                    <h5>Conheça-Nos e Tire Qualquer Dúvida Também por Esses Meios:</h5>
                                    <a href='https://www.instagram.com/devs7x_institucional/' className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href="https://api.whatsapp.com/send?phone=5511980539398" className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/> </a>
                                    <a href="mailto:gabrieldevs7x@gmail.com" className='link-Rs'><MdOutlineMail className='footer-icons'/></a>
                                </ul>
                            </motion.div>
                        </div>
                        <hr />
                        <motion.p className='copyright'><FaCopyright /> CopyRight 2025 - Devs7x International - Todos os Direitos Reservados</motion.p>
                    </div>
            </section>
    </div>  

            <div className={`CB-Cont ${showChatbot2 ? "show-CB" : ""}`}>
                <motion.button initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} onClick={() => setShowChatBot2((prev) => !prev)} id="chat-toggler">
                    <BsChatLeftTextFill className="Chat-Icon"/>
                </motion.button>

                <div className="CB-popup">
                    <div className="chat-Header">
                        <div className="header-info">
                            <img src={ChatBot_Logo} alt="Logo do Chatbot" className='Chat-Logo'/>
                            <h2 className="Logo_Text">Devs7X</h2>
                        </div>
                        <button onClick={() => setShowChatBot2(prev => !prev)}>
                            <IoIosArrowDown className="ATD-Chat-Icon"/>
                        </button>
                    </div>

                    <div ref={chatBodyRef2} className='chat-Body'>
                        <div className="message bot-message">
                            <img src={ChatBot_Logo} alt="Logo do Chatbot" className='S-Chat-Logo'/>
                            <p className="message-text">
                                Olá, Como posso te Ajudar?
                            </p>
                        </div>

                        {chatHistory2.map((chat, index) => (
                            !chat.hideInChat2 && (
                            <div key={index} className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError2 ? "error" : "" }`}>
                                {chat.role === "model" && <img src={ChatBot_Logo} alt="Logo do Chatbot" className='S-Chat-Logo'/>}
                                <p className="message-text">
                                    {chat.text}
                                </p>
                            </div>
                        )))}
                    </div>

                    <div className="chat-Footer">
                        <form action="#" className="chat-Form" onSubmit={handleFormSubmit}>
                            <input ref={inputRef2} type='text' placeholder='Mensagem...' className='message-input' required/>
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

export default Servicos;
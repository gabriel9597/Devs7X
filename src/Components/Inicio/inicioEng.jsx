import React, {useRef} from 'react';
import "./inicioEng.css";
import { Link } from 'react-router-dom';
import Usa_Flag from "../../Images/langavaiUSA.png";
import Brazil_Flag from "../../Images/langavaiBR.png";
import Logo from "../../Images/Devs7X_New_Logo_1.png";

import MainImgEng from "../../Images/MainImgEngVersion.png";
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

function InicioEng() { 

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
                <h5 className="Align-Desk">Available Languages</h5>
                <div className='Flags_Of_Langs'>
                    <Link to="#">
                        <img className='USA' src={Usa_Flag} alt="Bandeira que indica que a Linguagem Americana disponível"/>
                    </Link>
                    
                    <Link to="/">
                        <img className='BR' src={Brazil_Flag} alt="Bandeira que indica que a Linguagem Português do Brasil disponível" />
                    </Link>
                </div>
            </motion.div>

            <header className='header w-100 d-flex align-items-center z-3'>
                <nav className="navbar navbar-expand-lg bg-transparent" aria-label="Offcanvas navbar large">
                    <Link to="/Home-EngVersion" className='Link-Logo me-auto'><motion.img  initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Logo' src={Logo} alt="Logo"/></Link>
                    
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
                                <Link to="/Home-EngVersion" className='nav-link active'><FaHouseChimney className='Menu-icons'/> Home</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Services-EngVersion" className='nav-link S'><FaTv className='Menu-icons'/> Services</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Contact-EngVersion" className='nav-link T'><FaPhone className='Menu-icons'/> Contact</Link>
                                </li>
                            </motion.ul>

                            <button className='btn btn-M2'><Link to="/Services-EngVersion" className="Sm-Link">See How We Work!</Link></button>

                            <div className='footer-header'>
                                <h6>Contact Us Also Through These Means:</h6>
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
                    <h1 className='overflow-y-hidden'>Welcome To Devs7X</h1>
                    <h3>Here's Where Your Digital Presence Will Be Built</h3>
                    <p>See Now the Ways We Can Make Your Business Successful on the Internet!</p>

                    <div className="HBtn-Section">
                        <button className='btn btn-lg btn-A1'><Link className='S-Link' to="/Services-EngVersion">See our Services</Link></button>
                        <button className='btn btn-lg btn-A2'><Link className='C-Link' to="/Contact-EngVersion">Contact Us</Link></button>
                    </div>
                </motion.div> 

                <motion.div initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Hero-Col-Right'>
                    <img className="Main-Img" src={MainImgEng} alt="Main Banner Image: which Contains the Various Resolutions that Our Websites Act On"/>
                </motion.div>
            </section>

            <motion.section ref={Mov} variants={variantsDTP} initial="initial" whileInView="animate" className="Examples-Section">
                <div className="content-exps">
                    <div className="head-exps overflow-hidden text-center">
                        <h2 className='overflow-hidden'>Website Templates We Make</h2>
                    </div>

                    <div className="CardEx-Items d-flex overflow-hidden">
                        <div className="Card d-flex"><img src={ImgEx1} alt="Institutional Website Template"/><span className="Titles-Ex1">Institucional</span></div>
                        <div className="Card d-flex"><img src={ImgEx2} alt="E-Commerce Website Template"/><span className="Titles-Ex2">E-Commerce</span></div>
                        <div className="Card d-flex"><img src={ImgEx3} alt="PreSell Website Template"/><span className="Titles-Ex3">PreSell</span></div>
                        <div className="Card d-flex"><img src={ImgEx4} alt="Style Plataform Website Template"/><span className="Titles-Ex4">Plataform</span></div>
                    </div>
                </div>
            </motion.section>

            <section className="about-section">
                <motion.div ref={Mov} variants={variantsLTR} initial="initial" whileInView="animate" className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="display-4 fw-bold overflow-hidden">What's the function of a Website?</h1>
                    
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">The Function of a Website is To Connect Customers with Different Types, Tastes and Locations to Your Business and To Be an Online Bastion of Your Company Where Your Customer Will have the First Contact with You, Will be Interested and Will Seek To Know More About you, Even Without ever Having Visa Physically, Which Enables Him Not to Depend Exclusively on Your Physical Business to Make a Purchase, But What Benefit Does This Generate? You Must be Wondering...</p>
                        
                        <div className="gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <button type="button" className="btn btn-A1 btn-lg px-4 me-sm-3">
                                <Link className='S-Link' to="/Services-EngVersion">Discover Our Solutions</Link>
                            </button>
                            <button type="button" className="btn btn-A2 btn-lg px-4">
                                <Link className='C-Link' to="/Contact-EngVersion">Get in Touch!</Link>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="container px-sm-5 bsg">
                            <img src={ImgAb1} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Website Exemple 1" width="700" height="500" loading="lazy"/>
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={Mov} variants={variantsRTL} initial="initial" whileInView="animate" className="px-4 pt-5 my-5 text-center border-bottom">
                    <div className="overflow-hidden">
                        <div className="container px-sm-5 bsg">
                            <img src={ImgAb2} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Website Exemple 2" width="700" height="500" loading="lazy"/>
                        </div>
                    </div>

                    <h1 className="display-4 fw-bold overflow-hidden">What Benefits Does a Website Provide?</h1>
                    
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-3">For your Customer: Convenience, as they can Buy or Even Get to Know Your Company Better from Wherever They Are, Whether from Their Home, Work or Even Another Continent;</p>
                        <p className='lead mb-4'>For your Business: The Ability to Increase Your Profits in a Staggered Way, Because What Your Brand Only Sold Locally Can Now Be Purchased All Over the Country, Even All Over the World!</p>
                    
                        <div className="gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <button type="button" className="btn btn-A1 btn-lg px-4 me-sm-3">
                                <Link className='S-Link' to="/Services-EngVersion">Discover Our Solutions</Link>
                            </button>

                            <button type="button" className="btn btn-A2 btn-lg px-4">
                                <Link className='C-Link' to="/Contact-EngVersion">Get in Touch!</Link>
                            </button>

                        </div>
                    </div>
                </motion.div>

                <motion.div ref={Mov} variants={variantsLTR} initial="initial" whileInView="animate" className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="display-4 fw-bold overflow-hidden">How Can We Help You Grow?</h1>
                    
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">The Way We Can Help You is Very Simple: Through our Websites, Created using the Latest Technologies and by Excellent Professionals, Which will Provide you with the Benefits Mentioned Above and a few more, Including: Increased Relevance and Popularity, The Possibility of Disseminating your Company in the Virtual Scope, Thus Increasing Your Chance of Selling And Creating a Unique Contact Space between Your Company and Your Customer in the Largest Interaction Network Today: The Internet; Between others.</p>
                        
                        <div className="gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <button type="button" className="btn btn-A1 btn-lg px-4 me-sm-3">
                                <Link className='S-Link' to="/Services-EngVersion">Discover Our Solutions</Link>
                            </button>

                            <button type="button" className="btn btn-A2 btn-lg px-4">
                                <Link className='C-Link' to="/Contact-EngVersion">Get in Touch!</Link>
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
                        <div id='T-Testimonials'>Testimonials</div>
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
                                            <img src={TestImg1} alt='Image of the First Witness of our Work: Stefany Jones'/>
                                        </div>

                                        <div className="aside">
                                            <p>
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                I Just Have to Thank Devs7X for Helping Me Establish a Strong Presence on the Internet, With Their Help I Was able to Increase my Earnings to Much Greater Levels Than I had before and my Company to a New Level.
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            <div className="name">
                                                <h4>Stefany Jones</h4>
                                                <p>Owner of Company: Rfa Fashion Company</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">
                                        <div className="thumbnail">
                                            <img src={TestImg2} alt='Image of the Second Witness of our Work: Ryan Bradley'/>
                                        </div>

                                        <div className="aside">
                                            <p> 
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                I Really Appreciate The Help that Devs7x Offered Me Because Now I Can Present and Display Information about my Construction Company and My Projects Much More Easily and be Contacted by Clients from Places I never expected to be.
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            
                                            
                                            <div className="name">
                                                <h4>Ryan Bradley</h4>
                                                <p>Owner of Toronto Constructions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">
                                        <div className="thumbnail">
                                            <img src={TestImg3} alt='Image of the Third Witness of our Work: Fernando Cruz' />
                                        </div>
                                        <div className="aside">
                                            <p>
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                With Devs7x I was able to Significantly Increase the Number of Consultations, both Physical and Digital, Because now I can reach my Customers in a way that I never thought I could do and consequently Increase Profits, I Just Have to Say Thanks!
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            
                                            
                                            <div className="name">
                                                <h4>Fernando Cruz</h4>
                                                <p>Owner of FCR Well-Being - Psychology Office</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">
                                        <div className="thumbnail">
                                            <img src={TestImg4} alt='Image of the Fourth Witness of our Work: Priscila Almeida'/>
                                        </div>
                                        <div className="aside">
                                            <p>
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                With The Help of Devs7x I Was Able to Greatly Increase the Popularity of My Business, previously I could only Reach People in my Neighborhood and Now I Can Sell to people throughout My State, and I'm Planning More, I Consider that I have Achieved all of this due to the Factor of Scale that a Website Provides, Devs7x I Only Say One Thing, Thank You Very Much!
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            
                                            
                                            <div className="name">
                                                <h4>Katherine Rose</h4>
                                                <p className='Esp'>Owner of Psc Maquiagens</p>
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
                        <h2 className="Cta-Text">The Idea of Elevating Your Company was Good, but your Time is Running Out, Find Out Now How We Can Give You a Strong Presence on the Internet!</h2>
                        <button className='btn btn-lg btn-A2 d-flex mt-3 mx-auto'><Link className='C-Link' to="/Services-EngVersion">Discover Our Solutions!</Link></button>
                    </div>
                </div>
            </motion.section>

            <section ref={Mov} className='footer-section'>
                    <div className="footer-cont overflow-y-hidden">
                        <div className="footer-row">
                            <motion.div variants={variantsDTPFooter} initial="initial" whileInView="animate" className="footer-col1">
                                <h5 className='a'>Also Contact Us By Phone:</h5>
                                <h6>(11) 98274-7281</h6>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter} initial="initial" whileInView="animate" className="footer-col2">
                                <img src={Logo} alt='Logo do Rodapé'/>
                                <p>Always Seeking to Evolve the Way Companies Present Themselves and Impact the Internet</p>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter} initial="initial" whileInView="animate" className="footer-col3">
                                <h5>Website Pages:</h5>
                                <ul>  
                                    <Link to="/Home-EngVersion" className='footer-links'>Home</Link>
                                    <Link to="/Services-EngVersion" className='footer-links'>Services</Link>
                                    <Link to="/Contact-EngVersion" className='footer-links'>Contact</Link>
                                </ul>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter} initial="initial" whileInView="animate" className="footer-col4">
                                <ul>
                                    <h5>Get To Know Us and Ask Any Questions you Have through These Means:</h5>
                                    <a href='https://www.instagram.com/devs7x.st/' className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href='https://api.whatsapp.com/send?phone=5511982747281' className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/> </a>
                                    <Link className='link-Rs'> <MdOutlineMail className='footer-icons' /> </Link>
                                </ul>
                            </motion.div>
                        </div>
                        <hr />
                        <motion.p className='copyright'><FaCopyright /> CopyRight 2025 - Devs7x International - All Rights Reserved</motion.p>
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

export default InicioEng;
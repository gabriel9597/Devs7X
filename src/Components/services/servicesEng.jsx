import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Usa_Flag from "../../Images/langavaiUSA.png";
import Brazil_Flag from "../../Images/langavaiBR.png";
import Logo from '../../Images/Devs7X_New_Logo_1.png';
import "./servicesEng.css";

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
    IoIosArrowBack,
    IoIosArrowForward
} from "react-icons/io";
import ImgServ1 from "../../Images/serviceimg1.png";
import ImgServ2 from "../../Images/serviceimg2.jpg";
import ImgServ3 from "../../Images/serviceimg3.png";
import ImgServ4 from "../../Images/serviceimg4.png";
import ImgBenf1 from "../../Images/imgbeneficios1.8.png";
import ImgBenf2 from "../../Images/imgbeneficios2.6.png";
import ImgBenf3 from "../../Images/imgbeneficios3.6.png";
import ImgBenf4 from "../../Images/imgbeneficios4.6.png";
import WhatsappLogo from "../../Images/logowhatsapp.png";
import {motion} from "framer-motion";

function ServicesEng() {
     
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
            y: -100,
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

    const Mov2 = useRef();

    return <>
        <div className="">
            <motion.div ref={Mov2} variants={variantsTTDServPage} initial="initial" whileInView="animate" className="Langs-Available">
                <h5 className="Align-Desk">Available Languages</h5>
                <div className='Flags_Of_Langs'>
                    <Link to="#">
                        <img className='USA' src={Usa_Flag} alt="Bandeira que indica que a Linguagem Americana disponível"/>
                    </Link>
                    
                    <Link to="/Servicos">
                        <img className='BR' src={Brazil_Flag} alt="Bandeira que indica que a Linguagem Português do Brasil disponível" />
                    </Link>
                </div>
            </motion.div>

            <header className='header w-100 d-flex align-items-center z-3'>
                <nav className="navbar navbar-expand-lg bg-transparent" aria-label="Offcanvas navbar large">
                    <Link to="/Home-EngVersion" className='Link-Logo me-auto'><motion.img initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='Logo' src={Logo} alt="Logo"/></Link>
                    
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
                                    <Link to="/Home-EngVersion" className='nav-link I'><FaHouseChimney className='Menu-icons'/> Home</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Services-EngVersion" className='nav-link active'><FaTv className='Menu-icons'/> Services</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/Contact-EngVersion" className='nav-link T'><FaPhone className='Menu-icons'/> Contact</Link>
                                </li>
                            </motion.ul>

                            <button className='btn btn-M3'><Link to="/Contact-EngVersion" className="Sm-Link">Contact Us!</Link></button>

                            <div className='footer-header'>
                                <h6>Contact Us Also Through These Means:</h6>
                                <div className='fh-icons'>
                                    <a href='https://www.instagram.com/devs7x_institucional/' className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href='https://api.whatsapp.com/send?phone=5511982747281' className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/> </a>
                                    <a href="mailto:gabrieldevs7x@gmail.com" className='link-Rs'><MdOutlineMail className='footer-icons'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <motion.section initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className="heroS">
                <div className="heroS-Cont">
                    <h1 className='heroS-Title'>Discover the Types of Websites that Will Take your Company to Another Level!</h1>
                    <p className='heroS-P'>From E-Commerce to Institutional, Here you Will Have Everything You Need For: The Success of Your Company and The Expansion of Your Brand!</p>
                    <button className="btn btn-A3">
                        <Link className="C-Link "to="/Contact-EngVersion">Contact Us!</Link>
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
                                    <h5>Institucional WebSite</h5>
                                    <p>The Institutional Website Aims to Provide the Customer with Useful Information (Be it: Contact Telephone, Email, Services Provided, Location, Opening Hours, Company History, etc.) About Your Company Without the Customer Having to Move From Wherever They Are , Because Now Everything He Needs Can Be Obtained In Any Location Be It: Another City, Another State or Even Another Country;</p>
                                    <p>This Greatly Facilitates the Customer's Process of Getting to Know Your Brand and Also Allows your Business to Reach Previously impossible Areas, As With a Website Your Idea is not Limited to Geographical Areas; In Addition to Serving as The Online Space for Your Business, A Place Where the Customer Will Have a First Contact, Will Get to Know your Company Better, and Will Therefore Get in Touch Seeking to Find Out More about How to Close a Deal;</p>                           
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item carousel-slider-item">
                            <div className='Slider-Box'>
                                <h6 className='devs7x'>DEVS7X</h6>
                                <img src={ImgServ2} alt='Exemplo de Site E-Commerce' className='card-serv'/>
                                <div className='Serv-Details'>
                                    <h5>E-Commerce Website</h5>
                                    <p>The E-Commerce Site Is a Type of Site that Enables Your Business to Make Sales Directly Over the Internet, Making Your Company's Repertoire Much Larger, Because Now You Will Be Able to Sell in 2 Locations at the Same Time and Still on Scale, Because the The Customer Will Have More Resources Than Previously Possible: Being Able to Choose Whether They Want the Product to be Delivered Directly to Their Home, Which Greatly Increases the Chance of Sales, For the Customer. Convenience is Everything;</p>
                                    <p>This Model Also Has the Benefits of: Increasing the Reach of Your Products, the Possibility of Dropshipping (a Method that Allows You to Sell Products Without Stock) to any Region of the World; And the Ability to Make Your Brand Present Where the Most Successful Companies Sell Today: On the Internet!</p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item carousel-slider-item">
                            <div className='Slider-Box'>
                                <h6 className='devs7x'>DEVS7X</h6>
                                <img src={ImgServ3} alt='Exemplo de PreSell para Afiliados' className='card-serv'/>
                                <div className='Serv-Details'>
                                    <h5>PreSell</h5>
                                    <p>PreSell is used by Affiliated Advertisers to Serve as a Reliable Means Between a Buyer and a Producer Without Having to Create a New Website or When it is Impossible To Use the Domain Provided by the Affiliation Platforms;</p>
                                    <p>With this Type of Website, The Affiliate will Obtain Many Benefits, Including: 1st The Ability to be Reusable, Something that Eliminates the Need to Create New Domains for Each New Product that is to be Advertised; 2nd The Ease of Creation and Maintenance as it Will only Contain Essential Items to Take the Customer to the Next Step; 3rd The Security of having a Measurable Method in Your Favor, Because You Can Obtain Vital Information for Reformulating Strategies (Ex: Spend Little and Earn a Lot, etc.) and Their Proper Application;</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="carousel-item carousel-slider-item">
                            <div className='Slider-Box'>
                                <h6 className='devs7x'>DEVS7X</h6>
                                <img src={ImgServ4} alt='Exemplo de Plataformas' className='card-serv'/>
                                <div className='Serv-Details'>
                                    <h5>Platforms</h5>
                                    <p>Platforms are Used by Companies Interested in Creating More Robust Applications for a Specific Purpose, Which Generally Consists of Storing a Large Amount of Data (such as Google, Instagram and Netflix) and Being an Intermediary Space between Buyers and Sellers(For example: Amazon, Fiverr and Walmart);</p>
                                    <p>This Type of Site Has Several Benefits: 1st Having Various Statistics for Later Creation of Reports, 2nd A Complete Environment Geared towards a Goal, Which Aims at No Need to Have a Physical Part or That Is an Excellent Complement to It; 3rd The ability to have Data Entered Automatically Without the Need for Human Intervention, in other words: Data Automation!</p>
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
                <h2 className='Benefits-Title'>Benefits Your Company Will Have by Being With Us</h2>

                <div id="carouselExampleSlidesOnly" ref={carouselRef} className="carousel slide" data-bs-ride="carousel" data-bs-pause="false" >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="15000">
                            <div className='Benefits-Cont'>
                                <div className='Benefits-Img After-Effect'>
                                    <img src={ImgBenf1} alt='Imagem de Uma Lampada que remete a Inovação' className='BenfsImg1'/>
                                </div>


                                <div className="Benefits-Content">
                                    <div className='Benefits-Texts'>
                                        <h4 className='Benefits-SubTitle'>1st - Innovation</h4>
                                        <p className='Benefits-Text'>With our Technological Means, Your Company Will Be Able to Create a Strong, Modern and Totally Centralized Internet Presence in Exceeding What Customers Expect in the Market Today</p>
                                        <p className='Benefits-Text'>Having as Diffuser Highly Technological Resources, Such As: Modern Visual Interface that Generates a Good Impression Right from the Customer's First Contact, Integration of Its Contents with All Types of Existing Devices And the Capacity to Contain Means of Contact and Statistics Necessary for Your Business Manage to Reach an Increasing Number of Customers Online</p>
                                        <p className='Benefits-Text'>Your Brand Only Tends to Expand Consistently and Achieve More and More Profits, Because It Will Be in the Right Place for That, However We Don't Just Offer That...</p>
                                    </div>

                                    <div className="Benefits-Btn">
                                        <button className='btn btn-Bfs-1'>
                                            <Link to="/Contact-EngVersion" className='C-Link'>Contact Us</Link>
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
                                        <h4 className='Benefits-SubTitle'>2nd - Security</h4>
                                        <p className='Benefits-Text'>As an Extension of the Factors We Offer, We Also have the Security that Your Company Will have in having Highly Qualified Professionals and a Company That Has an Intact Reputation Since It Began its Operations in the Market.</p>
                                        <p className='Benefits-Text'>Also having as a Safety Factor All Our Projects and Customers Served That Guarantee and Attest to the Quality of Our Services!</p>
                                        <p className='Benefits-Text'>In Addition to Being Able To be Completely Certain that you are Working with a Company that will Guarantee the Security of your Data, That of Your Customers and Everything that is Entrusted To Us!</p>
                                    </div>

                                    <div className="Benefits-Btn">
                                        <button className='btn btn-Bfs-1'>
                                            <Link to="/Contact-EngVersion" className='C-Link'>Contact Us</Link>
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
                                        <h4 className='Benefits-SubTitle'>3rd - Versatility</h4>
                                        <p className='Benefits-Text'>Another Factor We Can Offer Your Company Is The Ability To Be Versatile, Because When Our Services Are Launched, Your Business Will Have The Possibility To Operate In Two Different Worlds (Real And Virtual) With The Same Capabilities And Perspectives That We Had Only in a Previous Place</p>
                                        <p className='Benefits-Text'>Furthermore, it Contains a Way to Now Make Viable a Business that was Previously Thought to Only be a Physical Idea, Being on the Internet and Thus Being Able to Have a Presence Where Most Sales occur in Today's World!</p>
                                        <p className='Benefits-Text'>Having this Decision to Make your Company also Virtual, Giving it the Chance to Start Something that All Companies Want, But Not All of Them Can Do it Because They are not in the Right Place: Expansion!</p>
                                    </div>

                                    <div className="Benefits-Btn">
                                        <button className='btn btn-Bfs-1'>
                                            <Link to="/Contact-EngVersion" className='C-Link'>Contate-Nos</Link>
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
                                            <h4 className='Benefits-SubTitle'>4th - Expansion</h4>
                                            <p className='Benefits-Text'>In Addition to Everything We've Said So Far, We Are Certain that the Biggest Benefit We Can Offer your Brand is Expansion, Something that has Always been a Determining Factor in Consolidating a Company's Success In the History of The Business World.</p>
                                            <p className='Benefits-Text'>Because it Achieves what every Company Needs to Strengthen itself and Become Successful: The Ability to Grow On Scale! Only in This Way will Your Brand Expand and Achieve Everything You Ever Imagined for Your Business</p>
                                            <p className='Benefits-Text'>Everything That has been Said So Far, There Are Only 4 Benefits that We Offer to your Business, Which are a Small Part of what We Can Offer to the Growth of Your Company and the Strengthening of your Brand, The Moment you Choose to be With Us, You will not Regret the Other Benefits you will Discover and Our Service Provided, Count On Us for the Success of your Company!</p>
                                        </div>

                                        <div className="Benefits-Btn">
                                            <button className='btn btn-Bfs-1'>
                                                <Link to="/Contact-EngVersion" className='C-Link'>Contact Us</Link>
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
                        <h2 className="Cta-Text">Contact Us Now and Elevate Your Brand to the Place It Deserves: the Top!</h2>
                        <button className='btn btn-lg btn-A2 d-flex mt-3 mx-auto'><Link className='C-Link' to="/Contact-EngVersion">Contact Us</Link></button>
                    </div>
                </div>
            </motion.section>

            <section ref={Mov2} className='footer-section'>
                    <div className="footer-cont">
                        <div className="footer-row">
                            <motion.div variants={variantsDTPFooter2} initial="initial" whileInView="animate" className="footer-col1">
                                <h5 className='a'>Contact Us Also Through These Means:</h5>
                                <h6>(11) 98274-7281</h6>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter2} initial="initial" whileInView="animate" className="footer-col2">
                                <img src={Logo} alt='Logo do Rodapé'/>
                                <p>Always Seeking to Evolve the Way Companies Present themselves and Impact the Internet</p>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter2} initial="initial" whileInView="animate" className="footer-col3">
                                <h5>Website Pages:</h5>
                                <ul>  
                                    <Link to="/Home-EngVersion" className='footer-links'>Home</Link>
                                    <Link to="/Services-EngVersion" className='footer-links'>Services</Link>
                                    <Link to="/Contact-EngVersion" className='footer-links'>Contact</Link>
                                </ul>
                            </motion.div>

                            <motion.div variants={variantsDTPFooter2} initial="initial" whileInView="animate" className="footer-col4">
                                <ul>
                                    <h5>Get To Know Us and Ask Any Questions you Have through These Means:</h5>
                                    <a href='https://www.instagram.com/devs7x_institucional/' className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href="https://api.whatsapp.com/send?phone=5511982747281" className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/> </a>
                                    <a href="mailto:gabrieldevs7x@gmail.com" className='link-Rs'><MdOutlineMail className='footer-icons'/></a>
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

export default ServicesEng;
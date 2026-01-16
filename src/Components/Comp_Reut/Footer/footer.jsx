import React from 'react'
import "./footer.css"
import { FaCopyright } from 'react-icons/fa6'
import {motion} from 'framer-motion'

function Footer() {


    const variantsDTPFooter = {
        initial: {
        y: 15,
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

    const Ano = new Date().getFullYear();

  return (
    <div>
        <footer className="footer overflow-hidden">
            <motion.div variants={variantsDTPFooter} initial="initial" whileInView="animate" className="footer-text">
                <p>Copyright <FaCopyright /> {Ano} Devs7x International - Todos os Direitos Reservados</p>
            </motion.div>
        </footer>
    </div>
  )
}

export default Footer;
import React from 'react';
import { Link } from 'react-scroll';

export default function NavLinks( props ) {
  return (
    <ul>
      <li>
        <Link 
         ignoreCancelEvents={true} 
         smooth={true} 
         duration={400}
         to="home-scroll"
         onClick={() => props.isMobile && props.closeMobileMenu()}
         >
          INICIO
         </Link>
      </li>
      
      <li>
        <Link 
         ignoreCancelEvents={true} 
         smooth={true} 
         duration={400} 
         to="about-scroll"
         onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          MIS SERVICIOS
         </Link>
      </li>
      
      <li>
        <Link 
         ignoreCancelEvents={true} 
         smooth={true} 
         duration={400}
         to="projects-scroll"
         onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          PROYECTOS
         </Link>
      </li>
      
      <li>
        <Link 
         ignoreCancelEvents={true} 
         smooth={true} 
         duration={400}
         to="contact-scroll"
         onClick={() => props.isMobile && props.closeMobileMenu()}
         >
          CONTACTO
         </Link>
      </li>
    </ul>
  )
}

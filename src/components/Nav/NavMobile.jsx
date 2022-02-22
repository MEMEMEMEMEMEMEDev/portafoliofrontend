import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { CgMenu } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';

export default function NavMobile() {
  const [open, setOpen] = useState(false);
  const hamburguerIcon = 
    <CgMenu className='navmobile-icon' 
     size='40px' 
     color='white' 
     onClick={() => setOpen(!open)}
    />

  const closeIcon = 
    <CgClose 
     className='navmobile-icon' 
     size='40px' color='white' 
     onClick={() => setOpen(!open)}
    />

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="navmobile">
      {open ? closeIcon : hamburguerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
   <header className="header">
    <Link  to="/" className="logo">logo</Link>
    
    <NavLink to='/cian' className="menu__item menu__item_cian">Cian</NavLink>
    <NavLink to='/direct' className="menu__item menu__item_direct" >Direct</NavLink>
    <NavLink to='/avito' className="menu__item menu__item_avito">Avito</NavLink>
   </header>
  );
};

export default Header;
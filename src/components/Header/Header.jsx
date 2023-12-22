import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
   <header className="header">
    <Link to="/" className="logo">logo</Link>

    <Link to='/cian'>Cian</Link>
    <Link to='/direct'>Direct</Link>
    <Link to='/avito'>Avito</Link>
   </header>
  );
};

export default Header;
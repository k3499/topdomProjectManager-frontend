import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar } from "antd";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        logo
      </Link>

      <NavLink to="/cian" className="menu__item menu__item_cian">
        Cian
      </NavLink>
      <NavLink to="/direct" className="menu__item menu__item_direct">
        Direct
      </NavLink>
      <NavLink to="/avito" className="menu__item menu__item_avito">
        Avito
      </NavLink>
      <Link to="/" className="avatar">
        <Avatar
          style={{ backgroundColor: "#1b1b1b", verticalAlign: "middle" }}
          size={50}
          gap={3}
        >
          К Д
        </Avatar>
      </Link>
    </header>
  );
};

export default Header;

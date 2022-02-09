import React from "react";
import './header.component.css'
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/19522592581598536281.svg';

const Header= ()=>(

  <div className="header sticky" key='header'>
  <Link className="logo-container" to='/'>
  <Logo className="logo" key='logo'/>
  <div className="title">Luxery Clothing</div>
  </Link>
  <div className="options">
  <Link className="option" to='/shop' key='shop'>Shop</Link>
  <Link className="option overlay" to='/contact' key='contact'>Contact Us</Link>
  </div>
  </div>
)

export default Header;
import React from "react";
import './header.component.css'
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import {ReactComponent as Logo} from '../../assets/19522592581598536281.svg';

const Header= ({currentUser})=>(

  <div className="header sticky" key='header'>
  <Link className="logo-container" to='/'>
  <Logo className="logo" key='logo'/>
  <div className="title">Luxery Clothing</div>
  </Link>
  <div className="options">
  {
    currentUser ?
    <div className="option">{currentUser.displayName}</div> : <div/> 
  }

  <Link className="option" to='/shop' key='shop'>Shop</Link>
  
  {
    currentUser ?
    <div className="option" onClick={()=> auth.signOut()}>Sign Out</div> :
    <Link className="option" to='/sign' key='shop'>Login</Link>
  }
  <Link className="option overlay" to='/contact' key='contact'>Contact Us</Link>
  </div>
  </div>
)

export default Header;
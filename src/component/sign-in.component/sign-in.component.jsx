import React from "react";
import './sign-in.styles.css';
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../firebase/firebase.utils";
import { auth } from "../firebase/firebase.utils";

class SignIn extends React.Component{

  constructor(props){
    super(props);


    this.state= {
      email:'',
      password:''
    }
  }

  handleSubmit = async e=>{
    e.preventDefault();

    const {email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({email:'', password:''});

    }
     catch(error){
      console.log("Cannot Login", error.message);
    }

    
  }

  handleChange = e=>{
    const value = e.target.value;
    const name = e.target.name;

    this.setState({[name]:value})
  }

  render(){
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className='sub-head'>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} className='sign-in-form'>
        <input type="button" value='Sign In with Google' onClick={signInWithGoogle} className="submit-btn google"/>
        <p className="sub-head">or</p>
          <FormInput type="email" value={this.state.email} name='email' label='Email' onChange={this.handleChange} required />
          
          <FormInput type="password" value={this.state.password} label='Password' name='password' onChange={this.handleChange} required />
          <input type="submit" value='Sign In' className="submit-btn"/>
        </form>
      </div>
    )
  }

  
}

export default SignIn;
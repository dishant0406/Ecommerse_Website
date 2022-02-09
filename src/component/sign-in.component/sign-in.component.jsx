import React from "react";
import './sign-in.styles.css'
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component{

  constructor(props){
    super(props);


    this.state= {
      email:'',
      password:''
    }
  }

  handleSubmit = e=>{
    e.preventDefault();

    this.setState({email:'', password:''});
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
        <input type="submit" value='Sign In with Google' className="submit-btn"/>
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
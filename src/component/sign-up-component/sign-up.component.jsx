import React from "react";

//CSS Components
import FormInput from "../form-input/form-input.component";
import './signup.styles.css'

//FireBase Files
import { auth } from "../firebase/firebase.utils";
import { createUserProfileDocument } from "../firebase/firebase.utils";

class Signup extends React.Component{
  
  constructor(){
    super();


    this.state ={
      displayName:'',
      email:'',
      password:'',
      confirmPassword:'',
    }
  }

  handleSubmit = async e=>{

    const {displayName, email, password, confirmPassword} = this.state;
    e.preventDefault();

    if(password!==confirmPassword){
      alert("Password does not match. Try Again!!");
      return;
    }
    
    

    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:'',
      });

    }catch(error){
      console.log("Cannot create", error.message);
    }


  }


  handleChange = e=>{
    const value = e.target.value;
    const name = e.target.name;

    this.setState({[name]:value})
  }

  render(){
    return (
      <div className="sign-up">
        <h2>I do not have a account</h2>
        <span className="sub-head">Sign-up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput type='text' name='displayName' value={this.state.displayName} onChange={this.handleChange} label='Display Name' required/>
          <FormInput type='email' name='email' value={this.state.email} onChange={this.handleChange} label='Email' required/>
          <FormInput type='password' name='password' value={this.state.password} onChange={this.handleChange} label='Password' required/>
          <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
          <input type="submit" value='Sign Up' className="submit-btn"/>
        </form>
      </div>
    )
  }
}

export default Signup;
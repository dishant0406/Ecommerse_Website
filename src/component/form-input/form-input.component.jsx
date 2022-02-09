import React from "react";
import './form-input.styles.css'

const FormInput = ({handleChange, label, ...otherprops})=>(
  <div className="group">
    <input className="form-input" placeholder={label ? label : ''} 
    onChange={handleChange} {...otherprops} required />
    
  </div>
)

export default FormInput;
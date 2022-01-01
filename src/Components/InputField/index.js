
import {forwardRef} from 'react';
import './index.scss'
function InputField(props,ref){
    return(
    <div className={ ` input-field my-1 ${props.className} d-flex  align-items-center justify-content-around`}>
    <label htmlFor={props.id} className="form-label m-2">{props.label}</label>
    <input type={props.type} className="form-control my-2" id={props.id} placeholder={props.placeholder} required ref={ref} multiple={props.multiple} required/>
    
  </div>
    )
}

export default forwardRef(InputField);
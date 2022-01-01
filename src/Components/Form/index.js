import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { add_property } from '../../actions/creators';
import InputField from '../InputField'
import './index.scss'
export default function Form() {



    const history=useHistory();

    



    // input fields refs

const nameRef=useRef();

const addressRef=useRef();

const localityRef=useRef();

const priceRef=useRef();

const bedRef=useRef();

const bathRef=useRef();

const descRef=useRef();

const areaRef=useRef();



//connect component to redux by using hooks

const dispatch=useDispatch();
const properties=useSelector(state=>state)

    //submit handler function

    const submitHandler=(e)=>{
            e.preventDefault();
            dispatch(add_property({id:properties.length+1,name:nameRef.current.value,description:descRef.current.value,
                address:addressRef.current.value,
                locality:localityRef.current.value,
                price:priceRef.current.value,
                bedroom:bedRef.current.value,
                bath:bathRef.current.value,
                carpetArea:areaRef.current.value

            }));

            history.push('/kiwe-task')




    }



    return (
        <form className='form d-flex justify-content-center' onSubmit={submitHandler}>
            <div className="container">
            
        <h3>Add Property</h3>
          <div className="row">

            <div className="   col-12 col-md-6 my-2  ">
            <InputField label={'Name'} type='text' id='name' ref={nameRef} />

             </div>

            <div className="  col-12 col-md-6 my-2  ">
                <InputField label={'Address'} type='text' id='address'  ref={addressRef} />

            </div>

       

            <div className="   col-12 col-md-6 my-2  ">
                <InputField label={'Locality'} type='text' id='locality' ref={localityRef}  />

            </div>

            <div className="  col-12 col-md-6 my-2  ">
                <InputField label={'Price'} type='number' id='price' ref={priceRef}  />

            </div>


            <div className="  col-12 col-md-6 my-2  ">
                <InputField label={'Bedroom'} type='number' id='bedroom'  ref={bedRef} />

            </div>

            <div className="  col-12 col-md-6 my-2  ">
                <InputField label={'Bath'} type='number' id='bath'  ref={bathRef} />

            </div>

            <div className="  col-12 col-md-6 my-2  ">
                <InputField label={'Area'} type='number' id='area'  ref={areaRef} />

            </div>



            <div className="  col-12  my-2  ">
                <InputField label={'Add Images (max 5)'} type='file' id='images' multiple={'multiple'}  />

            </div>
       

       






            <div className="d-flex col-12  my-2">
            
                
                <textarea className="form-control"  rows="3" placeholder='write description' ref={descRef}></textarea>
        
            </div>


            <div className="d-flex justify-content-center my-5">
                <button className="btn btn-primary submit " type='submit'>
                Confirm 
                </button>
            </div>
      




    
    
      </div>

 </div>
        



        </form>
    )
}

import React, { useRef, useState } from 'react'
import './index.scss';
import { useSelector } from 'react-redux';
import Property from '../Property';
export default function MainContent(props) {
       
    const apartments=useSelector(state=>state);
    
    
    return (
       
        <div className='main-content row m-0'>
            






            <div className="filters col-12 col-md-3 py-4 ">

                <form >

               

              

                   
                       
                   <select className="form-select my-3"  >
                    <option selected>Choose Locality</option>
                    <option value="salo">Salo</option>
                    <option value="Sarkhej">Sarkhej</option>
                    <option value="Gota">Gota</option>
                    </select>
                   

            


                <input type="text" className="form-control my-3 " placeholder='Search By Name' />


                <input type="number" className="form-control my-3 " placeholder='Bedroom Num' />


                <input type="number" className="form-control my-3 " placeholder='Bath Num' />


                <div className="d-flex align-items-center">

                <label htmlFor="min" class="form-label me-2"> min </label>
                <input type="number" className="form-control  my-3 " placeholder='Min Price' id='min' />
                </div>


                <div className="d-flex align-items-center">

                <label htmlFor="max" class="form-label me-2"> max </label>
                <input type="number" className="form-control  my-3 " placeholder='Max Price' id='max' />
                </div>














                <button className="btn btn-primary my-3" type='submit'>
                    Apply
                </button>

                </form>













            </div>

            











            <div className="properties col-12 col-md-9 row ">
                   {apartments.map(apart=>(
                       <Property apart={apart} />
                   ))}
            </div>
            
        </div>
    )
}

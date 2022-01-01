import React from 'react'
import { Link} from "react-router-dom";
import apartImg from '../../images/house-1867187__480.jpg';
import './index.scss'
export default function Property(props) {
    let apart=props.apart;
 

    return (
       
            <div className='apart col-12 col-md-4  my-2 '>
            <img src={apartImg} alt="" className="img-fluid w-100" />
            <div className="details p-2 d-flex flex-column justify-content-around">
    
            
            
                <div className="d-flex justify-content-between">

                <p>{apart.name}</p>

                <p className='price fw-bold'><i class="fa fa-money me-2" aria-hidden="true"></i> {  apart.price} </p>

                </div>
                
            
    
            <small > <i class="fa fa-map-marker me-2" aria-hidden="true"></i> {apart.address}</small>
    
            
            <div className='desc-icons my-3 d-flex justify-content-around align-items-center'>
                <p>area  {apart.carpetArea} M <sup>2</sup></p>
                <p><i class="fa fa-bath me-2" aria-hidden="true"></i>
                     {apart.bath}</p>
                <p><i className="fa fa-bed me-2" aria-hidden="true"></i>
                    {apart.bedroom} </p>
            </div>
    
            <div className="d-flex justify-content-around ">
    
              

                <Link to={'/apart-details/'+apart.id} className="btn  btn-primary">
                    Details 
                </Link>

               


                
            </div>
    
           
            
           
    
            
            
            </div>
    
           
    
            
    
        </div>
        )
    
}

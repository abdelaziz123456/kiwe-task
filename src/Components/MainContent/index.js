import React from 'react'
import './index.scss';
import { useSelector } from 'react-redux';
import Property from '../Property';
export default function MainContent(props) {
       
    const apartments=useSelector(state=>state)
    return (
       
        <div className='main-content row m-0'>
            






            <div className="filters col-12 col-md-3 ">
                   
            </div>












            <div className="properties col-12 col-md-9 row ">
                   {apartments.map(apart=>(
                       <Property apart={apart} />
                   ))}
            </div>
            
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
export default function Header() {
    return (
        <div className='header d-flex justify-content-center fs-5'>

            <div className=" me-3 ">
            <Link rel="stylesheet" to="/kiwe-task" className=' btn  btn-light  px-3' >
                Main Page
            </Link>
            </div>


            <div className=" ms-3 ">
            <Link rel="stylesheet" to="/form" className=' btn  btn-light  px-3' >
                Add Property
            </Link>
            </div>


            <div className=" ms-3 ">
            <Link rel="stylesheet" to="/favourite" className=' btn  btn-light  px-3' >
                Favourite List
            </Link>
            </div>
            
            

            
        </div>
    )
}


import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import apartImg from '../../images/house-1867187__480.jpg';
import Carousell from '../Carousel';
import './index.scss';
function ApartDetails(props){

    const aparts=useSelector(state=>state)
    const apart=aparts.find(apart=>apart.id==props.match.params.id);

    let setFavList=props.setFavList
    let favList=props.favList
    let history=useHistory();
    const addToFav=(apart)=>{
     
      
    setFavList([...favList,apart]);
       history.push('/favourite')
       
    }

    
    return(
        apart ?

        <div className="apart-details ">
          

        <div className="my-4">
        <Carousell/> 

        </div>
            














         
             
             <div className="row text-dark  px-3 text-start m-0 px-5">
                 <ul className="col-12 col-md-6">
              
                
                 <li> Published in  <span>  {apart.publishDate}</span></li>
                 <li> Area :  <span>{apart.carpetArea} M <sup>2</sup></span></li>
                 
                 <li>Rooms Number :  <span> {apart.bedroom}</span></li>
                 
                 
                 </ul>
                 <ul className="col-12 col-md-6">
                
                 <li> Locality : <span>{apart.locality}</span></li>
                 <li> Price : <span>{apart.price}</span></li>
                 
                 
                 <li>Baths Number :   <span>{apart.bath}</span></li>
                 </ul>
                 <ul>
                 <li>Address :  <span>{apart.address}</span></li>
                     <li> Description : <span>
                     {apart.description} </span>
                     </li>
                     
                 </ul>
                 
                 <div className='d-flex justify-content-center'>
                    <button className="btn btn-primary my-5" onClick={()=>addToFav(apart)}>
                        Add To Favourite
                    </button>
                 </div>
                 
             </div>
           
           
        </div> : <div></div>
    )
}




export default ApartDetails
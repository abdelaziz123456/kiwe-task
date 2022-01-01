
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
            



          {/* carousel start */}

          {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={apartImg} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={apartImg} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={apartImg} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}











          {/* carousel end */}





             {/* <img src={apartImg} alt="apartment-image" className="img-fluid  my-5" /> */}
             
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
import React from 'react'
import Property from '../Property'

export default function FavouriteList(props) {
    let favList=props.favList;
    let setFavList=props.setFavList
    return (
        favList.length ?

        
            
           <>
            <div className='d-flex justify-content-center'>
                    <button className="btn btn-primary my-5" onClick={()=>setFavList([])}>
                        Clear Favourite List
                    </button>
             </div>
            <div className="fav-list  row ">
            {favList.map(apart=>(
                

                
                <Property apart={apart} />
                
            ))}
             </div>

             </>

             :
                <div><h3>The List Is Empty</h3></div>
             
        

        
       
    )
}

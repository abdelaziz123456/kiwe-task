import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import ApartDetails from './Components/ApartDetails';
import { useState } from 'react';
import FavouriteList from './Components/FavouriteList';
function App() {

  //favourite list functionality
  const [favList,setFavList]=useState([])

  return (

    <BrowserRouter>
    <div className="App">

      
     <Header/>
   
    
       <Route exact path='/form'
       component={Form}/>


       <Route exact path='/'>
       <MainContent    />
         </Route> 
       
         <Route exact path='/kiwe-task'>
       <MainContent    />
         </Route>

      
       <Route exact  path='/apart-details/:id' render={(props)=>{
         return <ApartDetails  favList={favList} setFavList={setFavList} {...props} />
       }}
    />


    <Route exact path='/favourite'>
      <FavouriteList favList={favList} setFavList={setFavList}/>
    </Route>

     

     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

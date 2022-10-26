import './App.css';
import Navbar from './component/Navbar';
import React ,{useState} from 'react';
import  NewsType from "./component/NewsType";
import TopNews from './component/TopNews';
import AxisOn0 from './component/AxisOn0';

import {HashRouter, Routes, Route} from "react-router-dom";


function App() {

  const[lat,setLat] = useState();
  const[long,setLong] = useState();

const getLocation = () => {
  if (!navigator.geolocation) {
  } else {
 
    
navigator.geolocation.getCurrentPosition((position) => {
  setLat(position.coords.latitude);
  setLong(position.coords.longitude);
}, () => {
  
});
  }
}
//"homepage": "https://omkar-phadtare.github.io/newsnow/",
getLocation();

  return (
    <div className="App">
      
<HashRouter>
    <div className='back-color'>
       
    <Navbar/>
    <NewsType/>
    
    <div className='row content-main'>
    <div className='col-md-8' data-bs-spy="scroll">


    <Routes>
          <Route exact path="/" element={<TopNews category="General"/>}></Route>
          <Route exact path="/Business" element={<TopNews category="Business"/>}></Route>
          <Route exact path="/Sports" element={<TopNews category="Sports"/>}></Route>
          <Route exact path="/Health" element={<TopNews category="Health"/>}></Route>
          <Route exact path="/Technology" element={<TopNews category="Technology"/>}></Route>
    </Routes>
    </div>
    <div className='col-2 right-side'><AxisOn0 lat={lat} long={long}/></div>
    </div>
   

    </div> 
    </HashRouter>
    </div>
  );
}

export default App;

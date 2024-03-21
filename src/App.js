import './App.css';
// import React,{useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
  return (
    <>
     <Navbar  />
     <div className="container my-4" >
      <TextForm/>
      {/* <About/> */}
     </div>
    </>
  );
}

export default App;


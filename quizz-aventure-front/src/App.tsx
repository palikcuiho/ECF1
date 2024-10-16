import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// import { getImage } from './services/imageAPI';

function App() {
  // const image = getImage("plage")
  const placeholder = 
    "https://images.unsplash.com/photo-1707909358176-984e4a79a6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mzk1NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI1OTM3OTZ8&ixlib=rb-4.0.3&q=80&w=1080";
  
  const [background, setBackground] = useState(placeholder)

  
   
  return (<>
    <div className="background-image" style={{ backgroundImage: `url(${background})` }}></div>
    <div className="main"      >
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    <div>SALUUUUUUUUUUUUUUUUUT</div>
    {/* <div><img src={placeholder} alt="placeholder" /> </div>*/}
    
      
      
    </div>
















    </>
  );
}

export default App;

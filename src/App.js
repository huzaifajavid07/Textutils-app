// import React from "react";
import React, { useState } from 'react';
import Navbar from "./components/Nav";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { HashRouter as Router, Route, Routes , Navigate} from 'react-router-dom';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not 
   const [alert, setAlert] = useState(null); // alert state 


     const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 2000);
  }
  
  

    const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <>
       <Router>
      <Navbar aboutText="About" title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          {/* /users --> Component 1
              /users/home --> Component 2 */}
          <Route path="/about" 
          element={<About mode={mode} />} />
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={
            <TextForm
              showAlert={showAlert}
              heading="Try TextUtils - Word Mind"
              mode={mode}
            />
          } />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;


import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode , setmode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 3000);
    
  }


  const toggleMode = () =>{
    if(mode=== 'light'){
      setmode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'TextUtiles - Dark Mode';  
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("light Mode has been enabled","success");
      document.title = 'TextUtiles - Light Mode';  
    }
  }
  return (
    <>
      <Router>    
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container" my-3>
           
          <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading='Enter the text here' mode={mode}/>
          </Route>
        </Switch>
          </div>
      </Router>
    </>

  );
}

export default App;

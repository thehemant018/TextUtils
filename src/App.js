
import React,{useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import{
//   BrowserRouter,
//   Route,
//   Routes
// } from 'react-router-dom';


function App() {
  const [mode,setMode] = useState('light');   //dark mode enable or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled','success');
      document.title='TextUtils-DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
      document.title='TextUtils-LightMode';
    }
  }
  
  return (
    <>
    {/* <h1>Hi</h1>      */}
    {/* here only one element return if you want to return more element use<></> */}
    {/* <div className="App">
      Marcos
    </div> */}

    {/* <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className='container'>
      <h1>Hello {name}</h1>  //you can add js in {}
      <p>Battlegrounds Mobile India is the Indian version of PUBG Mobile, exclusively for players in India. It is an online multiplayer battle royale game developed and published by Krafton. The game was initially released on 2 July 2021 for Android devices, and on 18 August 2021 for iOS devices.</p>
    </div> */}

    {/* now we use Navbar component for reduce ambiguity in code */}
    {/* <Navbar/>     import navbar component */}
    {/* <Navbar title=''textutils/>   here we return props  */}
    {/* <BrowserRouter>  */}      {/*because router not work rpoperly on github */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    {/* <Alert alert='This is temerory alert' /> */}
     <Alert alert={alert} />
    {/* <Routes>  */}
        {/* /users --->component1
           /user/home ---> component1 
           to eleminate this use exact*/}
          {/* <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze' mode={mode} />}>
          </Route>
        </Routes>
        </BrowserRouter> */}
         <TextForm showAlert={showAlert} heading='Enter the text to analyze' mode={mode} />
    
    </>
  );
  
}




export default App;

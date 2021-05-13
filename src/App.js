import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import React, {useState} from 'react'
import {LoginAuth} from './helper/Context'


function App() {
  const [auth, setAuth] = useState(false)

  return (
    <LoginAuth.Provider value={{auth, setAuth}}>
      <Router>
        <div className="App">
          <Header/>
          <Body/>
        </div>
      </Router>
    </LoginAuth.Provider>
  );
}

export default App;

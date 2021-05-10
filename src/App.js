import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body/Body';
import Home from './components/Home';
import Header from './components/Header/Header'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Body/>
      </div>
    </Router>
  );
}

export default App;

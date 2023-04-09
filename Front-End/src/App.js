import { Routes, Route } from 'react-router-dom';
import './App.css';
import ConductorLogin from './ConductorPages/Login/ConductorLogin';
import SearchBus from './UserPages/BusSearch/search';
import Search from './UserPages/BusSearch/search';
import BusTracking from './UserPages/BusTracking/BusTracking';
import Home from './UserPages/Home/Home';
import BusSearchByNumber from './UserPages/BusNumber/BusSearchByNumber';
import UserLogin from './UserPages/Login/UserLogin';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element = {<UserLogin/>} />
      <Route path="/Home" element = {<Home/>} />
      <Route path="/Bus-Search" element = {<SearchBus/>} />
      <Route path="/Bus-Details" element = {<BusTracking/>} />
      <Route path="/Bus-number" element = {<BusSearchByNumber/>} />
      <Route path="/" element = {<UserLogin/>} />
     </Routes>
    </div>
  );
}

export default App;

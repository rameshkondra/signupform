import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from "./Components/Dashboard";
import Messages from "./Components/Messages";
import Orders from "./Components/Orders";
import Help from "./Components/Help";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Messages" element={<Messages></Messages>}></Route>
        <Route path="/Orders" element={<Orders></Orders>}></Route>
        <Route path="/Help" element={<Help></Help>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

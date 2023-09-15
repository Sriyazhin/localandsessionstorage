import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signin from './Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

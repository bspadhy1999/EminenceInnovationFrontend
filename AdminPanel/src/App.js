import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from './Components/Signin';
import Home from './Components/Home';
import AllCareers from './Components/AllCareers';
import EditUser from './Components/EditUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Signin/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/allcareers' element={<AllCareers/>}/>
          <Route exact path='/edituser/:id' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

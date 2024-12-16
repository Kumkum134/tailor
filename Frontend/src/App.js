import React from 'react';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
// import MainPage from "./Pages/main-page";
import Dashboard from './Pages/Dashboard';
import AllCustumers from './Pages/allcostumers';
import NewCustumer from './Pages/Newcustumer';
import EditData from './Pages/edit-page';
import CustumerDetails from './Pages/custumer-details';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        {/* <Route path='/' element={<MainPage/>}/> */}
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/AddCustumers' element={<NewCustumer/>}/>
        <Route path='/allcustumer' element={<AllCustumers/>}/>
        <Route path='/editdetails' element={<EditData/>}/>
        <Route path='/CustumerdDetails' element={<CustumerDetails/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

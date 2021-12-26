import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Userlist from './Userlist';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Createuser from './Createuser';
import Product from './Product';
import Createproduct from './Createproduct';

function App() {

  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div className="container-fluid">

              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/users" element={<Userlist />}></Route>
                <Route path="/users/Create" element={<Createuser />}></Route>
                <Route path="/products" element={<Product />}></Route>
                <Route path="/products/Createproduct" element={<Createproduct />}></Route>
              </Routes>

            </div>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
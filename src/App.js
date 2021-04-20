import './App.css';
import  {UserProvider}  from './UserContext'
// import UserContext from './userContext';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./components/Home/Home"
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';

function App() {


   
  const [user,setUser] = useState({});
  



  return (
    <UserProvider value={[user,setUser]}>
          <Router>
            <Header></Header>
            <Switch>
             <Route exact path="/">
               <Home></Home>
             </Route>
             <Route path="/login">
               <Login></Login>
             </Route>
             <PrivateRoute path="/destination/:rideKey">
                <Destination></Destination>
             </PrivateRoute>
            </Switch>
          </Router>
    </UserProvider>
  );
}

export default App;

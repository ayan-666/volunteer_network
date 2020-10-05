import React, {createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Event from './Components/Event/Event';

import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Search from './Components/Search/Search';
import Shipment from './Components/Shipment/Shipment';
export const UserContext =  createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
       <Router>
         <Switch>
           <Route path="/home">
              <HomePage></HomePage>
           </Route>
           <Route path="/register">
              <Register></Register>
           </Route>
           <PrivateRoute path="/event">
             <Header></Header>
             <Event></Event>
           </PrivateRoute>
           <Route path="/login">
             <Header></Header>
             <Login></Login>
           </Route>
           <Route exact path="/">
              <HomePage></HomePage>
           </Route>
           <Route  path="*">
              <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>
    </UserContext.Provider>
  );
}

export default App;

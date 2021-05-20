import './App.css';
import React, {useEffect, useState} from "react"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
// import { Provider } from "react-redux";
// import store from './redux/store/store'
import NavBar from "./pages/NavBar/NavBar";
import Home from "./pages/Home/Home";
import {connect} from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(login) {
 

  const {isAuthenticated} = login

console.log(isAuthenticated, 'auth')
 useEffect(()=> {
       
       console.log(isAuthenticated, 'AUTH USE EFFECT')
        
      }, [])
  return (
    //<Provider store={store}>
    <div className="App">
            
      <Router>
        <NavBar/>
        <Switch>
            {
  
              isAuthenticated ? 
              <Route exact path="/" component={Home}/>
              :
              <>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>    
              </>
             
            }
      </Switch>
 
          
      </Router>
    

    </div>
    // </Provider>
  );
}

const mapStateToProps = (state) => ({
  login : state.login
});


export default connect(mapStateToProps)(App);

// export default App;

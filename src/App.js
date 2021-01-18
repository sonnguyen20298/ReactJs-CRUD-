import React from 'react';  
import AddUser from "./User/AddUser";
import UserList from './User/UserList'; 
import EditUser from './User/EditUser';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';  



function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/AddUser'} className="nav-link">AddUser</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/UserList'} className="nav-link">UserList</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
         <Route exact path='/AddUser' component={AddUser} />  
          <Route path='/EditUser/:id' component={EditUser} />   
          <Route path='/Userlist' component={UserList} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  
  
export default App;  
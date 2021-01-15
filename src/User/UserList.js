import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
  
export default class UserList extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('http://localhost:5000/api/UserList/GetUserList')  
        .then(response => {  
          console.log(response);
          this.setState({ business: response.data });  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    // tabRow = () => {   
    //   debugger;  
    //   return this.state.business.map(function(object, i){  
    //       return <Table obj={object} key={i} />;  
    //   });  
    // }  
  
    render() {  
      return (          
        <div>  
          <h4 align="center">User List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Name</th>  
                <th>Mobile</th>  
                <th>Email</th> 
                <th>Age</th> 
                <th>Address</th>  
                <th colSpan="5">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { 
                this.state.business.map(function(object, i){  
                  return <Table obj={object} key={i} />;  
                })
             }   
            </tbody>  
          </table>  
        </div>  
        
      );  
    }  
  }  
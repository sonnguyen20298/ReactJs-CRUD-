import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  




class Table extends Component {  
  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteUser= () =>{  
     axios.delete('http://localhost:53128/api/UserList/DeleteUser?id='+this.props.obj.id)  
      .then(json => {  
      if(json.data.Status==='Delete'){  
      alert('Record deleted successfully!!');  
      }  
      })  
    }  
  render() {  
    const {obj} = this.props;
    console.log(obj);
    return (  
        <tr>  
          <td>  
            {obj.name}  
          </td>  
          <td>  
            {obj.mobile}  
          </td>  
          <td>  
            {obj.email}  
          </td>  
          <td>
              {obj.age}
          </td>
          <td>  
            {obj.address}  
          </td>  
          <td>  
            <Link to={"/EditUser/"+obj.id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteUser} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  
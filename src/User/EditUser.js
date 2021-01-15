import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import './AddUser.css'  

class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeName = this.onChangeName.bind(this);  
    this.onChangeMobile = this.onChangeMobile.bind(this);  
    this.onChangeEmail = this.onChangeEmail.bind(this);  
    this.onChangeAge = this.onChangeAge.bind(this);  
    this.onChangeAddress = this.onChangeAddress.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            Name: '',  
            Mobile: '',  
            Email: '',  
            Age:'',
            Address: ''  
  
        }  
    }  
  
  componentDidMount() {  
      axios.get(''+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                Name: response.data.Name,   
                RollNo: response.data.RollNo,  
                Class: response.data.Class,  
                Address: response.data.Address });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
  onChangeName(e) {  
    this.setState({  
        Name: e.target.value  
    });  
  }  
  onChangeMobile(e) {  
    this.setState({  
        RollNo: e.target.value  
    });    
  }  
  onChangeEmail(e) {  
    this.setState({  
        Class: e.target.value  
    });  
}  


    onChangeAge(e) {  
        this.setState({  
            Class: e.target.value  
        });  
    } 
    onChangeAddress(e) {  
        this.setState({  
            Address: e.target.value  
        });  
  }  
  
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
        Id:this.props.match.params.id,  
      Name: this.state.Name,  
      Mobile: this.state.Mobile,  
      Email: this.state.Email,  
      Age: this.state.Age,  
      Address: this.state.Address  
  
    };  
    axios.post('http://localhost:50000/api', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/UserList')  
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update User Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Name" value={this.state.Name} onChange={this.onChangeName}  
                                placeholder="Enter Name" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Mobile</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="RollNo" value={this.state.Mobile} onChange={this.onChangeMobile} placeholder="Enter Mobile" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>Email</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Class" value={this.state.Email} onChange={this.onChangeEmail} placeholder="Enter Email" />  
                            </Col>  
                        </FormGroup>  

                        <FormGroup row>  
                            <Label for="Password" sm={2}>Age</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Class" value={this.state.Age} onChange={this.onChangeAge} placeholder="Enter Age" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>Address</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Address"value={this.state.Address} onChange={this.onChangeAddress} placeholder="Enter Address" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success">Submit</Button>{' '}  
                            </Col>  
                            <Col sm={1}>  
                                <Button color="danger">Cancel</Button>{' '}  
                            </Col>  
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                </Form>  
            </Container>  
        );  
    }  
  
}  
  
export default Edit;  
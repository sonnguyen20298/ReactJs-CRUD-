import React from "react";
import axios from "axios";
import "./AddUser.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Mobile: "",
      Email: "",
      Age: "",
      Address: "",
    };
  }
  Adduser = () => {
    debugger;
    axios
      .post("http://localhost:53128/api/UserList/CreateUser", {
        Name: this.state.Name,
        Mobile: parseInt(this.state.Mobile),
        Email: this.state.Email,
        Age: parseInt(this.state.Age),
        Address: this.state.Address,
      })
      .then((json) => {
        if (json.data.Status === 1) {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          this.props.history.push("/UserList");
        } else {
          alert("Data Save Successfull");
          debugger;
          this.props.history.push("/UserList");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="App">
        <h4 className="PageHeading">Enter User Informations</h4>
        <Form className="form">
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Name"
                  onChange={this.handleChange}
                  value={this.state.Name}
                  placeholder="Enter Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="mobile" sm={2}>
                Mobile
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="Mobile"
                  onChange={this.handleChange}
                  value={this.state.Mobile}
                  placeholder="Enter Mobile"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Email"
                  onChange={this.handleChange}
                  value={this.state.Email}
                  placeholder="Enter Email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>
                Age
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="Age"
                  onChange={this.handleChange}
                  value={this.state.Age}
                  placeholder="Enter Age"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>
                Address
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Address"
                  onChange={this.handleChange}
                  value={this.state.Address}
                  placeholder="Enter Address"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <button
                  type="button"
                  onClick={this.Adduser}
                  className="btn btn-success"
                >
                  Submit
                </button>
              </Col>
              <Col sm={1}>
                <Button color="danger">Cancel</Button>{" "}
              </Col>
              <Col sm={5}></Col>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default AddUser;

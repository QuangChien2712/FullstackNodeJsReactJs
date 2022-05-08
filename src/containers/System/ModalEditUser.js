import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import _ from "lodash";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {
    //   let {currentUser} = this.props
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "123456",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
  }

  handletoggle = () => {
    this.props.toggleFormParent();
  };

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parametter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleSaveUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.props.editUser(this.state);
      //   this.setState({
      //     email: "",
      //     password: "",
      //     firstName: "",
      //     lastName: "",
      //     address: "",
      //   });
    }
  };

  render() {
    return (
      <div className="text-center">
        <Modal
          isOpen={this.props.isOpen}
          toggle={() => {
            this.handletoggle();
          }}
        >
          <ModalHeader
            toggle={() => {
              this.handletoggle();
            }}
          >
            Edit a user{" "}
          </ModalHeader>{" "}
          <ModalBody>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail"> Email </Label>{" "}
                    <Input
                      id="exampleEmail"
                      value={this.state.email}
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "email");
                      }}
                      type="text"
                      disabled
                    />
                  </FormGroup>{" "}
                </Col>{" "}
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword"> Password </Label>{" "}
                    <Input
                      id="examplePassword"
                      value={this.state.password}
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "password");
                      }}
                      type="password"
                      disabled
                    />
                  </FormGroup>{" "}
                </Col>{" "}
              </Row>{" "}
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplefirstName"> FirstName </Label>{" "}
                    <Input
                      id="examplefirstName"
                      value={this.state.firstName}
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "firstName");
                      }}
                      type="text"
                    />
                  </FormGroup>{" "}
                </Col>{" "}
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplelastName"> LastName </Label>{" "}
                    <Input
                      id="examplelastName"
                      value={this.state.lastName}
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "lastName");
                      }}
                      type="text"
                    />
                  </FormGroup>{" "}
                </Col>{" "}
              </Row>{" "}
              <FormGroup>
                <Label for="exampleAddress"> Address </Label>{" "}
                <Input
                  id="exampleAddress"
                  value={this.state.address}
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "address");
                  }}
                />{" "}
              </FormGroup>{" "}
            </Form>{" "}
          </ModalBody>{" "}
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.handleSaveUser();
              }}
            >
              Save changes{" "}
            </Button>{" "}
            <Button onClick={function noRefCheck() {}}> Cancel </Button>{" "}
          </ModalFooter>{" "}
        </Modal>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);

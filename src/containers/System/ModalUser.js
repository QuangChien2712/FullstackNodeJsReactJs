import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
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

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
        };
    }

    componentDidMount() {}

    handletoggle = () => {
        this.props.toggleFormParent();
    };

    handleOnChangeInput = (event, id) => {
        let copyState = {...this.state };
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

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.createNewUser(this.state);
            this.setState({
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                address: "",
            });
        }
    };

    render() {
        return ( <
            div className = "text-center" >
            <
            Modal isOpen = { this.props.isOpen }
            toggle = {
                () => {
                    this.handletoggle();
                }
            } >
            <
            ModalHeader toggle = {
                () => {
                    this.handletoggle();
                }
            } >
            Create a new User { " " } <
            /ModalHeader>{" "} <
            ModalBody >
            <
            Form >
            <
            Row >
            <
            Col md = { 6 } >
            <
            FormGroup >
            <
            Label
            for = "exampleEmail" > Email < /Label>{" "} <
            Input id = "exampleEmail"
            value = { this.state.email }
            onChange = {
                (event) => {
                    this.handleOnChangeInput(event, "email");
                }
            }
            type = "text" /
            >
            <
            /FormGroup>{" "} <
            /Col>{" "} <
            Col md = { 6 } >
            <
            FormGroup >
            <
            Label
            for = "examplePassword" > Password < /Label>{" "} <
            Input id = "examplePassword"
            value = { this.state.password }
            onChange = {
                (event) => {
                    this.handleOnChangeInput(event, "password");
                }
            }
            type = "password" /
            >
            <
            /FormGroup>{" "} <
            /Col>{" "} <
            /Row>{" "} <
            Row >
            <
            Col md = { 6 } >
            <
            FormGroup >
            <
            Label
            for = "examplefirstName" > FirstName < /Label>{" "} <
            Input id = "examplefirstName"
            value = { this.state.firstName }
            onChange = {
                (event) => {
                    this.handleOnChangeInput(event, "firstName");
                }
            }
            type = "text" /
            >
            <
            /FormGroup>{" "} <
            /Col>{" "} <
            Col md = { 6 } >
            <
            FormGroup >
            <
            Label
            for = "examplelastName" > LastName < /Label>{" "} <
            Input id = "examplelastName"
            value = { this.state.lastName }
            onChange = {
                (event) => {
                    this.handleOnChangeInput(event, "lastName");
                }
            }
            type = "text" /
            >
            <
            /FormGroup>{" "} <
            /Col>{" "} <
            /Row>{" "} <
            FormGroup >
            <
            Label
            for = "exampleAddress" > Address < /Label>{" "} <
            Input id = "exampleAddress"
            value = { this.state.address }
            onChange = {
                (event) => {
                    this.handleOnChangeInput(event, "address");
                }
            }
            />{" "} <
            /FormGroup>{" "} <
            /Form>{" "} <
            /ModalBody>{" "} <
            ModalFooter >
            <
            Button color = "primary"
            onClick = {
                () => {
                    this.handleAddNewUser();
                }
            } >
            Add New { " " } <
            /Button>{" "} <
            Button onClick = {
                function noRefCheck() {} } > Cancel < /Button>{" "} <
            /ModalFooter>{" "} <
            /Modal>{" "} <
            /div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
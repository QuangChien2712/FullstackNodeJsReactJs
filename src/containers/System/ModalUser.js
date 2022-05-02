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
        this.state = {};
    }

    componentDidMount() {}

    handletoggle = () => {
        this.props.toggleFormParent();
    };

    render() {
        console.log("Props is: ", this.props);
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
            name = "email"
            placeholder = ""
            type = "email" /
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
            name = "password"
            placeholder = ""
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
            for = "exampleFirstName" > FirstName < /Label>{" "} <
            Input id = "exampleFirstName"
            name = "firstname"
            placeholder = ""
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
            for = "exampleLastName" > LastName < /Label>{" "} <
            Input id = "exampleLastName"
            name = "lastname"
            placeholder = ""
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
            name = "address"
            placeholder = "" / >
            <
            /FormGroup>{" "} <
            /Form>{" "} <
            /ModalBody>{" "} <
            ModalFooter >
            <
            Button color = "primary"
            onClick = {
                function noRefCheck() {} } >
            Save changes { " " } <
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
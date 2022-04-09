import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleLogin = () => {
        console.log(
            "username: ",
            this.state.username,
            " password: ",
            this.state.password
        );
        console.log(this.state);
    };

    render() {
        return ( <
            div className = "login-background" >
            <
            div className = "login-container" >
            <
            div className = "login-content row" >
            <
            div className = "col-12 text-login" > Login < /div>{" "} <
            div className = "col-12 form-group login-input" >
            <
            label > Username: < /label>{" "} <
            input type = "text"
            className = "form-control"
            placeholder = "Enter your username"
            onChange = {
                (event) => {
                    this.handleOnChangeUsername(event);
                }
            }
            value = { this.state.username }
            />{" "} <
            /div>{" "} <
            div className = "col-12 form-group login-input" >
            <
            label > Password: < /label>{" "} <
            div className = "custom-input-password" >
            <
            input type = "password"
            className = "form-control"
            placeholder = "Enter your Password"
            onChange = {
                (event) => {
                    this.handleOnChangePassword(event);
                }
            }
            value = { this.state.password }
            />{" "} <
            i className = "far fa-eye" > < /i>{" "} <
            /div>{" "} <
            /div>{" "} <
            div className = "col-12" >
            <
            button className = "btn-login"
            onClick = {
                () => {
                    this.handleLogin();
                }
            } >
            { " " }
            Login { " " } <
            /button>{" "} <
            /div>{" "} <
            div className = "col-12" >
            <
            span className = "forgot-password" > Forgot your password ? < /span>{" "} <
            /div>{" "} <
            div className = "col-12 text-center mt-3" >
            <
            span className = "text-other-login" > Or Login with : < /span>{" "} <
            /div>{" "} <
            div className = "col-12 social-login" >
            <
            i className = "fab fa-google-plus-g google" > < /i>{" "} <
            i className = "fab fa-facebook-f facebook" > < /i>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) =>
            dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
        };
    }

    async componentDidMount() {
        let response = await (await getAllUsers("All")).data;
        console.log("chien2 ", response);
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users,
            });
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        console.log("chien ", arrUsers);
        return ( <
            >
            <
            div className = "text-center" >
            <
            h1 > All Users < /h1> <
            table id = "customers" >
            <
            tr >
            <
            th > Email < /th> <th> First name </th > < th > Last name < /th> <
            th > Address < /th> <th> Actions </th >
            <
            /tr> {
                arrUsers &&
                    arrUsers.length > 0 &&
                    arrUsers.map((item, index) => {
                        return ( <
                            tr key = { index } >
                            <
                            td > { item.email } < /td> <td> {item.firstName} </td >
                            <
                            td > { item.lastName } < /td> <td> {item.address} </td >
                            <
                            td >
                            <
                            button className = "btn-edit" >
                            <
                            i className = "fas fa-pencil-alt" > < /i> <
                            /button> <
                            button className = "btn-delete" >
                            <
                            i className = "fas fa-trash" > < /i> <
                            /button> <
                            /td> <
                            /tr>
                        );
                    })
            } <
            /table> <
            /div> <
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
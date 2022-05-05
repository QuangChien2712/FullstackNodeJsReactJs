import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {},
        };
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async() => {
        let response = await (await getAllUsers("All")).data;
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users,
            });
        }
    };

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        });
    };

    handleEditUser = (user) => {
        // console.log("chien3: ", user);
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user,
        });
    };

    doEditUser = async(user) => {
        try {
            let res = await (await editUserService(user)).data;
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalEditUser: false,
                });
            } else {
                alert(res.errCode);
            }
        } catch (error) {
            console.log(error);
        }
        // console.log("chien2: ", res);
    };

    toggleModalUser = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        });
    };

    toggleModalEditUser = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        });
    };

    createNewUser = async(data) => {
        try {
            let responseData = await createNewUserService(data);
            let response = responseData.data;
            if (response && response.errCode !== 0) {
                alert(response.errMessage);
            } else {
                this.setState({
                    isOpenModalUser: false,
                });
                await this.getAllUsersFromReact();
            }
        } catch (error) {
            console.log(error);
        }
    };

    handleDeleteUser = async(user) => {
        try {
            let response = await (await deleteUserService(user.id)).data;
            if (response && response.errCode === 0) {
                await this.getAllUsersFromReact();
            } else {
                alert(response.errMessage);
            }
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        let arrUsers = this.state.arrUsers;

        return ( <
            >
            <
            div className = "" >
            <
            ModalUser isOpen = { this.state.isOpenModalUser }
            toggleFormParent = { this.toggleModalUser }
            createNewUser = { this.createNewUser }
            />{" "} {
                this.state.isOpenModalEditUser && ( <
                    ModalEditUser isOpen = { this.state.isOpenModalEditUser }
                    toggleFormParent = { this.toggleModalEditUser }
                    currentUser = { this.state.userEdit }
                    editUser = { this.doEditUser }
                    />
                )
            } { " " } <
            div className = "text-center" >
            <
            h1 > All Users < /h1>{" "} <
            /div>{" "} <
            div className = "mx-1" >
            <
            button className = "btn btn-primary px-3"
            onClick = {
                () => this.handleAddNewUser() } >
            <
            i className = "fas fa-plus" > < /i> Add new User{" "} <
            /button>{" "} <
            /div>{" "} <
            div >
            <
            table id = "customers" >
            <
            tbody >
            <
            tr >
            <
            th > Email < /th> <th> First name </th > < th > Last name < /th>{" "} <
            th > Address < /th> <th> Actions </th >
            <
            /tr>{" "} {
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
                            button className = "btn-edit"
                            onClick = {
                                () => {
                                    this.handleEditUser(item);
                                }
                            } >
                            <
                            i className = "fas fa-pencil-alt" > < /i>{" "} <
                            /button>{" "} <
                            button className = "btn-delete"
                            onClick = {
                                () => {
                                    this.handleDeleteUser(item);
                                }
                            } >
                            <
                            i className = "fas fa-trash" > < /i>{" "} <
                            /button>{" "} <
                            /td>{" "} <
                            /tr>
                        );
                    })
            } { " " } <
            /tbody>{" "} <
            /table>{" "} <
            /div>{" "} <
            /div>{" "} <
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
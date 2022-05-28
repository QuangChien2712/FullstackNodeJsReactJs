import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import { getAllcodeService } from "../../../services/userService";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
    };
  }

  async componentDidMount() {
    try {
      let resGender = (await getAllcodeService("gender")).data;
      let resPosition = (await getAllcodeService("position")).data;
      let resRole = (await getAllcodeService("role")).data;
      if (
        resGender &&
        resGender.errCode === 0 &&
        resPosition &&
        resPosition.errCode === 0 &&
        resRole &&
        resRole.errCode === 0
      ) {
        this.setState({
          genderArr: resGender.data,
          positionArr: resPosition.data,
          roleArr: resRole.data,
        });
      }
      console.log("Data api allcode: ", resGender);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const language = this.props.language;
    let genders = this.state.genderArr;
    let positions = this.state.positionArr;
    let roles = this.state.roleArr;
    return (
      <div className="user-redux-container">
        <div className="title">User Redux Vo Quang Chien</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>
                  <FormattedMessage id="manage-user.add" />
                </h3>
              </div>
              <div class="input-group mb-3">
                <div className="col-3">
                  {" "}
                  <label>
                    <FormattedMessage id="manage-user.email" />
                  </label>
                  <input type="email" class="form-control" />
                </div>
                <div className="col-2 ">
                  {" "}
                  <label>
                    <FormattedMessage id="manage-user.password" />
                  </label>
                  <input type="password" class="form-control" />
                </div>
                <div className="col-3 ">
                  {" "}
                  <label>
                    <FormattedMessage id="manage-user.first-name" />
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div className="col-4 ">
                  <label>
                    <FormattedMessage id="manage-user.last-name" />
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="input-group mb-3">
                <div className="col-3 ">
                  {" "}
                  <label>
                    <FormattedMessage id="manage-user.phone-number" />
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div className="col-9">
                  <label>
                    <FormattedMessage id="manage-user.address" />
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="input-group mb-3">
                <div className="col-3 ">
                  {" "}
                  <label>
                    <FormattedMessage id="manage-user.gender" />
                  </label>
                  <select className="form-control">
                    {genders &&
                      genders.length > 0 &&
                      genders.map((item, index) => {
                        return (
                          <option key={index}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-2 ">
                  {" "}
                  <label>
                    <FormattedMessage id="manage-user.position" />
                  </label>
                  <select className="form-control">
                    {positions &&
                      positions.length > 0 &&
                      positions.map((item, index) => {
                        return (
                          <option key={index}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-3 ">
                  {" "}
                  <label>
                    <FormattedMessage id="manage-user.role" />
                  </label>
                  <select className="form-control">
                    {roles &&
                      roles.length > 0 &&
                      roles.map((item, index) => {
                        return (
                          <option key={index}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-4 ">
                  <label>
                    <FormattedMessage id="manage-user.image" />
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="input-group mb-3">
                <button type="submit" class="btn btn-primary">
                  <FormattedMessage id="manage-user.save" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

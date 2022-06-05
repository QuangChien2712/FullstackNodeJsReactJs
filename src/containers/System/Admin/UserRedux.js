import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import { getAllcodeService } from "../../../services/userService";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import * as actions from "../../../store/actions";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
      previewImgURL: "",
      isOpen: false,
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
    // try {
    //   let resGender = (await getAllcodeService("gender")).data;
    //   let resPosition = (await getAllcodeService("position")).data;
    //   let resRole = (await getAllcodeService("role")).data;
    //   if (
    //     resGender &&
    //     resGender.errCode === 0 &&
    //     resPosition &&
    //     resPosition.errCode === 0 &&
    //     resRole &&
    //     resRole.errCode === 0
    //   ) {
    //     this.setState({
    //       genderArr: resGender.data,
    //       positionArr: resPosition.data,
    //       roleArr: resRole.data,
    //     });
    //   }
    //   console.log("Data api allcode: ", resGender);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      this.setState({
        roleArr: this.props.roleRedux,
      });
    }
    if (prevProps.positionRedux !== this.props.positionRedux) {
      this.setState({
        positionArr: this.props.positionRedux,
      });
    }
  }

  handleOnchangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      this.setState({
        previewImgURL: objectUrl,
      });
    }
  };

  openPreviewImage = () => {
    if (!this.state.previewImgURL) return;
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const language = this.props.language;
    let genders = this.state.genderArr;
    let positions = this.state.positionArr;
    let roles = this.state.roleArr;
    let isGetGenders = this.props.isLoadingGender;
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
              <div className="col-12">
                {isGetGenders === true ? "Loading genders..." : ""}
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
                  <div className="preview-img-container">
                    <input
                      type="file"
                      id="previewImg"
                      hidden
                      onChange={(event) => this.handleOnchangeImage(event)}
                    />
                    <label htmlFor="previewImg" className="label-upload">
                      Tải ảnh <i className="fas fa-upload"></i>
                    </label>
                    <div
                      className="preview-image"
                      style={{
                        backgroundImage: `url(${this.state.previewImgURL})`,
                      }}
                      onClick={() => this.openPreviewImage()}
                    ></div>
                  </div>
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
        {this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImgURL}
            onCloseRequest={() =>
              this.setState({
                isOpen: false,
              })
            }
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    roleRedux: state.admin.roles,
    positionRedux: state.admin.positions,
    isLoadingGender: state.admin.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

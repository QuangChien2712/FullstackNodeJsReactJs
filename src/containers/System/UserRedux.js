import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES } from "../../utils";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { language } = this.props;
    return (
      <div className="user-redux-container">
        <div className="title">User Redux Vo Quang Chien</div>
        <div className="user-redux-body">
          {language === LANGUAGES.EN ? (
            <div>Thêm mới người dùng</div>
          ) : (
            <div>Add new user</div>
          )}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

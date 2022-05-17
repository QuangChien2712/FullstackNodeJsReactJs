import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <span>
          {" "}
          &copy; 2022 Vo Quang Chien. More information, please visit my Facebook
          account
          <a
            target="_blank"
            href="https://facebook.com/voquangchiennguyennhuquynh"
          >
            &#8594; click here
          </a>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

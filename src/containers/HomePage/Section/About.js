import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Mạng xã hội nói gì về Võ Quang Chiến
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="270"
              src="https://www.youtube.com/embed/jBobfoL_SKo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Giống như hoa dại, hãy học cách sinh tồn trong mọi hoàn cảnh khắc
              nghiệt nhất, ngay cả khi người đời cho rằng bạn không thể. <br />{" "}
              Đại dương mênh mông sẽ không thể đánh chìm một con tàu nếu nước
              không tràn vào bên trong nó. Cũng tương tự như thế, những khó khăn
              sẽ không thể quật ngã bạn nếu bạn không cho phép chúng làm thế.{" "}
              <br /> Không một quyền lực nào có thể ngăn cản được một người có
              thái độ, tinh thần đúng đạt được mục đích của mình. Và không gì
              trên đời có thể giúp một người có thái độ, tinh thần không đúng
              đạt được thành công – Thomas Jefferson <br /> Thành công là một
              trạng thái tinh thần. Nếu bạn muốn thành công, hãy bắt đầu suy
              nghĩ như mình là một người thành công – Joyce Brother <br /> Hãy
              cố gắng thắp lên một ngọn nến còn hơn cứ ngồi nguyền rủa bóng tối.
            </p>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);

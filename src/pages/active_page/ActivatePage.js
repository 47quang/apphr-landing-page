import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Container from "../../common/Container";
import SvgIcon from "../../common/SvgIcon";
import "../../components/modal/sign_up/style.css";
import "./styles.css";
import { ActivatePageContainer } from "./ActivatePageStyle";

const ActivatePage = (props) => {
  const { match } = props;
  const params = match.params;
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(true);
  }, []);
  const renderActiveLayout = () => {
    return (
      <Row justify="center" align="middle">
        <Col>
          <SvgIcon src={"active_success.svg"} className="about-block-image" />
        </Col>
        <Col>
          <h3 className="text-success b">Kích hoạt tài khoản thành công</h3>

          <p>
            Chúc mừng bạn đã kích hoạt thành công hệ thống APPHR, doanh nghiệp
            của bạn có 14 ngày sử dụng thử hệ thống.
          </p>
          <a
            href="https://dev.apphr.me"
            className="button register section padding"
          >
            Đi đến Trang đăng nhập
          </a>
        </Col>
      </Row>
    );
  };
  const renderInActiveLayout = () => {
    return (
      <Row justify="start" align="middle">
        <Col>
          <SvgIcon src={"inactive.svg"} className="about-block-image" />
        </Col>
        <Col>
          <h3 className="text-danger b">
            Kích hoạt tài khoản không thành công
          </h3>
          <p></p>
        </Col>
      </Row>
    );
  };
  return (
    <Container>
      <ActivatePageContainer>
        {isActive ? renderActiveLayout() : renderInActiveLayout()}
      </ActivatePageContainer>
    </Container>
  );
};
export default ActivatePage;

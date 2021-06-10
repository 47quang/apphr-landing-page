import { Col, Drawer, Row } from "antd";
import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { CSSTransition } from "react-transition-group";
import Button from "../../common/Button";
import Container from "../../common/Container";
import PngIcon from "../../common/PngIcon";
import SignUpModal from "../modal/sign_up/SignUp";
import * as S from "./styles";

const Header = (props) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);
  const { t } = useTranslation();

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };
  const MenuItem = () => {
    return (
      <Fragment>
        <S.CustomNavLinkSmall>
          <S.CustomLink exact to="/">
            {t("Home")}
          </S.CustomLink>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <S.CustomLink to="/hr-module">{t("Human Resources")}</S.CustomLink>
        </S.CustomNavLinkSmall>
        {/* <S.CustomNavLinkSmall>
          <S.CustomLink to="/training-module">{t('Training')}</S.CustomLink>
        </S.CustomNavLinkSmall> */}
        {/* <S.CustomNavLinkSmall>
          <S.CustomLink to="/about">{t('About')}</S.CustomLink>
        </S.CustomNavLinkSmall> */}
        <S.CustomNavLinkSmall style={{ width: "150px" }}>
          <Button
            style={{ color: "black", background: "white" }}
            onClick={() => {
              document.getElementById("modalSignUp").style.display = "block";
            }}
          >
            {t("Sign Up")}
          </Button>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <>
      <S.Header>
        <Container>
          <S.Container>
            <Row type="flex" justify="space-between" gutter={20}>
              <Col style={{ display: "flex", alignItems: "center" }}>
                <S.LogoContainer to="/">
                  <PngIcon
                    src="long_logo_web.png"
                    style={{ height: 70, alignItems: "center" }}
                  />
                </S.LogoContainer>
              </Col>
              {/* <Col span={7}></Col> */}
              {/* <S.NotHidden> */}
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <MenuItem />
              </Col>
              {/* </S.NotHidden> */}
              <S.Burger onClick={showDrawer}>
                <S.Outline />
              </S.Burger>
            </Row>
            <CSSTransition
              in={!isSmallScreen || isNavVisible}
              timeout={350}
              classNames="NavAnimation"
              unmountOnExit
            >
              <Drawer closable={false} visible={visible} onClose={onClose}>
                <Col styleDrawer={{ marginBottom: "2.5rem" }}>
                  <S.Label onClick={onClose}>
                    <Col span={12}>
                      <S.Menu>Menu</S.Menu>
                    </Col>
                    <Col span={12}>
                      <S.Outline padding="true" />
                    </Col>
                  </S.Label>
                </Col>
                <MenuItem />
              </Drawer>
            </CSSTransition>
          </S.Container>
        </Container>
      </S.Header>
      <SignUpModal />
    </>
  );
};

export default Header;

import React from "react";
import { Row, Col } from "antd";
import SvgIcon from "../../../common/SvgIcon";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";
import Button from "../../../common/Button";

import * as S from "./styles";

const LeftContentBlock = ({ icon, title, content, button }) => {
  const { t } = useTranslation();

  return (
    <S.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <SvgIcon src={icon} className="about-block-image" />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <S.Title>{t(title)}</S.Title>
              <S.Content>{t(content)}</S.Content>
              <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button key={id} color={item.color} width="true">
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LeftContentBlock>
  );
};

export default LeftContentBlock;

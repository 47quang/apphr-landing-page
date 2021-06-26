import React, { useState } from "react";
import Container from "../../common/Container";
import * as S from "./styles";
import { Row, Col } from "antd";
import PngIcon from "../../common/PngIcon";
import { useTranslation } from "react-i18next";

const card = [
  {
    title: "roll_up_mobile",
    content: "roll_up_mobile_content",
    src: "mobile.png",
  },
  {
    title: "roll_call_management",
    content: "roll_call_manage_content",
    src: "roll-up.png",
  },
  {
    title: "request_management",
    content: "request_manage_content",
    src: "request.png",
  },
  {
    title: "employee_management",
    content: "employee_manage_content",
    src: "employee.png",
  },

  {
    title: "contract_management",
    content: "contract_manage_content",
    src: "contract.png",
  },
  {
    title: "notification_management",
    content: "notification_content",
    src: "notification.png",
  },
];

const Introduction = () => {
  const [state, setState] = useState(0);
  const { t } = useTranslation();

  const handleChange = (index) => {
    setState(index);
  };

  return (
    <Container style={{ overflow: "visible" }}>
      <Row>
        <Col span={12}>
          {card.map((val, index) => {
            const { title, content } = val;
            return (
              <Row key={title}>
                <S.Card
                  className={index === state ? "active" : null}
                  onClick={() => handleChange(index)}
                >
                  <S.CardTitle>{t(title)}</S.CardTitle>
                  <S.CardContent>{t(content)}</S.CardContent>
                </S.Card>
              </Row>
            );
          })}
        </Col>
        <Col span={12} style={{ display: "flex", alignItems: "center" }}>
          <PngIcon src={card[state].src} style={{ width: 820 + "px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;

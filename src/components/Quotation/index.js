import React from "react";
import * as S from "./styles";
import { Col, Row } from "antd";
import Button from "../../common/Button";
import { useTranslation } from "react-i18next";
import { openSignUpPopUp } from "../modal/sign_up/SignUp";

const detailQuotation = [
  {
    title: "Silver",
    price: "1.299.000 đ",
    color: {
      textColor: "",
      priceColor: "",
      btnColor: "",
      bgColor: "",
    },
    amount: 15,
  },
  {
    title: "Gold",
    price: "2.299.000 đ",
    color: {
      textColor: "",
      priceColor: "",
      btnColor: "",
      bgColor: "",
    },
    amount: 25,
  },
  {
    title: "Platinum",
    price: "3.299.000 đ",
    color: {
      textColor: "",
      priceColor: "#FF5858",
      btnColor: "#FF5858",
      bgColor: "#6DF8BE",
    },
    amount: 45,
  },
  {
    title: "Diamond",
    price: "4.299.000 đ",
    color: {
      textColor: "",
      priceColor: "#EDBC3E",
      btnColor: "white",
      bgColor: "#647BD1",
    },
    amount: 100,
  },
];

const Card = ({ title, price, color, amount }) => {
  const { t } = useTranslation();
  const translateQuotation = (amount) => {
    const rawMessage = t("quotation_description");

    return rawMessage.replace("{0}", amount);
  };
  return (
    <S.CardContainer {...color}>
      <S.CardTitle {...color}>{title}</S.CardTitle>
      <S.CardPrice {...color}>{price}</S.CardPrice>
      <S.CardPerMonth {...color}>{t("per month")}</S.CardPerMonth>
      <S.CardDescription {...color}>
        {translateQuotation(amount)}
      </S.CardDescription>
      <S.CardButton {...color}>
        <Button
          style={{
            backgroundColor: (color && color.btnColor) || "#647BD1",
            color: color && color.btnColor ? "black" : "white",
          }}
          onClick={() => {
            openSignUpPopUp(true);
          }}
        >
          {t("Buy now")}
        </Button>
      </S.CardButton>
    </S.CardContainer>
  );
};

const Quotation = () => {
  return (
    <S.Layout>
      <S.Container>
        <Row gutter={40}>
          {detailQuotation.map((q, index) => {
            const { title, price, amount, color } = q;
            return (
              <Col key={index} xs={24} sm={24} md={12} lg={12} xl={6}>
                <Card
                  title={title}
                  price={price}
                  amount={amount}
                  color={color}
                ></Card>
              </Col>
            );
          })}
        </Row>
      </S.Container>
    </S.Layout>
  );
};

export default Quotation;

import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../common/Container";
import ScrollToTop from "../common/ScrollToTop";
import ContactForm from "../components/ContactForm";
import ContentBlock from "../components/ContentBlock";
import HeaderOnPage from "../components/HeaderOnPage";
import MiddleBlock from "../components/MiddleBlock";
import { openSignUpPopUp } from "../components/modal/sign_up/SignUp";
import Quotation from "../components/Quotation";
import Introduction from "../content/introduction.json";
import SecondBlock from "../content/secondBlock.json";
import ThirdBlock from "../content/thirdBlock.json";

const HomePage = () => {
  const { t } = useTranslation();
  const menu = ["Introduction", "Service", "Quotation", "Contact"];
  return (
    <>
      <Container>
        <ScrollToTop />
        <HeaderOnPage menu={menu}></HeaderOnPage>
        <ContentBlock
          id="Introduction"
          type="right"
          first="true"
          title={Introduction.title}
          content={Introduction.text}
          button={Introduction.button}
          onClickButton={[
            () => {
              openSignUpPopUp(true);
            },
          ]}
          icon="designer_1.svg"
        />
        <MiddleBlock id="Service" title={t("Service")} />
        <ContentBlock
          type="right"
          mt="2"
          title={SecondBlock.title}
          content={SecondBlock.text}
          icon="mobile_login.svg"
        />
        <ContentBlock
          type="left"
          content={ThirdBlock.text}
          button={ThirdBlock.button}
          onClickButton={[
            () => {
              window.location.href = "hr-module";
            },
          ]}
          icon="data.svg"
        />
        {/* <ContentBlock
          type="left"
          mt="10"
          title={FourthBlock.title}
          content={FourthBlock.text}
          button={FourthBlock.button}
          icon="training.svg"
        /> */}
        <MiddleBlock id="Quotation" title={t("Quotation")} />
        <Quotation />
      </Container>
      {/* <MiddleBlock id="Customer" title={t('Customer')} />
      <Customer/> */}
      <MiddleBlock id="Contact" title={t("Contact")} />
      <ContactForm />
    </>
  );
};

export default HomePage;

import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Container from "../../common/Container";
import SvgIcon from "../../common/SvgIcon";
import "../../components/modal/sign_up/style.css";
import { BASE_URL } from "../../constants/key";
import { ActivatePageContainer } from "./ActivatePageStyle";
import "./styles.css";

const ActivatePage = (props) => {
  const queryParams = new URLSearchParams(useLocation().search);
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [linkToHomePage, setLinkToHomePage] = useState("");
  const [companyInfo, setCompanyInfo] = useState({});
  useEffect(() => {
    async function getByTenantCode() {
      const response = await fetch(
        `${BASE_URL}/api.tenant/verify?token=${queryParams.get("token")}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.json();
    }
    getByTenantCode()
      .then((response) => {
        if (response?.message) {
          let errMessage = "";
          switch (response.message.en) {
            case "jwt malformed":
            case "invalid token":
            case "The invalid data or message pattern (undefined/null)":
              errMessage = "invalid_token_active";
              break;
            case "token is expired":
              errMessage = "expired_account_token";
              break;
            default:
              errMessage = "message_unknown_error";
              break;
          }
          setErrorMessage(errMessage);
          setIsActive(false);
        } else {
          const { address, code, email, name, phone, taxCode, username } =
            response.payload;
          setIsActive(true);
          setCompanyInfo({
            address,
            code,
            email,
            name,
            phone,
            taxCode,
            username,
          });
          setLinkToHomePage(`https://${code.toLowerCase()}.apphr.me`);
        }
      })
      .catch((error) => {
        console.debug(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderActiveLayout = () => {
    const getActiveDescription = () => {
      return t("account_active_description").replace("{0}", companyInfo.name);
    };
    return (
      <Row justify="center" align="middle">
        <Col>
          <SvgIcon src={"active_success.svg"} className="about-block-image" />
        </Col>
        <Col>
          <h3 className="text-success b">{t("account_active")}</h3>
          <p>{getActiveDescription()}</p>
          <a href={linkToHomePage} className="button register section padding">
            {t("go_to_login_page")}
          </a>
        </Col>
      </Row>
    );
  };
  const renderInActiveLayout = () => {
    return (
      <Row justify="center" align="middle">
        <Col>
          <SvgIcon src={"inactive.svg"} className="about-block-image" />
        </Col>
        <Col>
          <h3 className="text-danger b">{t("account_inactive")}</h3>
          <p>{t(errorMessage)}</p>
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

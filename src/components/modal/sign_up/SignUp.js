import { Col, Row } from "antd";
import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { ModalContainer } from "./SignUpStyle.js";
import "./style.css";
const SIGN_UP_MODAL_ID = "modalSignUp";
export const openSignUpPopUp = (isOpen = false) => {
  let display = "";
  if (isOpen === true) display = "block";
  else {
    display = "none";
  }
  document.getElementById(SIGN_UP_MODAL_ID).style.display = display;
};
const SignUpModal = (props) => {
  const EMPTY_SELECTED = "empty";

  const BASE_URL = "https://apphr.me";
  const { t } = useTranslation();
  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[\d]*$/;
  const emptySignUpForm = {
    name: "",
    code: "",
    email: "",
    phone: "",
    taxCode: "",
    provinceId: 0,
    districtId: 0,
    wardId: 0,
    address: "",
    note: "",
    username: "",
    password: "",
  };
  const getLabel = (text, isRequired, introduction) => {
    return (
      <label>
        <b>
          <span style={{ color: "red" }}>{isRequired ? "*" : ""}</span> {text}
        </b>
        {introduction && (
          <em className="input-introduction"> ({introduction})</em>
        )}
      </label>
    );
  };
  const signUpInfoSchema = Yup.object().shape({
    name: Yup.string().trim().required("required_enter_company_name"),
    code: Yup.string().trim().required("required_enter_company_short_name"),
    phone: Yup.string()
      .matches(phoneRegex, "enter_valid_phone_number")
      .required("required_enter_phone_number"),
    email: Yup.string()
      .email("enter_valid_email")
      .required("required_enter_email"),
    address: Yup.string().trim().required("required_enter_company_address"),
    taxCode: Yup.string().trim().required("required_enter_tax_code"),
    provinceId: Yup.number().test(
      EMPTY_SELECTED,
      "required_select_province",
      (val) => {
        return val;
      }
    ),
    districtId: Yup.number().test(
      EMPTY_SELECTED,
      "required_select_district",
      (val) => {
        return val;
      }
    ),
    wardId: Yup.number().test(EMPTY_SELECTED, "required_select_ward", (val) => {
      return val;
    }),
    username: Yup.string().trim().required("required_enter_username"),
    password: Yup.string()
      .trim()
      .min(6, "password_length_must_be_greater_than_6")
      .required("required_enter_password"),
  });

  const CommonTextInput = ({
    labelText,
    inputType,
    inputClassName = "",
    placeholder,
    isRequiredField,
    onChange,
    onBlur,
    value,
    isError,
    errorMessage,
    inputID,
    isTouched,
    introduction,
    name,
  }) => {
    const checkInputClassName = () => {
      if (isError) return [inputClassName, "is-invalid"].join(" ");
      else if (isTouched) {
        return [inputClassName, "is-valid"].join(" ");
      } else return inputClassName;
    };
    return (
      <>
        {getLabel(labelText, isRequiredField, introduction)}
        <input
          type={inputType}
          className={checkInputClassName()}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e);
          }}
          onBlur={onBlur}
          value={value}
          id={inputID}
          name={name}
          autoComplete={"off"}
        />
        <div>
          {isError && errorMessage ? (
            <small className={"text-danger"}> {errorMessage}</small>
          ) : (
            <small> </small>
          )}
        </div>
      </>
    );
  };

  const CommonSelectInput = ({
    labelText,
    selectClassName = "",
    isRequiredField,
    onChange,
    onBlur,
    value,
    isError,
    errorMessage,
    inputID,
    placeholder,
    isTouched,
    lstSelectOptions = [],
  }) => {
    const hash = lstSelectOptions.reduce((acc, val) => {
      acc[val.id] = val;
      return acc;
    }, {});
    const checkInputClassName = () => {
      if (isError) return [selectClassName, "is-invalid"].join(" ");
      else if (isTouched) {
        return [selectClassName, "is-valid"].join(" ");
      } else return selectClassName;
    };
    return (
      <>
        {getLabel(labelText, isRequiredField)}
        <select
          className={checkInputClassName() + " select-background"}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          id={inputID}
          name={inputID}
          required={isRequiredField}
        >
          <option value={0}>{placeholder}</option>
          {lstSelectOptions.length > 0 &&
            lstSelectOptions.map((val, index) => (
              <option value={hash[val.id]?.id} key={index}>
                {val.name}
              </option>
            ))}
        </select>
        {isError && errorMessage && (
          <div>
            <small className={"text-danger"}> {errorMessage}</small>
          </div>
        )}
      </>
    );
  };
  const fetchData = async (url = "") => {
    const response = await fetch(url);
    return response.json();
  };
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [locationId, setLocationId] = useState({
    provinceId: 1,
    districtId: 0,
    wardId: 0,
  });
  const signUpFormRef = useRef();
  useEffect(() => {
    fetchData(BASE_URL + "/api.province").then(({ payload }) => {
      setProvinces(payload);
      let provinceId = payload.length === 0 ? 0 : payload[0].id;
      setLocationId((prevState) => ({
        ...prevState,
        provinceId: provinceId,
      }));
      signUpFormRef.current.setFieldValue("provinceId", +provinceId);
    });
  }, []);
  useEffect(() => {
    fetchData(
      BASE_URL + "/api.province/" + locationId.provinceId + "/district"
    ).then(({ payload }) => {
      setDistricts(payload);
      let districtId = payload.length === 0 ? 0 : payload[0].id;
      setLocationId((prevState) => ({
        ...prevState,
        districtId: districtId,
      }));
      signUpFormRef.current.setFieldValue("districtId", +districtId);
    });
  }, [locationId.provinceId]);
  useEffect(() => {
    fetchData(
      BASE_URL + "/api.district/" + locationId.districtId + "/ward"
    ).then(({ payload }) => {
      setWards(payload);
      let wardId = payload.length === 0 ? 0 : payload[0].id;
      setLocationId((prevState) => ({
        ...prevState,
        wardId: wardId,
      }));
      signUpFormRef.current.setFieldValue("wardId", +wardId);
    });
  }, [locationId.districtId]);
  const submitForm = async (value) => {
    const response = await fetch(BASE_URL + "/api.tenant/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    return response.json();
  };
  const closeModal = (e) => {
    openSignUpPopUp(false);
    signUpFormRef.current.handleReset();
    setErrorMessage("");
    setLocationId({ provinceId: 0, districtId: 0, wardId: 0 });
  };
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <ModalContainer id={SIGN_UP_MODAL_ID}>
      <div className="modal-content card-4 animate-zoom col.l3">
        <Row justify="end">
          <br />
          <span
            onClick={closeModal}
            className="button x-large hover-red"
            title="Close Modal"
            role="button"
          >
            &times;
          </span>
        </Row>

        <Row justify="center" align="middle">
          <Col xl={20} lg={24} md={24} sm={24} xs={24}>
            <Formik
              innerRef={signUpFormRef}
              initialValues={emptySignUpForm}
              enableReinitialize
              validationSchema={signUpInfoSchema}
              onSubmit={(value) => {
                submitForm({
                  ...value,
                  provinceId: +value.provinceId,
                  districtId: +value.districtId,
                  wardId: +value.wardId,
                })
                  .then((data) => {
                    if (data.status >= 400) {
                      let err = "";
                      switch (data.message.en) {
                        case "Validation failed: phone must be a valid phone number":
                          err = "enter_valid_phone_number";
                          break;
                        case "Validation failed: email must be an email":
                          err = "enter_valid_email";
                          break;
                        case "tenant is already existed":
                          err = "message_account_existed";
                          break;
                        default:
                          err = "message_unknown_error";
                          break;
                      }
                      console.log(err);
                      setErrorMessage(t(err));
                    } else {
                      closeModal();
                    }
                  })
                  .catch((err) => {
                    setErrorMessage(t("message_unknown_error"));
                  });
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
              }) => (
                <form id="submitForm" className="container">
                  <h1 className={"sign-up-title"}>{t("Sign Up")}</h1>
                  <Row justify="space-between">
                    <Col
                      xl={11}
                      lg={11}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonTextInput
                        value={values.name}
                        onBlur={handleBlur("name")}
                        onChange={handleChange("name")}
                        inputID={"name"}
                        labelText={t("company_name")}
                        inputType={"text"}
                        placeholder={t("enter_company_name")}
                        inputClassName={"input border"}
                        isRequiredField
                        isTouched={touched.name}
                        isError={errors.name && touched.name}
                        errorMessage={t(errors.name)}
                      />
                    </Col>
                    <Col
                      xl={11}
                      lg={11}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonTextInput
                        value={values.code}
                        onBlur={handleBlur("code")}
                        onChange={handleChange("code")}
                        inputID={"code"}
                        labelText={t("company_short_name")}
                        inputType={"text"}
                        placeholder={t("enter_company_short_name")}
                        inputClassName={"input border"}
                        isRequiredField
                        isTouched={touched.code}
                        isError={errors.code && touched.code}
                        errorMessage={t(errors.code)}
                      />
                    </Col>
                  </Row>
                  <Row justify="space-between">
                    <Col
                      xl={11}
                      lg={11}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonTextInput
                        value={values.phone}
                        onBlur={handleBlur("phone")}
                        onChange={handleChange("phone")}
                        inputID={"phone"}
                        labelText={t("phone_number")}
                        inputType={"text"}
                        placeholder={t("enter_phone_number")}
                        inputClassName={"input border"}
                        isRequiredField
                        isTouched={touched.phone}
                        isError={errors.phone && touched.phone}
                        errorMessage={t(errors.phone)}
                      />
                    </Col>
                    <Col
                      xl={11}
                      lg={11}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonTextInput
                        value={values.email}
                        onBlur={handleBlur("email")}
                        onChange={handleChange("email")}
                        inputID={"email"}
                        labelText={t("email")}
                        inputType={"text"}
                        placeholder={t("enter_email")}
                        inputClassName={"input border"}
                        isRequiredField
                        isTouched={touched.email}
                        isError={errors.email && touched.email}
                        errorMessage={t(errors.email)}
                      />
                    </Col>
                  </Row>
                  <Row justify="space-between">
                    <Col
                      xl={11}
                      lg={11}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonTextInput
                        value={values.taxCode}
                        onBlur={handleBlur("taxCode")}
                        onChange={handleChange("taxCode")}
                        inputID={"taxCode"}
                        labelText={t("tax_code")}
                        inputType={"text"}
                        placeholder={t("enter_tax_code")}
                        inputClassName={"input border"}
                        isRequiredField
                        isTouched={touched.taxCode}
                        isError={errors.taxCode && touched.taxCode}
                        errorMessage={t(errors.taxCode)}
                      />
                    </Col>

                    <Col
                      xl={11}
                      lg={11}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonSelectInput
                        value={values.provinceId}
                        onBlur={handleBlur("provinceId")}
                        onChange={(e) => {
                          setLocationId((prevState) => ({
                            ...prevState,
                            provinceId: e.target.value,
                          }));
                          handleChange("provinceId")(e);
                        }}
                        inputID={"provinceId"}
                        labelText={t("province")}
                        selectClassName={"input border"}
                        placeholder={t("select_province")}
                        lstSelectOptions={provinces}
                        isRequiredField
                        isTouched={touched.provinceId}
                        isError={errors.provinceId && touched.provinceId}
                        errorMessage={t(errors.provinceId)}
                      />
                    </Col>
                  </Row>
                  <Row justify="space-between">
                    <Col
                      xl={11}
                      lg={11}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonSelectInput
                        value={values.districtId}
                        onBlur={handleBlur("districtId")}
                        onChange={(e) => {
                          setLocationId((prevState) => ({
                            ...prevState,
                            districtId: e.target.value,
                          }));
                          handleChange("districtId")(e);
                        }}
                        inputID={"districtId"}
                        labelText={t("district")}
                        selectClassName={"input border"}
                        placeholder={t("select_district")}
                        lstSelectOptions={districts}
                        isRequiredField
                        isTouched={touched.districtId}
                        isError={errors.districtId && touched.districtId}
                        errorMessage={t(errors.districtId)}
                      />
                    </Col>
                    <Col
                      xl={11}
                      lg={11}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonSelectInput
                        value={values.wardId}
                        onBlur={handleBlur("wardId")}
                        onChange={(e) => {
                          handleChange("wardId")(e);
                        }}
                        inputID={"wardId"}
                        labelText={t("ward")}
                        selectClassName={"input border"}
                        placeholder={t("select_ward")}
                        lstSelectOptions={wards}
                        isRequiredField
                        isTouched={touched.wardId}
                        isError={errors.wardId && touched.wardId}
                        errorMessage={t(errors.wardId)}
                      />
                    </Col>
                  </Row>
                  <Row justify="space-between">
                    <Col
                      xl={24}
                      lg={24}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonTextInput
                        value={values.address}
                        onBlur={handleBlur("address")}
                        onChange={handleChange("address")}
                        inputID={"address"}
                        labelText={t("company_address")}
                        inputType={"text"}
                        placeholder={t("enter_company_address")}
                        inputClassName={"input border"}
                        isRequiredField
                        isTouched={touched.address}
                        isError={errors.address && touched.address}
                        errorMessage={t(errors.address)}
                      />
                    </Col>
                  </Row>
                  <Row justify="space-between">
                    <Col
                      xl={11}
                      lg={11}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonTextInput
                        value={values.username}
                        onBlur={handleBlur("username")}
                        onChange={handleChange("username")}
                        inputID={"username"}
                        labelText={t("username")}
                        inputType={"text"}
                        placeholder={t("enter_username")}
                        inputClassName={"input border"}
                        isRequiredField
                        isTouched={touched.username}
                        isError={errors.username && touched.username}
                        errorMessage={t(errors.username)}
                      />
                    </Col>

                    <Col
                      xl={11}
                      lg={11}
                      md={24}
                      sm={24}
                      xs={24}
                      className="margin-bottom"
                    >
                      <CommonTextInput
                        value={values.password}
                        onBlur={handleBlur("password")}
                        onChange={handleChange("password")}
                        inputID={"password"}
                        labelText={t("password")}
                        inputType={"password"}
                        placeholder={t("enter_password")}
                        inputClassName={"input border"}
                        isRequiredField
                        introduction={t("intro_password")}
                        isTouched={touched.password}
                        isError={errors.password && touched.password}
                        errorMessage={t(errors.password)}
                      />
                    </Col>
                  </Row>
                  <Row align="middle">
                    <button
                      className="button register section padding"
                      type="button"
                      onClick={handleSubmit}
                    >
                      {t("send")}
                    </button>
                    <label className="error-message text-danger">
                      {errorMessage}
                    </label>
                  </Row>
                </form>
              )}
            </Formik>
          </Col>
        </Row>
      </div>
    </ModalContainer>
  );
};
export default SignUpModal;

import React, { useState } from 'react';
import { Row, Col } from 'antd';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

const CustomInput = (props) => {
  const { t } = useTranslation();

  return (
    <S.InputContainer>
      <S.Input {...props} spellcheck="false" />
      <S.Button>{t('Register')}</S.Button>
    </S.InputContainer>
  );
};

const Contact = ({ id, title, content }) => {
  const [values, setValue] = useState('');

  const handleSubmit = () => {};
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        
        <Row type="flex" justify="center" align="middle">
          <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
            <Col lg={24} md={24} sm={24} xs={24}>
              <CustomInput
                type="text"
                name="email"
                placeholder="Email"
                value={values || ''}
                onChange={handleChange}
              />
            </Col>
          </S.FormGroup>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default Contact;

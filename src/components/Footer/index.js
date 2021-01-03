import React, { Fragment } from 'react';
import { Row, Col, Select } from 'antd';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Container from '../../common/Container';
import * as S from './styles';

const Footer = () => {
  const { Option } = Select;
  const { t } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event);
  };

  return (
    <Fragment>
      <S.Footer>
        <Container>
          <Row type="flex" justify="space-between">
            <Col lg={10} md={10} sm={12} xs={24}>
              <S.Language>{t('Contact')}</S.Language>
              <S.Large to="/">{t('Tell us everything')}</S.Large>
              <S.Para>
                {t(`Do you have any question regarding the project? Fell free to reach out.`)}
              </S.Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <S.Chat>{t(`Let's Chat`)}</S.Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <S.Title>{t('Policy')}</S.Title>
              <S.Large to="/" left="true">
                {t('Application Security')}
              </S.Large>
              <S.Large left="true" to="/">
                {t('Software Principles')}
              </S.Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <S.Empty />
              <S.Large left="true" to="/">
                {t('Support Center')}
              </S.Large>
              <S.Large left="true" to="/">
                {t('Customer Support')}
              </S.Large>
            </Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col lg={10} md={10} sm={12} xs={24}>
              <S.Empty />
              <S.Language>{t('ADDRESS')}</S.Language>
              <S.Para>Rancho Santa Margarita</S.Para>
              <S.Para>2131 Elk Street</S.Para>
              <S.Para>California</S.Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <S.Title>{t('Company')}</S.Title>
              <S.Large left="true" to="/">
                {t('About')}
              </S.Large>
              <S.Large left="true" to="/">
                {t('Blog')}
              </S.Large>
              <S.Large left="true" to="/">
                {t('Press')}
              </S.Large>
              <S.Large left="true" to="/">
                {t('Careers & Culture')}
              </S.Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <S.Select>
                <S.Language>{t('Language')}</S.Language>
                <Select defaultValue="en" onChange={handleChange} value={i18n.language}>
                  <Option value="en">English</Option>
                  <Option value="vi">Tiếng Việt</Option>
                </Select>
              </S.Select>
            </Col>
          </Row>
        </Container>
      </S.Footer>
    </Fragment>
  );
};

export default Footer;

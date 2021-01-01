import React, { useState, Fragment } from 'react';
import { Row, Col, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import PngIcon from '../../common/PngIcon';
import Button from '../../common/Button';
import Container from '../../common/Container';

import * as S from './styles';

const Header = () => {
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
          <S.CustomLink to="/">{t('Home')}</S.CustomLink>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <S.CustomLink to="/">{t('Human Resources')}</S.CustomLink>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <S.CustomLink to="/">{t('Training')}</S.CustomLink>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <S.CustomLink to="/">{t('About')}</S.CustomLink>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall style={{ width: '150px' }}>
          <Link to="/">
            <Button style={{ color: 'black', background: 'white' }}>{t('Sign Up')}</Button>
          </Link>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <Container>
        <S.Container>
          <Row type="flex" justify="space-between" gutter={20}>
            <Col style={{ display: 'flex', alignItems: 'center' }}>
              <S.LogoContainer to="/">
                <PngIcon src="logo.png" style={{ height: 70, alignItems: 'center' }} />
              </S.LogoContainer>
            </Col>
            <S.NotHidden>
              <Col style={{ display: 'flex', alignItems: 'center' }}>
                <MenuItem />
              </Col>
            </S.NotHidden>
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
              <Col stylDrawere={{ marginBottom: '2.5rem' }}>
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
  );
};

export default Header;

import React, { Fragment } from 'react';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

const MenuItem = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <S.CustomNavLinkSmall>
        <S.CustomLink href="#">{t('Introduction')}</S.CustomLink>
      </S.CustomNavLinkSmall>
      <S.CustomNavLinkSmall>
        <S.CustomLink href="#service">{t('Service')}</S.CustomLink>
      </S.CustomNavLinkSmall>
      <S.CustomNavLinkSmall>
        <S.CustomLink href="#quotation">{t('Quotation')}</S.CustomLink>
      </S.CustomNavLinkSmall>
      <S.CustomNavLinkSmall>
        <S.CustomLink href="#customer">{t('Customer')}</S.CustomLink>
      </S.CustomNavLinkSmall>
      <S.CustomNavLinkSmall>
        <S.CustomLink href="#contact">{t('Contact')}</S.CustomLink>
      </S.CustomNavLinkSmall>
    </Fragment>
  );
};

const HeaderOnPage = () => {
  return (
    <S.Container>
      <MenuItem></MenuItem>
    </S.Container>
  );
};

export default HeaderOnPage;

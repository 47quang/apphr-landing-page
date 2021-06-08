import React, { Fragment } from 'react';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

const MenuItem = ({ menu }) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {menu.map((i) => {
        return (
          <S.CustomNavLinkSmall key={i}>
            <S.CustomLink href={`#${i}`}>{t(i)}</S.CustomLink>
          </S.CustomNavLinkSmall>
        );
      })}
    </Fragment>
  );
};

const HeaderOnPage = ({menu}) => {
  return (
    <S.Container>
      <MenuItem menu={menu}></MenuItem>
    </S.Container>
  );
};

export default HeaderOnPage;

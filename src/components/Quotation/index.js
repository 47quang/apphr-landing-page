import React from 'react';
import * as S from './styles';
import { Col, Row } from 'antd';
import Button from '../../common/Button';
import { useTranslation } from 'react-i18next';

const detailQuotation = [
  {
    title: 'Silver',
    price: '1.299.000 đ',
    color: {
      textColor: '',
      priceColor: '',
      btnColor: '',
      bgColor: '',
    },
    description:
      'Bạn có thể sử dụng hệ thống quản lý chấm công với số lượt tạo tài khoản nhân viên lên đến 15 tài khoản',
  },
  {
    title: 'Gold',
    price: '2.299.000 đ',
    color: {
      textColor: '',
      priceColor: '',
      btnColor: '',
      bgColor: '',
    },
    description:
      'Bạn có thể sử dụng hệ thống quản lý chấm công với số lượt tạo tài khoản nhân viên lên đến 25 tài khoản',
  },
  {
    title: 'Platinum',
    price: '3.299.000 đ',
    color: {
      textColor: '',
      priceColor: '#FF5858',
      btnColor: '#FF5858',
      bgColor: '#6DF8BE',
    },
    description:
      'Bạn có thể sử dụng hệ thống quản lý chấm công với số lượt tạo tài khoản nhân viên lên đến 45 tài khoản',
  },
  {
    title: 'Diamond',
    price: '4.299.000 đ',
    color: {
      textColor: '',
      priceColor: '#EDBC3E',
      btnColor: 'white',
      bgColor: '#647BD1',
    },
    description:
      'Bạn có thể sử dụng hệ thống quản lý chấm công với số lượt tạo tài khoản nhân viên lên đến 100 tài khoản',
  },
];

const Card = ({ title, price, description, color }) => {
  const { t } = useTranslation();

  return (
    <S.CardContainer {...color}>
      <S.CardTitle {...color}>{title}</S.CardTitle>
      <S.CardPrice {...color}>{price}</S.CardPrice>
      <S.CardPerMonth {...color}>{t('per month')}</S.CardPerMonth>
      <S.CardDescription {...color}>{description}</S.CardDescription>
      <S.CardButton {...color}>
        <Button
          style={{
            backgroundColor: (color && color.btnColor) || '#647BD1',
            color: color && color.btnColor ? 'black' : 'white',
          }}
        >
          {t('Buy now')}
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
            const { title, price, description, color } = q;
            return (
              <Col key={index} xs={24} sm={24} md={12} lg={12} xl={6}>
                <Card title={title} price={price} description={description} color={color}></Card>
              </Col>
            );
          })}
        </Row>
      </S.Container>
    </S.Layout>
  );
};

export default Quotation;

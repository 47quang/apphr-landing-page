import React, { useState } from 'react';
import Container from '../../common/Container';
import * as S from './styles';
import { Row, Col } from 'antd';
import PngIcon from '../../common/PngIcon';

const card = [
  {
    title: 'Xem các khoa học một cách tường minh',
    content:
      'Hiển thị các khoa học theo dạng lưới giúp người xem dễ hiểu thông tin được truyển tải',
    src: 'tr-1.png',
  },
  {
    title: 'Quản lý khóa học dễ dàng cho người quản lý',
    content:
      'Tích hợp các thao tác xử lý khóa học cũng như thao tác đối với các bài học và bào kiểm tra.',
    src: 'tr-2.png',
  },
];

const Introduction = () => {
  const [state, setState] = useState(0);

  const handleChange = (index) => {
    setState(index);
  };

  return (
    <Container style={{ overflow: 'visible' }}>
      <Row>
        <Col span={12}>
          {card.map((val, index) => {
            const { title, content } = val;
            return (
              <Row>
                <S.Card
                  className={index === state ? 'active' : null}
                  onClick={() => handleChange(index)}
                >
                  <S.CardTitle>{title}</S.CardTitle>
                  <S.CardContent>{content}</S.CardContent>
                </S.Card>
              </Row>
            );
          })}
        </Col>
        <Col span={12} style={{ display: 'flex', alignItems: 'center' }}>
          <PngIcon src={card[state].src}></PngIcon>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;

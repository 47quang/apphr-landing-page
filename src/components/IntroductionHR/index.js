import React, { useState } from "react";
import Container from "../../common/Container";
import * as S from "./styles";
import { Row, Col } from "antd";
import PngIcon from "../../common/PngIcon";

const card = [
  {
    title: "Điểm danh trên ứng dụng di động",
    content: "Dùng thiết bị di động để điểm danh và gửi các đề xuất",
    src: "mobile.png",
  },
  {
    title: "Quản lý điểm danh",
    content:
      "Tổng hợp điểm danh dạng bảng và lịch giúp nhân viên dễ dàng quản lý nguồn dữ liệu",
    src: "roll-up.png",
  },
  {
    title: "Quản lý đề xuất",
    content:
      "Tổng hợp đề xuất của nhân viên thành bảng, dễ dàng cho việc quản lý dữ liệu, hỗ trợ xử lý đề xuất.",
    src: "request.png",
  },
  {
    title: "Quản lý nhân viên",
    content:
      "Quản lý tài khoản người dùng, và thông tin cũng như những hoạt động gần đây của tài khoản",
    src: "employee.png",
  },

  {
    title: "Quản lý hợp đồng",
    content: "Quản lý các hợp đồng đã ký kết với nhân viên",
    src: "contract.png",
  },
  {
    title: "Quản lý thông báo",
    content:
      "Đăng thông báo để cập nhật tình hình doanh nghiệp một cách dễ dàng, nhanh chóng",
    src: "notification.png",
  },
];

const Introduction = () => {
  const [state, setState] = useState(0);

  const handleChange = (index) => {
    setState(index);
  };

  return (
    <Container style={{ overflow: "visible" }}>
      <Row>
        <Col span={12}>
          {card.map((val, index) => {
            const { title, content } = val;
            return (
              <Row key={title}>
                <S.Card
                  className={index === state ? "active" : null}
                  onClick={() => handleChange(index)}
                >
                  <S.CardTitle>{title}</S.CardTitle>
                  <S.CardContent>{content}</S.CardContent>
                </S.Card>
              </Row>
            );
          })}
        </Col>
        <Col span={12} style={{ display: "flex", alignItems: "center" }}>
          <PngIcon src={card[state].src} style={{ width: 820 + "px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;

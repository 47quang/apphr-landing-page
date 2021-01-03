import styled from 'styled-components';

export const Card = styled.div`
  width: 80%;
  margin: 10px 0;
  padding: 25px;
  border-radius: 15px;
  &.active {
    background: #fff;
    -webkit-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
  }
`;

export const CardTitle = styled.div`
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  color: #505f98;
`;

export const CardContent = styled.div`
  margin-top: 15px;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #000000;
`;

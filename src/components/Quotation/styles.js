import styled from "styled-components";
import Button from '../../common/Button';



export const Header = styled.header`
  background-color: #505F98;
`;

export const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  background-color: ${props => props.bgColor || 'white'};
`;

export const CardTitle = styled.div`
  font-weight: 500;
  font-size: 35px;
  line-height: 48px;
  color: ${props => props.textColor || 'black'};
`;

export const CardPrice = styled.div`
  margin-top: 3rem;
  font-weight: 500;
  font-size: 35px;
  line-height: 40px;
  color: ${props => props.priceColor || '#647BD1'};
`;

export const CardPerMonth = styled.div`
  color: ${props => props.priceColor || '#647BD1'};
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
`;

export const CardDescription = styled.div`
  margin-top: 3rem;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  color: ${props => props.textColor || 'black'};
`;

export const CardButton = styled.div`
  margin-top: 2rem;
`;

export const Container = styled.div`
  width: 100%;
`;
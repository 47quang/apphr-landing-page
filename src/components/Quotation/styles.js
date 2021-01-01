import styled from "styled-components";

export const Header = styled.header`
  background-color: #505F98;
`;

export const CardContainer = styled.div`
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem 0;
  text-align: center;
  background-color: ${props => props.bgColor || 'white'};
  -webkit-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
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
  margin: auto;
`;

export const Layout = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 20px;
  background: -webkit-linear-gradient(170deg, white, 50%, #E7ECFF 50%);
  background: -o-linear-gradient(170deg, white, 50%, #E7ECFF 50%);
  background: -moz-linear-gradient(170deg, white, 50%, #E7ECFF 50%);
  background: linear-gradient(170deg, white, 50%, #E7ECFF 50%);
  -webkit-box-shadow: 0px 5px 10px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 10px -5px rgba(0,0,0,0.75);
  box-shadow: 0px 5px 10px -5px rgba(0,0,0,0.75);
  margin-bottom: 10px;
`;
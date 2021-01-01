import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.div`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.3rem;
  color: #ffffff;
  transition: color 0.2s ease-in;
  margin: 0rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const CustomLink = styled.a`
  color: black;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

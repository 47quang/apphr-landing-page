import styled from "styled-components";

export const MiddleBlock = styled.section`
  position: relative;
  padding: 3rem 0 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h6``;

export const Content = styled.p`
`;

export const ContentWrapper = styled.div`
  max-width: 650px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

import styled from "styled-components";

export const RightBlockContainer = styled.section`
  position: relative;
  padding: ${(props) => (props.mt || 0) + "rem " + (props.mr || 0) + "rem " + (props.mb || 0) + "rem " + (props.ml || 0) + "rem"};

  @media only screen and (max-width: 768px) {
    padding: ${(props) => (props.last ? "5rem 0 6rem" : "8rem 0 6rem")};
  }
`;

export const Title = styled.h6``;

export const Content = styled.p`
  margin: rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;

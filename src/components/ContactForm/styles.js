import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 5rem 0;
  background: -webkit-linear-gradient(top, rgb(80, 95, 152, 0.5) 0%,rgb(80, 95, 152, 0.5) 100%), url("img/icons/contact.png") repeat 0 0;`;

export const Contact = styled.section`
  position: relative;
  width: 100%;
  padding: ${(props) => (props.padding ? '8rem 0rem' : '')};
`;

export const IconContainer = styled.div`
  @media only screen and (min-width: 980px) {
    padding: 10rem 7rem;
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  max-width: 520px;
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled.span`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled.div`
  text-align: end;
  position: relative;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const InputContainer = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

export const Input = styled.input`
  width: 80%;
  outline: none;
  border: none;
  font-size: 0.875rem;
  padding: 1rem 1.25rem;
  transition: border-color 0.3s ease-in;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #000;

  &:focus,
  &:hover {
    border-color: rgb(80, 95, 152);
  }

  @media only screen and (max-width: 768px) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 20%;
  border: none;
  padding: 1rem 1.25rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #858FB7;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    scroll-behavior: smooth;
  }

  body {
    background: #282a36;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

interface PropType {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
}

export const Button = styled.button`
  border-radius: 4px;
  background: ${(props: PropType) => (props.primary ? '#ff79c6' : '#FF46B0')};
  white-space: nowrap;
  padding: ${(props: PropType) => (props.big ? '12px 64px' : '10px 20px')};
  color: #282a36;
  font-size: ${(props: PropType) =>
    props.fontBig ? '12px 64px' : '10px 20px'};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${(props: PropType) => (props.primary ? '#FF46B0' : '#ff79c6')};

    @media screen and (max-width: 960px) {
      width: 100%;
    }
  }
`;

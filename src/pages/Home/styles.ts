import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 10px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #menu strong {
    padding-left: 16px;
  }

  > img {
    height: 80px;
  }

  a {
    text-decoration: none;
    color: #ff79c6;
    padding-left: 16px;

    &:hover {
      color: ${shade(0.2, '#ff79c6')};
    }

    #cadastro {
      background: #ff79c6;
      color: #282a36;
      border-radius: 10px;
      padding: 5px 16px;
      transition: background-color 0.2s;

      font-weight: 500;

      &:hover {
        background: ${shade(0.2, '#ff79c6')};
      }
    }
  }
`;

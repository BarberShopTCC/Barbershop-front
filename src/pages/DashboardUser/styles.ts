import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  padding: 1rem 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  img {
    height: 80px;
  }

  button {
    margin-left: auto;

    background: transparent;
    border: 0;
  }

  svg {
    color: #999591;
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #ff79c6;

      &:hover {
        color: ${shade(0.2, '#ff79c6')};
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 17rem;
`;

export const Appointments = styled.div`
  margin-left: 1rem;
  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: ${shade(0.2, '#ff79c6')};
    }
  }
`;

export const HomeMenu = styled.div`
  a {
    text-decoration: none;
    color: #ff79c6;

    &:hover {
      color: ${shade(0.2, '#ff79c6')};
    }
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 18px auto;
`;

export const Teste = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* flex-direction: column;
    align-items: center; */
  }
`;

export const ProvidersListTitle = styled.h1`
  padding: 32px 24px 16px;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #f4ede8;
`;

export const ProvidersList = styled.div`
  padding: 32px 24px 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProviderContainer = styled.div`
  display: flex;
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;

  cursor: pointer;

  svg {
    color: #ff79c6;
    width: 14px;
    height: 14px;
  }

  &:hover {
    background: ${shade(0.2, '#3e3b47')};
  }
`;

export const ProviderAvatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const ProviderInfo = styled.div`
  flex: 1;
  margin-left: 20px;

  h3 {
    color: #ff79c6;
  }
`;

export const ProviderName = styled.h1`
  font-size: 18px;
  color: #f4ede8;
`;

export const ProviderMeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaText = styled.h2`
  margin-left: 8px;
  color: #999591;
`;

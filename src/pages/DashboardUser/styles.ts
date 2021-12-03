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
    margin-left: 1rem;

    color: #999591;
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 768px) {
    /* padding: 0 2rem; */
    margin: 0 1rem;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4rem;

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

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;

interface buguerProps {
  open?: boolean;
}

export const Burguer = styled.div<buguerProps>`
  display: none;
  z-index: 1;
  width: 2rem;
  height: 1.5rem;
  position: fixed;
  top: 15px;
  right: 20px;
  /* display: flex; */
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;

  div {
    /* margin-bottom: 0.25rem; */
    width: 1.75rem;
    height: 0.25rem;
    border-radius: 10px;
    background: ${({ open }) => (open ? '#fff' : '#ff79c6')};
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(40deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-40deg)' : 'rotate(0)')};
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.ul<buguerProps>`
  display: flex;
  list-style: none;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 17rem;

  @media screen and (max-width: 768px) {
    /* display: none; */
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    flex-flow: column nowrap;
    background: #202024;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: center;
    /* justify-content: center; */

    li {
      margin-top: 2rem;
    }
  }
`;

export const Appointments = styled.li`
  margin-left: 2rem;
  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: ${shade(0.2, '#ff79c6')};
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    /* margin-top: 8rem; */
  }
`;

export const HomeMenu = styled.li`
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

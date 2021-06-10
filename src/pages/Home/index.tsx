import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo 2.svg';

import { Container, Header, HeaderContent } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Barbershop" />
          <div id="menu">
            <Link to="/">
              <strong>Home</strong>
            </Link>
            <strong>Serviços</strong>
            <strong>Produtos</strong>
          </div>
          <div>
            <Link to="/signin">
              <strong id="login">Login</strong>
            </Link>

            <Link to="/signup">
              <strong id="cadastro">Cadastrar</strong>
            </Link>
          </div>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Home;

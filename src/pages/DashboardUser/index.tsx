import React, { useCallback, useEffect, useState } from 'react';
import { FiClock, FiCalendar, FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo 2.svg';

import api from '../../services/api';

import {
  Header,
  HeaderContent,
  Profile,
  Container,
  ProvidersListTitle,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  Teste,
  Menu,
  Burguer,
  Appointments,
  HomeMenu,
} from './styles';

interface Provider {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface ProvidersProps {
  onOpenNewAppointmentModal: () => void;
}

const DashboardUser: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const { user, signOut } = useAuth();
  const history = useHistory();

  useEffect(() => {
    api.get('providers').then((response) => {
      setProviders(response.data);
    });
  }, []);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      history.push('/create-appointment', { providerId });
    },
    [history],
  );

  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <HeaderContent>
          <Link to="/">
            <img src={logoImg} alt="Barbershop" />
          </Link>

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <Burguer
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </Burguer>

          <Menu open={open}>
            <HomeMenu
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Link to="/dashboard-user">
                <strong>Home</strong>
              </Link>
            </HomeMenu>

            <Appointments>
              <Link to="/dashboard-appointments">
                <strong>Agendamentos</strong>
              </Link>
            </Appointments>
          </Menu>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Container>
        <ProvidersListTitle>Funcionarios</ProvidersListTitle>
        <Teste>
          {providers
            .filter((email) => email.email.match(/@barbershop.com/))
            .map((provider) => (
              <ProvidersList key={provider.id}>
                <ProviderContainer
                  onClick={() => navigateToCreateAppointment(provider.id)}
                >
                  <ProviderAvatar
                    src={provider.avatar_url}
                    alt={provider.name}
                  />

                  <ProviderInfo>
                    <ProviderName>{provider.name}</ProviderName>

                    <h3>Cabeleireiro</h3>

                    <ProviderMeta>
                      <FiCalendar />
                      <ProviderMetaText>Segunda à Sexta</ProviderMetaText>
                    </ProviderMeta>

                    <ProviderMeta>
                      <FiClock />
                      <ProviderMetaText>8h às 18h</ProviderMetaText>
                    </ProviderMeta>
                  </ProviderInfo>
                </ProviderContainer>
              </ProvidersList>
            ))}
        </Teste>
      </Container>
    </>
  );
};

export default DashboardUser;

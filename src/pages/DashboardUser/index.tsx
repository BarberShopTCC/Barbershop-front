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

  return (
    <>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Barbershop" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Container>
        <ProvidersListTitle>Cabeleireiro</ProvidersListTitle>
        <Teste>
          {providers.map((provider) => (
            <ProvidersList key={provider.id}>
              <ProviderContainer
                onClick={() => navigateToCreateAppointment(provider.id)}
              >
                <ProviderAvatar src={provider.avatar_url} alt={provider.name} />

                <ProviderInfo>
                  <ProviderName>{provider.name}</ProviderName>

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

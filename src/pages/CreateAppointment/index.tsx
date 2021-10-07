import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import * as Yup from 'yup';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { FormHandles } from '@unform/core';
import { format } from 'date-fns';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  Content,
  Provider,
  UserAvatar,
  ProviderName,
  ContainerProvider,
  ProviderAvatar,
  Calendar,
  Title,
  Schedule,
  Section,
  SectionTitle,
  SectionContent,
  Hour,
  HourText,
} from './styles';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface RouteParams {
  providerId: string;
}

interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

interface AvailabilityItem {
  hour: number;
  available: boolean;
}

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

const CreateAppointment: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const location = useLocation<RouteParams>();

  const { user } = useAuth();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);

  const [providers, setProviders] = useState<Provider[]>([]);
  const [availability, setAvailability] = useState<AvailabilityItem[]>([]);
  const [selectedProvider, setSelectedProvider] = useState(
    location.state.providerId,
  );
  const [selectedHour, setSelectedHour] = useState(0);

  useEffect(() => {
    api.get('providers').then((response) => {
      setProviders(response.data);
    });
  }, []);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter((monthDay) => monthDay.available === false)
      .map((monthDay) => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  // *************************
  useEffect(() => {
    api
      .get(`providers/${selectedProvider}/day-availability`, {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      })
      .then((response) => {
        setAvailability(response.data);
      });
  }, [selectedDate, selectedProvider]);

  const morningAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour < 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        };
      });
  }, [availability]);

  const afternoonAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour >= 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        };
      });
  }, [availability]);

  const handleSelectHour = useCallback((hour: number) => {
    setSelectedHour(hour);
  }, []);

  const handleCreateAppointment = useCallback(async () => {
    try {
      const date = new Date(selectedDate);

      date.setHours(selectedHour);
      date.setMinutes(0);

      await api.post('appointments', {
        provider_id: selectedProvider,
        date,
      });

      addToast({
        type: 'success',
        title: 'Agendamento Criado!',
        description: 'Seu agendamento foi criado com sucesso!',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro ao criar agendamento',
        description:
          'Ocorreu um erro ao tentar criar o agendamento, tente novamente.',
      });
    }
  }, [selectedDate, selectedProvider, selectedHour, addToast]);

  return (
    <>
      <Container>
        <Header>
          <Link to="/dashboard-user">
            <FiArrowLeft />
          </Link>

          <HeaderTitle>Cabeleireiros</HeaderTitle>

          <UserAvatar src={user.avatar_url} alt={user.name} />
        </Header>

        <Content>
          <Provider>
            {providers
              .filter((provider) => provider.id === location.state.providerId)
              .map((provider) => (
                <ContainerProvider key={provider.id}>
                  <ProviderAvatar src={provider.avatar_url} alt={user.name} />
                  <ProviderName>{provider.name}</ProviderName>
                </ContainerProvider>
              ))}
          </Provider>

          <Calendar>
            <Title>Escolha a data</Title>
            <DayPicker
              weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
              fromMonth={new Date()}
              disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
              modifiers={{
                available: { daysOfWeek: [1, 2, 3, 4, 5] },
              }}
              onMonthChange={handleMonthChange}
              selectedDays={selectedDate}
              onDayClick={handleDateChange}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
            />
            <Button onClick={handleCreateAppointment}>Agendar</Button>
          </Calendar>

          <Schedule>
            <Title>Escolha o Horário</Title>

            <Section>
              <SectionTitle>Manhã</SectionTitle>

              <SectionContent>
                {morningAvailability.map(
                  ({ hourFormatted, hour, available }) => (
                    <Hour
                      disabled={!available}
                      selected={selectedHour === hour}
                      available={available}
                      key={hourFormatted}
                      onClick={() => handleSelectHour(hour)}
                    >
                      <HourText selected={selectedHour === hour}>
                        {hourFormatted}
                      </HourText>
                    </Hour>
                  ),
                )}
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>Tarde</SectionTitle>

              <SectionContent>
                {afternoonAvailability.map(
                  ({ hourFormatted, hour, available }) => (
                    <Hour
                      disabled={!available}
                      selected={selectedHour === hour}
                      available={available}
                      key={hourFormatted}
                      onClick={() => handleSelectHour(hour)}
                    >
                      <HourText selected={selectedHour === hour}>
                        {hourFormatted}
                      </HourText>
                    </Hour>
                  ),
                )}
              </SectionContent>
            </Section>
          </Schedule>
        </Content>
      </Container>
    </>
  );
};

export default CreateAppointment;

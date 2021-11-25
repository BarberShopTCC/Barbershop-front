import styled from 'styled-components';
import { shade } from 'polished';
import { IoIosArrowDown } from 'react-icons/io';
import arrow from './../../assets/arrow-down.svg';

interface PropTypeOC {
  active?: boolean;
}

interface HourProps {
  available: boolean;
  selected: boolean;
}

interface HourTextProps {
  selected: boolean;
}

export const Container = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  padding: 24px;
  padding-top: 24px;
  background: #28262e;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    color: #999591;
    width: 35px;
    height: 35px;
  }
`;

export const HeaderTitle = styled.h1`
  color: #f5ede8;
  font-size: 32px;
  margin-left: 16px;
`;

export const UserAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Provider = styled.div`
  margin: 24px 0;
`;

export const ProviderName = styled.h1`
  margin-top: 16px;
  font-size: 24px;
  color: #ff79c6;
`;

export const ContainerProvider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProviderAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const Service = styled.div`
  margin-left: 2.5rem;
  margin-top: 1rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const Selected = styled.div`
  padding: 12px 24px;
  cursor: pointer;

  background: #28262e;
  color: #f5f6fa;

  border-radius: 8px;
  margin-bottom: 0.5rem;
  position: relative;
  order: 0;

  ::after {
    content: '';
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    transform: ${(props: PropTypeOC) =>
      props.active ? 'rotateX(180deg)' : 'none'};
    position: absolute;
    height: 100%;
    width: 32px;
    right: 10px;
    top: ${(props: PropTypeOC) => (props.active ? '-6px' : '5px')};

    transition: all 0.4s;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  width: 400px;

  flex-direction: column;

  label {
    cursor: pointer;
  }

  input {
    display: none;
  }

  @media screen and (max-width: 768px) {
    margin-right: 3rem;
  }
`;

export const OptionsContainer = styled.div`
  order: 1;
  background: #28262e;
  color: #f5f6fa;

  max-height: ${(props: PropTypeOC) => (props.active ? '240px' : '0')};
  width: 100%;
  opacity: ${(props: PropTypeOC) => (props.active ? '1' : '0')};
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  overflow-y: ${(props: PropTypeOC) => (props.active ? 'scroll' : 'none')};

  ::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 8px 8px 0;
  }

  ::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 0 8px 8px 0;
  }
`;

export const Option = styled.div`
  padding: 12px 24px;
  cursor: pointer;

  :hover {
    background: #414b57;
  }
`;

export const Calendar = styled.div`
  margin: 0 auto;
  width: 380px;

  .DayPicker {
    background: #28262e;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff79c6 !important;
    border-radius: 10px;
    color: #44475a !important;
  }
`;

export const Title = styled.h1`
  color: #f4ede8;
  font-size: 24px;
  margin: 18px;
`;

export const Schedule = styled.div`
  padding: 24px 0 16px;
`;
export const Section = styled.div`
  margin-bottom: 24px;
`;
export const SectionTitle = styled.h1`
  font-size: 18px;
  color: #999591;
  margin: 0 24px 12px;
`;
export const SectionContent = styled.div`
  padding-left: 24px;
  display: flex;
  flex-direction: row;
`;
export const Hour = styled.button<HourProps>`
  padding: 12px;
  background: ${(props) => (props.selected ? '#ff79c6' : '#3e3b47')};
  border-radius: 10px;
  margin-right: 8px;
  border: 0;

  opacity: ${(props) => (props.available ? 1 : 0.3)};
`;
export const HourText = styled.span<HourTextProps>`
  color: ${(props) => (props.selected ? '#232129' : '#f4ede8')};
  font-size: 18px;
`;

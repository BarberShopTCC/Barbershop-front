import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 1rem 0;
  background: #28262e;

  img {
    height: 80px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
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
    padding: 0 2rem;
    margin: 0 1rem;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
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
  align-items: center;

  list-style: none;
  flex-flow: row nowrap;
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
    color: #ff79c6;

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
    color: #fff;

    &:hover {
      color: ${shade(0.2, '#ff79c6')};
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #ff79c6;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff79c6;
      margin: 0 8px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
    margin-left: 4rem;

    text-align: center;
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background: #ff79c6;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff79c6;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #f4ede8;
    width: 70px;

    svg {
      color: #ff79c6;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Calendar = styled.aside`
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

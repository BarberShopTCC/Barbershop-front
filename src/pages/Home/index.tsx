import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../styles/global';

import logoImg from '../../assets/logo 2.svg';

// import HomePage from '../../components/HomePage';
import Footer from '../../components/Footer';

import { homeObjThree, homeObjFour } from '../../components/HomePage/data';
import InfoSection from '../../components/InfoSection';
import Pricing from '../../components/Pricing';

import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  HomePage,
} from './styles';

const Home: React.FC = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = () => setClick(!click);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavContainer>
            <NavLogo href="#">
              <img src={logoImg} alt="Barbershop Logo" />
              {/* <NavIcon /> */}
              {/* Barbershop */}
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks href="#">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks href="#service">Serviços</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#sobre">Sobre</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink href="/signin">
                    <Button primary>ENTRAR</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink href="/signup">
                    <Button fontBig primary>
                      ENTRAR
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavContainer>
        </Nav>
        <HomePage>
          <div id="home">
            <InfoSection {...homeObjThree} />
          </div>
          <div id="service">
            <Pricing />
          </div>
          <div id="sobre">
            <InfoSection {...homeObjFour} />
          </div>
        </HomePage>
        <Footer />
      </IconContext.Provider>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../styles/global';
// import { Link } from 'react-router-dom';

// import logoImg from '../../assets/logo 2.svg';

import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
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
            <NavLogo to="/">
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">Serviços</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">Produtos</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/signin">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/signup">
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Home;

import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';

import { Button } from '../../styles/global';

import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLinks,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './styles';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Junte-se à nossa assinatura exclusiva para receber as últimas
            notícias e tendências
          </FooterSubHeading>
          {/* <FooterSubText>
            Você pode cancelar sua inscrição a qualquer momento.
          </FooterSubText> */}
          <Form>
            <FormInput name="email" type="email" placeholder="Seu email" />
            <Button fontBig>Subscribe</Button>
          </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Sobre Nós</FooterLinksTitle>
              <FooterLinks to="/">Serviços</FooterLinks>
              <FooterLinks to="/">Unidades</FooterLinks>
              <FooterLinks to="/">Equipe</FooterLinks>
              <FooterLinks to="/">Termos de Serviços</FooterLinks>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Contato</FooterLinksTitle>
              <FooterLinks to="/">Email</FooterLinks>
              <FooterLinks to="/">Telefone</FooterLinks>
              <FooterLinks to="/">Blog</FooterLinks>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Social Media</FooterLinksTitle>
              <FooterLinks to="/">Galeria</FooterLinks>
              <FooterLinks to="/">Videos</FooterLinks>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              {/* <SocialIcon /> */}
              Barbershop
            </SocialLogo>
            <WebsiteRights>Barbershop © 2021</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/https://www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
                rel="noopenernoreferrer"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.twiter.com/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Container } from '../../styles/global';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './styles';

interface InfoSectionProps {
  id?: string;
  primary: boolean;
  lightBg: boolean;
  imgStart: string;
  lightTopLine: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  buttonLabel: string;
  description: string;
  headline: string;
  topLine: string;
  start: string;
  img: string;
  alt: string;
}

const InfoSection = ({
  id,
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  topLine,
  start,
  img,
  alt,
}: InfoSectionProps) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/signup">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;

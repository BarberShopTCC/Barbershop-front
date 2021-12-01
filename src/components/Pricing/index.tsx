import React from 'react';
import { GiBeard } from 'react-icons/gi';
import { IoMdHand } from 'react-icons/io';
import { IoCut } from 'react-icons/io5';
import { Button } from '../../styles/global';
import { IconContext } from 'react-icons/lib';

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from './styles';

const Pricing = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '#a9b3c1', size: '64' }}>
        <PricingSection>
          <PricingWrapper>
            <PricingHeading>Nossos Serviços</PricingHeading>
            <PricingContainer>
              <PricingCard to="/signup">
                <PricingCardInfo>
                  <PricingCardIcon>
                    <IoCut />
                  </PricingCardIcon>
                  <PricingCardPlan>CABELO</PricingCardPlan>
                  <PricingCardCost>R$ 70</PricingCardCost>
                  <PricingCardLength>por corte</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>Cabelo + Barba</PricingCardFeature>
                    <PricingCardFeature>R$ 110</PricingCardFeature>
                    <PricingCardFeature>1h</PricingCardFeature>
                  </PricingCardFeatures>
                  <Button primary>Escolher Plano</Button>
                </PricingCardInfo>
              </PricingCard>
              <PricingCard to="/signup">
                <PricingCardInfo>
                  <PricingCardIcon>
                    <GiBeard />
                  </PricingCardIcon>
                  <PricingCardPlan>BARBA</PricingCardPlan>
                  <PricingCardCost>R$ 45</PricingCardCost>
                  <PricingCardLength>completa</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>Barboterapia</PricingCardFeature>
                    <PricingCardFeature>R$ 65</PricingCardFeature>
                    <PricingCardFeature>45min</PricingCardFeature>
                  </PricingCardFeatures>
                  <Button primary>Escolher Plano</Button>
                </PricingCardInfo>
              </PricingCard>
              <PricingCard to="/signup">
                <PricingCardInfo>
                  <PricingCardIcon>
                    <IoMdHand />
                  </PricingCardIcon>
                  <PricingCardPlan>MANICURE</PricingCardPlan>
                  <PricingCardCost>R$ 35</PricingCardCost>
                  <PricingCardLength>unhas</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>Mão + Pé</PricingCardFeature>
                    <PricingCardFeature>R$ 65</PricingCardFeature>
                    <PricingCardFeature>1h 15min</PricingCardFeature>
                  </PricingCardFeatures>
                  <Button primary>Escolher Plano</Button>
                </PricingCardInfo>
              </PricingCard>
            </PricingContainer>
          </PricingWrapper>
        </PricingSection>
      </IconContext.Provider>
    </>
  );
};

export default Pricing;

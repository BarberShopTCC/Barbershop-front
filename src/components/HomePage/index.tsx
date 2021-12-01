import React from 'react';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data';
import InfoSection from '../../components/InfoSection';
import Pricing from '../../components/Pricing';

const Home = () => {
  return (
    <>
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <InfoSection id="home" {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;

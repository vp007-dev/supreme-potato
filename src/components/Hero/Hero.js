import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome! <br/>
        My Name is Vansh(Vp007)
      </SectionTitle>
      <SectionText>
        i am Software developer and i know machine learning(AI), web developer and UX/UI designer and Database Management
      </SectionText>
      <Button onClick={() => window.location = "https://github.com/vp007-dev"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;

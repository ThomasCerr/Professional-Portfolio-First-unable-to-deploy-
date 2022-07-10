import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section id= "about" row nopadding>
<LeftSection>
  <SectionTitle main center>
    Welcome To <br />
    My Personal Portfolio
  </SectionTitle>
  <SectionText>
  My name is Thomas Cerreto and I am currently a Data Analyst for a top insurance company in Richmond, Genworth
        Financial. I have a heavy background in statistics, analytics, finance, with tuned skills in Microsoft Excel VBA
        and SQL. My ultimate goal is to incorprate my technical developer skills into a new role.
  </SectionText>
  <Button href="mailto:thomasc2@vt.edu">Learn More </Button>
</LeftSection>

 </Section>
);

export default Hero;
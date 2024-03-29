import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LinkItem } from '../Footer/FooterStyles';
import { LeftSection, LearnMoreText } from './HeroStyles';

const Hero = (props) => (
 <Section id= "about" row nopadding>
<LeftSection>
  <SectionTitle main center>
    Welcome To <br />
    My Personal Portfolio
  </SectionTitle>
  <SectionText>
  My name is Thomas Cerreto and I am currently a Data Analyst for a top insurance company in Richmond, Genworth
        Financial. I have a heavy background in statistics, analytics, and finance. Recently earned a certificate 
        in full stack web development from the University of Richmond, with skills in HTML5/CSS3, JavaScript, Node.js, 
        Express.js, React.js, and responsive web design.
  </SectionText>
  <Button>
    <LinkItem  href="mailto:thomasc2@vt.edu">
      <LearnMoreText>Learn More</LearnMoreText>
      </LinkItem>
     </Button>
</LeftSection>

 </Section>
);

export default Hero;
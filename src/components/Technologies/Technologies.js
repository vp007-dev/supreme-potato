import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython, DiDotnet, DiDocker, DiCisco, DiCode, DiLinux} from 'react-icons/di';
import { MdOutlineSecurity } from "react-icons/md";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="Tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've Worked with a range of techonologies in AI(Artificial Intelligence) Its a FUTURE!
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experienced With <br />
            Python.py
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDotnet size="3rem"/>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experienced With <br />
            Javascript(Game Development)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCisco size="3rem"/>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experienced With <br />
            AI(Artificial Intelligence)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem"/>
        <ListContainer>
          <ListTitle>Server management</ListTitle>
          <ListParagraph>
            Experienced With <br />
            Docker, php, sql
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLinux size="3rem"/>
        <ListContainer>
          <ListTitle>Security</ListTitle>
          <ListParagraph>
            Experienced With <br />
            Ethical hacking
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experienced With <br />
            Figma, and Modern looking apps!
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

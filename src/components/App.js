import React from 'react';
import styled from 'styled-components';
import '../index.css';
import { motion } from 'framer-motion';
import {
  mainVariant,
  Variant,
  ItemVariant,
  TitleVariant,
  ContentVariant,
} from '../utils/motionObj';
import { WaveSVG } from './SVGbackground';
import { FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
const PageContainer = styled(motion.main).attrs({
  className: 'App',
})`
  background: var(--color1);
  position: relative;

  & > svg {
    display: block;
  }
`;

const TextContainer = styled(motion.div)`
  padding-top: 50px;
  background: transparent;
  width: 100%;
  height: 50vh;
  padding-left: 5%;
`;

const Title = styled(motion.h1)`
  font-family: var(--font-header);
  font-size: 5.2rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Content = styled(motion.p)`
  font-family: var(--font-body);
  font-weight: 500;
  width: 53%;
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 2rem;
`;

const Item = styled(motion.li)`
  font-size: 1.3rem;
  font-family: var(--font-body);
  margin: 10px;
  display: flex;
  flex-direction: row;
  width: fit-content;
  & > svg {
    margin-right: 20px;
    fill: #dbd8e3;
  }
`;

function App() {
  return (
    <PageContainer>
      <TextContainer variants={mainVariant} initial="hidden" animate="visible">
        <Title variants={TitleVariant}>Olaoluwa Mustapha</Title>
        <Content variants={ContentVariant}>
          A 16 year old who loves programming and everything tech. I am a Front
          end developer with 3+ years of experience. I love to program and
          create for the web, but I am also intrigued by the tech outside the
          browser environment. Here are some of the technologies I use:
        </Content>
        <motion.ul
          style={{ listStyle: 'none', marginTop: '0' }}
          variants={Variant}
          initial="hidden"
          animate="visible">
          <Item variants={ItemVariant}>
            <FaHtml5 />
            HTML
          </Item>
          <Item variants={ItemVariant}>
            <FaCss3 />
            CSS
          </Item>
          <Item variants={ItemVariant}>
            <FaJs />
            JavaScript
          </Item>
          <Item variants={ItemVariant}>
            <FaReact />
            React
          </Item>
        </motion.ul>
        <Content style={{ marginBottom: '0' }} variants={ContentVariant}>
          I am currently available and look forward to working with you
          remotely.
        </Content>
      </TextContainer>
      <WaveSVG color="#fff" />
    </PageContainer>
  );
}

export default App;

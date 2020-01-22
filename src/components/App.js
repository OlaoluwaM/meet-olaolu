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
import Particles from 'react-particles-js';
import { params } from '../utils/parameters';
import { FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';

const PageContainer = styled(motion.main).attrs({
  className: 'App',
})`
  background: #000;
  width: 100%;
  height: 100vh;
  position: relative;

  & > div:first-of-type {
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled(motion.div)`
  background: transparent;
  width: 90%;
  z-index: 10;
  height: fit-content;
  padding-left: 0%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled(motion.h1)`
  font-family: var(--font-header);
  font-size: 7.2rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1rem;
  width: auto;
`;

const Content = styled(motion.p)`
  font-family: var(--font-body);
  font-weight: 500;
  width: 56%;
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 2rem;
`;

const List = styled(motion.ul)`
  list-style: none;
  margin-top: 0;
  display: flex;
  align-items: center;
`;

const Item = styled(motion.li)`
  font-size: 1.3rem;
  font-family: var(--font-body);
  margin: 10px;
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin-right: 20px;

  & > svg {
    margin-right: 5px;
    fill: #dbd8e3;
  }
`;

function App() {
  return (
    <PageContainer>
      <Particles params={params} />
      <TextContainer variants={mainVariant} initial="hidden" animate="visible">
        <Title variants={TitleVariant}>Olaoluwa Mustapha</Title>
        <Content variants={ContentVariant}>
          A 16 year old who loves programming and everything tech. I am a Front
          end developer with 3+ years of experience. I love to program and
          create for the web, but I am also intrigued by the tech outside the
          browser environment. Here are some of the technologies I use:
        </Content>
        <List variants={Variant} initial="hidden" animate="visible">
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
        </List>
        <Content style={{ marginBottom: '0' }} variants={ContentVariant}>
          I am currently available and look forward to working with you
          remotely.
        </Content>
      </TextContainer>
    </PageContainer>
  );
}

export default App;

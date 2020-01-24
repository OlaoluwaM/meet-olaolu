import React from 'react';
import styled from 'styled-components';
import '../index.css';
import { motion } from 'framer-motion';
import {
  mainVariant,
  listVariant,
  itemVariant,
  titleVariant,
  contentVariant,
  socialsVariants,
  linkVariant,
} from '../utils/motionObj';
import Particles from 'react-particles-js';
import { params } from '../utils/parameters';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import TextSVG from './TextSVG';

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

const TextContainer = styled(motion.div).attrs({
  className: 'txt-container',
})`
  background: transparent;
  width: 90%;
  z-index: 10;
  height: fit-content;
  padding-left: 0%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > svg path {
    stroke-width: 6px;
  }
`;

const Title = styled(motion.h1)`
  font-family: var(--font-header);
  font-size: 7rem;
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

const Socials = styled(motion.ul)`
  display: flex;
  margin-top: 0;
  padding: 10px;
  height: 10%;
  width: 17%;
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
  left: 40%;
  transform: translateX(-50%);
  background: #fff;
  list-style: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Link = styled(motion.li)`
  font-family: var(--font-body);
  flex-basis: calc(100% / 2);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #000;
    & > a > svg {
      fill: #fff;
    }
  }
`;

const Anchor = styled(motion.a).attrs({
  rel: 'noreferrer noopener',
  target: '_blank',
})`
  & > svg {
    width: 30px;
    height: 30px;
    fill: #000;
  }
`;

function App() {
  return (
    <PageContainer>
      <Particles params={params} />
      <TextContainer variants={mainVariant} initial="hidden" animate="visible">
        <TextSVG />
        {/* <Title variants={titleVariant}>Olaoluwa Mustapha</Title> */}
        <Content variants={contentVariant}>
          A 16 year old who loves programming and everything tech. I am a Front
          end developer with 3+ years of experience. I love to program and
          create for the web, but I am also intrigued by the tech outside the
          browser environment. Here are some of the technologies I use:
        </Content>
        <List variants={listVariant} initial="hidden" animate="visible">
          <Item variants={itemVariant}>
            <FaHtml5 />
            HTML
          </Item>
          <Item variants={itemVariant}>
            <FaCss3 />
            CSS
          </Item>
          <Item variants={itemVariant}>
            <FaJs />
            JavaScript
          </Item>
          <Item variants={itemVariant}>
            <FaReact />
            React
          </Item>
        </List>
        <Content style={{ marginBottom: '0' }} variants={contentVariant}>
          I am currently available and look forward to working with you.
        </Content>
      </TextContainer>
      <Socials variants={socialsVariants} initial="hidden" animate="visible">
        <Link variants={linkVariant}>
          <Anchor href="https://twitter.com/OlaoluMustapha">
            <FaTwitter />
          </Anchor>
        </Link>
        <Link variants={linkVariant}>
          <Anchor href="https://github.com/OlaoluwaM">
            <FaGithub />
          </Anchor>
        </Link>
      </Socials>
    </PageContainer>
  );
}

export default App;

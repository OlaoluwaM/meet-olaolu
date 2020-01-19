import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../index.css';
import { spring2 } from '../utils/motionObj';

const Title = styled(motion.h1)`
  font-family: var(--font-header);
  font-size: 6rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1.2rem;
`;

const Content = styled(motion.p)`
  font-family: var(--font-body);
  font-weight: 500;
  width: 52%;
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Item = styled(motion.li)`
  list-style-type: square;
  font-size: 1.2rem;
  font-family: var(--font-body);
  margin: 10px;
`;

const mainVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const Variant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    y: -80,
  },
};

const ItemVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring2 },
  },
  hidden: {
    opacity: 0,
    y: -80,
  },
};

const TitleVariant = {
  visible: { opacity: 1, y: 0, transition: { ...spring2 } },
  hidden: { opacity: 0, y: -80 },
};

const ContentVariant = {
  visible: { opacity: 1, y: 0, transition: { ...spring2 } },
  hidden: { opacity: 0, y: -80 },
};

function App() {
  return (
    <motion.main
      className="App"
      variants={mainVariant}
      initial="hidden"
      animate="visible">
      <Title variants={TitleVariant}>Olaoluwa Mustapha</Title>
      <Content variants={ContentVariant}>
        A 16 year old who loves programming and everything tech. I am a Front
        end developer with 3+ years of experience. I love to program and create
        for the web, but I am also intrigued by the tech outside the browser
        environment. Here are some of the technologies I use:
      </Content>
      <motion.ul
        style={{ marginTop: '0' }}
        variants={Variant}
        initial="hidden"
        animate="visible">
        <Item variants={ItemVariant}>HTML</Item>
        <Item variants={ItemVariant}>CSS</Item>
        <Item variants={ItemVariant}>JavaScript</Item>
        <Item variants={ItemVariant}>React</Item>
      </motion.ul>
    </motion.main>
  );
}

export default App;

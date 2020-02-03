import React from 'react';
import styled from 'styled-components';
import PageContent from './Content';
import { motion } from 'framer-motion';
import Particles from 'react-particles-js';
import { params } from '../utils/parameters';
import '../index.css';

const PageContainer = styled(motion.main).attrs({
  className: 'App',
})`
  background: #000;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & > div:first-of-type {
    width: 100%;
    height: 100%;
    position: absolute;

    & > canvas {
      position: inherit;
    }
  }
`;

function App() {
  return (
    <PageContainer>
      <Particles params={params} />
      <PageContent />
    </PageContainer>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import '../index.css';
import Particles from 'react-particles-js';
import SocialsList from './Socials';
import PageContent from './Content';
import { params } from '../utils/parameters';
import { motion } from 'framer-motion';

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

function App() {
  return (
    <PageContainer>
      <Particles params={params} />
      <PageContent />
      <SocialsList />
    </PageContainer>
  );
}

export default App;

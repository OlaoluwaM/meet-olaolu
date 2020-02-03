import React from 'react';
import styled from 'styled-components';
import TextSVG from './TextSVG';
import SocialsList from './Socials';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import {
  mainVariant,
  listVariant,
  itemVariant,
  contentVariant,
} from '../utils/motionObj';

const TextContainer = styled(motion.div)`
  background: transparent;
  width: 100%;
  height: inherit;
  padding-left: 4.5%;
  padding-top: 0%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > svg {
    width: 55%;
    height: auto;
    left: 0;

    path {
      stroke-width: 8px;
    }
  }

  & > p,
  & > ul:first-of-type {
    min-width: 50%;
    max-width: 55%;
  }

  ${({ theme }) => theme.point1`
      padding-left: 0%;
      text-align: left;
      align-items: center;
      padding-top: 1.8%;

      & > ul:first-of-type {
        margin-bottom: 7%;
      }

      & > svg {
        width: 71%;
        margin-left: -27px;
      }

      & > p, & > ul:first-of-type {
        min-width: 75%;
        max-width: 75%;
      }
      `}

  ${({ theme }) => theme.point3`
      margin-top: -4%;

      & > svg {
        width: 78%;
        margin-left: 13px;
        margin-bottom: 8px;
      }
`}

${({ theme }) => theme.point4`
      & > svg {
        width: 82%;
      }
`}
`;

const Content = styled(motion.p)`
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: -5px;
  margin-bottom: 1rem;
  line-height: 2rem;
  color: rgba(255, 255, 255, 0.7);

  & > strong {
    font-weight: bolder;
    color: rgba(255, 255, 255, 1);
  }

  ${({ theme }) => theme.point1`
    text-align: left;
  `}
`;

const List = styled(motion.ul)`
  list-style: none;
  margin-top: 0;
  padding-inline-start: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3%;
  text-align: left;

  & > li:first-of-type {
    margin-left: -2px;
  }

  ${({ theme }) => theme.point1`
      text-align: left;
  `}
`;

const Item = styled(motion.li)`
  font-size: 1.2rem;
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

  ${({ theme }) => theme.point3`
  margin-right: 9px;
  `}
`;

export default function PageContent() {
  const onResize = () => {
    const obj = document.querySelector('.App > div:last-of-type > svg');
    const clientRect = obj.getBoundingClientRect();
    if (clientRect.top <= 0) {
      document.getElementById('root').classList.add('landscape');
    } else {
      document.getElementById('root').classList.remove('landscape');
    }
  };

  React.useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <TextContainer variants={mainVariant} initial="hidden" animate="visible">
      <TextSVG />
      <Content variants={contentVariant}>
        <strong>I am a Front end developer with 3+ years of experience</strong>,
        who enjoys programming and everything tech. I love to create for the web
        and produce quality work doing so; I am also intrigued by some of the
        technology outside the browser environment.{' '}
        <strong>I am currently available for hire</strong>, here are some of the
        technologies I use:
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
      <SocialsList />
    </TextContainer>
  );
}

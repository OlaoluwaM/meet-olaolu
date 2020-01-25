import React from 'react';
import styled from 'styled-components';
import TextSVG from './TextSVG';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import {
  mainVariant,
  listVariant,
  itemVariant,
  contentVariant,
} from '../utils/motionObj';

const TextContainer = styled(motion.div).attrs({
  className: 'txt-container',
})`
  background: transparent;
  width: 100%;
  z-index: 10;
  height: fit-content;
  padding-left: 0%;
  position: absolute;
  top: 45%;
  left: 55%;
  transform: translate(-50%, -50%);

  & > svg {
    width: 78%;
    height: auto;
  }

  & > svg path {
    stroke-width: 6px;
  }

  & > p,
  & > ul {
    min-width: 60%;
    max-width: 65%;
  }

  ${({ theme }) => theme.point1`
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      top: 48%;
      left: 50%;

      & > ul {
        justify-content: center;
      }

      & > svg {
        width: 100%;
        padding-right: 10px;
      }

      & > p, & > ul {
        min-width: 70%;
        max-width: 90%;
      }
`}

  ${({ theme }) => theme.point2`
      & > svg {
        margin-bottom: 15px;
      }
`}
`;

const Content = styled(motion.p)`
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 2rem;

  ${({ theme }) => theme.point1`
    text-align: center;
  `}
`;

const List = styled(motion.ul)`
  list-style: none;
  margin-top: 0;
  padding-inline-start: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* // padding-inline-start: 40px; */
  ${({ theme }) => theme.point1`
      text-align: center;
  `}
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

  ${({ theme }) => theme.point3`
  margin-right: 9px;
  `}
`;

export default function PageContent() {
  return (
    <TextContainer variants={mainVariant} initial="hidden" animate="visible">
      <TextSVG />
      <Content variants={contentVariant}>
        A 16 year old who loves programming and everything tech. I am a Front
        end developer with 3+ years of experience. I love to program and create
        for the web, but I am also intrigued by the tech outside the browser
        environment. Here are some of the technologies I use:
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
        I am currently available for hire
      </Content>
    </TextContainer>
  );
}

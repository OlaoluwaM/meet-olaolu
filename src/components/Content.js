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
  height: fit-content;
  padding-left: 4.5%;
  padding-top: 3.2%;

  & > svg {
    width: 54%;
    height: auto;

    path {
      stroke-width: 8px;
    }
  }

  & > p,
  & > ul:first-of-type {
    min-width: 53%;
    max-width: 58%;
  }

  ${({ theme }) => theme.point1`
      padding-left: 0%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 1.8%;

      & > ul:first-of-type {
        justify-content: center;
        margin-bottom: 7%;
      }

      & > svg {
        width: 68%;
        padding-right: 10px;
      }

      & > p, & > ul:first-of-type {
        min-width: 70%;
        max-width: 90%;
      }
`}

  ${({ theme }) => theme.point3`
      margin-top: -4%;

      & > svg {
        width: 80%;
        margin-bottom: 25px;
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
  color: rgba(255, 255, 255, 0.7);

  & > strong {
    font-weight: bolder;
    color: rgba(255, 255, 255, 1);
  }

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
  margin-bottom: 3%;

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
        <strong>A 16 year old who loves programming and everything tech</strong>
        .{' '}
        <strong>I am a Front end developer with 3+ years of experience</strong>.
        I love to program and create for the web, but I am also intrigued by the
        tech outside the browser environment.{' '}
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

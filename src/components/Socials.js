import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { socialsVariants, linkVariant } from '../utils/motionObj';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Socials = styled(motion.ul)`
  display: flex;
  margin-top: 0;
  padding: 10px;
  height: 10%;
  min-width: 27%;
  max-width: 35%;
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  list-style: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;


  ${({ theme }) => theme.point1`
      min-width: 35%;
      max-width: 50%;
  `}

  ${({ theme }) => theme.point3`
      min-width: 35%;
      max-width: 50%;

      &  svg {
        transform: scale(.8)
      }
  `}

  ${({ theme }) => theme.point2`
      min-width: 59%;
      max-width: 100%;
  `}
`;

const Link = styled(motion.li)`
  font-family: var(--font-body);
  flex-basis: calc(100% / 3);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: scale(1.1);
`;

const Anchor = styled(motion.a).attrs({
  rel: 'noreferrer noopener',
  target: '_blank',
})`
  width: 100%;
  height: 100%;
  padding: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    fill: #000;
  }

  &:hover {
    background: #000;
    & > svg {
      fill: #fff;
    }
  }
`;

const SVGstyle = {
  width: '32px',
  height: '32px',
};

export default function SocialsList() {
  return (
    <Socials variants={socialsVariants} initial="hidden" animate="visible">
      <Link variants={linkVariant}>
        <Anchor href="https://twitter.com/OlaoluMustapha">
          <FaTwitter style={SVGstyle} />
        </Anchor>
      </Link>
      <Link variants={linkVariant}>
        <Anchor href="https://github.com/OlaoluwaM">
          <FaGithub style={SVGstyle} />
        </Anchor>
      </Link>
      <Link variants={linkVariant}>
        <Anchor href="#">
          <MdEmail style={SVGstyle} />
        </Anchor>
      </Link>
    </Socials>
  );
}

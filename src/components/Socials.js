import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { socialsVariants, linkVariant } from '../utils/motionObj';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Socials = styled(motion.ul)`
  display: flex;
  margin-top: 0;
  height: 10%;
  min-width: 21%;
  max-width: 25%;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  list-style: none;
  border-radius: 10px;
  padding-left: 0;

  ${({ theme }) => theme.point1`
      min-width: 37%;
      max-width: 50%;
  `}

  ${({ theme }) => theme.point3`
      min-width: 55%;
      max-width: 70%;

      &  svg {
        transform: scale(.9)
      }
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

  &:first-of-type {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-of-type {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const Anchor = styled(motion.a).attrs({
  rel: 'noreferrer noopener',
  target: '_blank',
})`
  width: 100%;
  padding: 10px;
  height: 100%;
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
        <Anchor href="mailto:jomeemustapha@gmail.com">
          <MdEmail style={SVGstyle} />
        </Anchor>
      </Link>
    </Socials>
  );
}

import { css } from 'styled-components';

const breakPoints = {
  point1: 1070,
  point2: 630,
  point3: 900,
};

const media = Object.keys(breakPoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakPoints[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;

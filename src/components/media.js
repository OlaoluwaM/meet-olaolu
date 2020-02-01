import { css } from 'styled-components';

const breakPoints = {
  point1: 1210,
  point2: 890,
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

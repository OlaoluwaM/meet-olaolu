import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export function WaveSVG({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={color}
        fill-opacity="1"
        d="M0,288L34.3,277.3C68.6,267,137,245,206,224C274.3,203,343,181,411,192C480,203,549,245,617,240C685.7,235,754,181,823,170.7C891.4,160,960,192,1029,218.7C1097.1,245,1166,267,1234,250.7C1302.9,235,1371,181,1406,154.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
    </svg>
  );
}

WaveSVG.propTypes = {
  color: PropTypes.string,
};
WaveSVG.defaultProps = {
  color: '#352f44',
};

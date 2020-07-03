import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Image = ({ image: { src, alt, name }, className = '' }) => (
  <img
    className={`${className} border-2 rounded-md border-gray-500`}
    src={src}
    alt={alt}
    name={name}
  />
);

Image.propTypes = {
  image: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Image;

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ImageFrame = ({ title, detailedView, imageWrapper }) => (
  <div className="mx-auto w-3/4">
    <div className="px-6 p-2 mt-10 text-2xl text-left">{title}</div>
    <div className="flex">
      <div className="w-5/6 px-6">{detailedView}</div>
      <div className="w-1/6">{imageWrapper}</div>
    </div>
  </div>
);

ImageFrame.propTypes = {
  title: PropTypes.object,
  detailedView: PropTypes.object,
  imageWrapper: PropTypes.object,
};

export default ImageFrame;

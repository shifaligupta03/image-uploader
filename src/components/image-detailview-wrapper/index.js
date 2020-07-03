import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';

const DetailedImageWrapper = ({ image }) => (
  <div className="flex flex-col">
    <Image image={image} className="imageStyle" />
    <span className="mt-5 text-center">
      <a
        className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        href={image.src}
        rel="noopener noreferrer"
        target="_blank"
      >
        DOWNLOAD
      </a>
    </span>
  </div>
);

DetailedImageWrapper.propTypes = {
  image: PropTypes.object,
};

export default DetailedImageWrapper;

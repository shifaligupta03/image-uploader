import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload } from 'react-icons/fa';

const Thumbnail = ({
  className,
  imgSrc,
  onClick = () => {},
  name = '',
  alt = '',
  width = '75',
  height = '75',
  bottomText,
  onDownload,
}) => (
  <>
    <div className={className}>
      <img
        className="w-full min-w-full min-h-full rounded-sm"
        key={name}
        alt={alt}
        title={name}
        width={width}
        height={height}
        src={imgSrc}
        onClick={onClick}
        role="presentation"
      />
    </div>
    {bottomText && <p className="text-xs text-center">{bottomText}</p>}
    <div className="flex absolute right-0 top-0 my-3 mx-3">
      <div className="text-white text-opacity-75 ml-2">
        <button
          onClick={onDownload}
          className="rounded-sm border border-opacity-25 border-black bg-green-500 px-2 pb-1"
          type="button"
        >
          <FaDownload />
        </button>
      </div>
    </div>
  </>
);

Thumbnail.propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bottomText: PropTypes.string,
  onClick: PropTypes.func,
  onDownload: PropTypes.func,
};

export default Thumbnail;

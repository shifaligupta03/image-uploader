import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../thumbnail';

const ThumbnailWrapper = ({
  images,
  selectedImageName,
  onClick = () => {},
  onDownloadClick = () => {},
  showDownloader = false,
}) => images.map((image) => {
  const borderStyle = (selectedImageName === image.name) ? 'border-green-600' : 'border-gray-500';
  return (
    <div key={image.name} className="mb-4 relative">
      <Thumbnail
        className={`${borderStyle} border-2 rounded-md p-1`}
        imgSrc={image.src}
        onClick={() => onClick(image.name)}
        name={image.name}
        alt={image.name}
        onDownload={() => onDownloadClick(image.name)}
        bottomText={`${image.name} (${image.details.width} * ${image.details.height})`}
        isActive={selectedImageName === image.name}
        showDownloader={showDownloader}
      />
    </div>
  );
});

ThumbnailWrapper.propTypes = {
  images: PropTypes.array,
  selectedImageName: PropTypes.string,
  onClick: PropTypes.func,
  onDownloadClick: PropTypes.func,
};

export default ThumbnailWrapper;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UploadInput from '../upload-input/index';
import { getUploadedFileDimensions } from '../../utilities/utility';
import { ACCEPTEDIMAGE, VALIDIMAGETYPES } from '../../constants/constants';

const Uploader = ({
  history, imageUrl, setImageURL, setImages,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const validateImage = (file) => {
    if (!VALIDIMAGETYPES.includes(file.type)) {
      setErrorMessage('Please use a valid Image.');
    }
    return getUploadedFileDimensions(file)
      .then(({
        width, height, url, resizedImages,
      }) => {
        setImageURL(url);
        setImages(resizedImages);
        return (width === ACCEPTEDIMAGE.WIDTH && height === ACCEPTEDIMAGE.HEIGHT);
      })
      .catch(() => {
        setErrorMessage('Please use a valid Image.');
      });
  };

  const checkValidation = (isPass) => ((isPass)
    ? history.push('/image-details')
    : setErrorMessage('Whoops! Please upload a 1024* 1024 Image'));

  const onImageDrag = async (file) => {
    if (file && file.length > 0) {
      const isValidationPass = await validateImage(file[0]);
      checkValidation(isValidationPass);
    }
  };

  const onImageUpload = async (e) => {
    setErrorMessage('');
    if (e.target.files && e.target.files.length > 0) {
      const isValidationPass = await validateImage(e.target.files[0]);
      checkValidation(isValidationPass);
    }
  };

  return (
    <UploadInput
      onImageDrag={onImageDrag}
      onImageUpload={onImageUpload}
      error={errorMessage}
      imageUrl={imageUrl}
    />
  );
};

Uploader.propTypes = {
  history: PropTypes.object,
  imageUrl: PropTypes.string,
  setImageURL: PropTypes.func,
  setImages: PropTypes.func,
};

export default Uploader;

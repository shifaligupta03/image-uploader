import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactCrop from 'react-image-crop';
import { CANVAS2D, CANVAS } from '../../constants/constants';
import 'react-image-crop/dist/ReactCrop.css';
import Button from '../button';

const Cropper = ({
  name,
  src,
  locked,
  onChangeComplete,
  cropSettings,
  setImageURL,
  onUpload,
  uploadButtonState,
}) => {
  let fileURL;
  const imageRef = useRef();
  const [crop, setCrop] = useState(cropSettings);
  const onCropChange = (currentCrop) => {
    setCrop(currentCrop);
  };

  const getCroppedImg = (image, cropInstance, fileName, settings) => {
    const canvas = document.createElement(CANVAS);
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = settings.width;
    canvas.height = settings.height;
    const ctx = canvas.getContext(CANVAS2D);
    ctx.drawImage(
      image,
      cropInstance.x * scaleX,
      cropInstance.y * scaleY,
      cropInstance.width * scaleX,
      cropInstance.height * scaleY,
      0,
      0,
      cropInstance.width,
      cropInstance.height,
    );

    const base64Image = canvas.toDataURL('image/png');

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(fileURL);
        fileURL = window.URL.createObjectURL(blob);
        resolve({
          src: fileURL,
          base64Image,
          name: fileName,
        });
      }, 'image/png');
    });
  };

  const makeClientCrop = async (currentCrop, submit = false) => {
    if (imageRef && currentCrop.width && currentCrop.height) {
      const imageDetails = await getCroppedImg(
        imageRef.current,
        crop,
        name,
        cropSettings,
      );
      onChangeComplete(imageDetails, submit);
    }
  };

  const onCropComplete = (currentCrop) => {
    makeClientCrop(currentCrop);
  };

  const updateFinalImage = () => {
    makeClientCrop(crop, true);
    setImageURL(null);
  };

  return (
    <>
      <ReactCrop
        className="border-2 rounded-md border-gray-500"
        src={src}
        crop={crop}
        locked={locked}
        onImageLoaded={(node) => {
          imageRef.current = node;
        }}
        onChange={onCropChange}
        onComplete={onCropComplete}
      />
      <div className="mt-4 flex">
        <div className="mr-4">
          <Button
            text="CROP"
            onClick={updateFinalImage}
          />
        </div>
        <div>
          <Button
            isLoading={uploadButtonState.isLoading}
            disabled={uploadButtonState.isDisabled}
            text="UPLOAD"
            onClick={onUpload}
          />
        </div>
      </div>
    </>
  );
};

Cropper.propTypes = {
  name: PropTypes.object,
  src: PropTypes.string,
  onChangeComplete: PropTypes.func,
  locked: PropTypes.bool,
  cropSettings: PropTypes.object,
  setImageURL: PropTypes.func,
  onUpload: PropTypes.func,
  uploadButtonState: PropTypes.object,
};

export default Cropper;

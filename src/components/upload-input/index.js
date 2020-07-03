import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DragAndDrop from '../drag-drop';
import './styles.css';

const UploadInput = ({
  onImageDrag,
  onImageUpload,
  error,
  imageName,
  imageUrl,
}) => {
  const fileRef = useRef();
  return (
    <DragAndDrop handleDrop={(e) => onImageDrag(e)}>
      <div className="container">
        <div className="box-border text-center sm:w-full md:w-1/2 h-300 mx-auto md:border-4 border-gray-400 md:border-dashed my-32 py-24 px-8">
          <div className="mb-10 text-gray-800 text-xl">Drop Image file here or click on the button to select image</div>
          <input
            ref={fileRef}
            className="hidden"
            id="imageUpload"
            onChange={(e) => onImageUpload(e, fileRef)}
            type="file"
          />

          <label htmlFor="imageUpload" className="text-xl cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-3 px-5 rounded">
            Choose File
          </label>
          { error && (
          <div className="py-4">
            <small className="text-red-600">{error}</small>
          </div>
          ) }
          { imageUrl && <div className="py-4"><span>{imageName}</span></div> }
        </div>
      </div>
    </DragAndDrop>
  );
};

UploadInput.propTypes = {
  onImageUpload: PropTypes.func,
  onImageDrag: PropTypes.func,
  imageName: PropTypes.string,
  imageUrl: PropTypes.string,
  error: PropTypes.string,
};

export default UploadInput;


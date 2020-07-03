/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './reducer';
import './styles.css';
import Cropper from '../cropper';
import ThumbnailWrapper from '../thumbnail-wrapper';
import ImageFrame from '../image-frame';

const Title = () => 'Click on thumbnail to crop manually';

const ImageName = ({ image }) => `${image.name}_${image.details.width}_${image.details.height}`;

const ImageDetailView = ({
  history,
  error,
  imageUrl,
  setImageURL,
  setCroppedImageDetails,
  uploadImageToCloud,
  imageDetails,
  downloadReady,
  setError,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadImage = (name) => {
    const selectedImage = state.images.filter((image) => image.name === name);
    dispatch({ type: 'setIsLoading' });
    dispatch({
      type: 'setSelectedImage',
      selectedImage: selectedImage[0],
    });
  };

  useEffect(() => {
    if (!imageUrl) history.push('/');
    dispatch({
      type: 'setImageUrl',
      imageUrl,
      selectedImage: state.images[0],
    });
  }, []);

  useEffect(() => {
    if (downloadReady) {
      dispatch({ type: 'setUploadLoading', loading: false });
      dispatch({ type: 'setSelectedImage', selectedImage: imageDetails[0] });
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [downloadReady]);

  useEffect(() => {
    if (error && state.uploadButton.isLoading) dispatch({ type: 'setUploadLoading', loading: false });
  }, [error]);

  const onCropCompleteHandler = (croppedImageData, isSubmitted) => {
    if (isSubmitted) setCroppedImageDetails(state.selectedImage.name, croppedImageData);
  };

  const uploadImage = () => {
    setError('');
    dispatch({ type: 'setUploadLoading', loading: true });
    uploadImageToCloud(imageDetails);
  };

  const downloadImage = (imageName) => {
    const selectedImage = imageDetails.find((image) => image.name === imageName);
    window.open(selectedImage.src, '_blank');
  };

  const CropperImage = () => (
    <Cropper
      name={<ImageName image={state.selectedImage} />}
      setImageURL={setImageURL}
      cropSettings={state.selectedImage.crop}
      locked
      onChangeComplete={onCropCompleteHandler}
      src={state.imageSrcUrl}
      uploadButtonState={state.uploadButton}
      onUpload={uploadImage}
    />
  );

  const DetailedView = () => (
    <div className="image">
      {(
        state.imageSrcUrl && <CropperImage />
      )}
      { error && <div className="text-red-600 mt-2">{error}</div>}
    </div>
  );

  return (
    <>
      { state.imageSrcUrl && (
      <ImageFrame
        title={<Title />}
        detailedView={<DetailedView />}
        imageWrapper={(
          <ThumbnailWrapper
            images={imageDetails}
            selectedImageName={state.selectedImage.name}
            onClick={(imageName) => loadImage(imageName)}
            onDownloadClick={(imageName) => downloadImage(imageName)}
            showDownloader={!!downloadReady}
          />
      )}
      />
      )}
    </>
  );
};

ImageDetailView.propTypes = {
  history: PropTypes.object,
  error: PropTypes.string,
  imageUrl: PropTypes.string,
  setImageURL: PropTypes.func,
  setCroppedImageDetails: PropTypes.func,
  uploadImageToCloud: PropTypes.func,
  setError: PropTypes.func,
  imageDetails: PropTypes.array,
  downloadReady: PropTypes.bool,
};

export default ImageDetailView;

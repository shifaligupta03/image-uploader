import { createReducer } from 'reduxsauce';
import Types from './types';

export const INITIAL_STATE = {
  imageURL: null,
  error: undefined,
  imageDetails: [],
  thumbnails: [],
  downloadReady: false,
};

const updateCroppedImage = (images, imageName, croppedData) => {
  const selectedIndex = images.findIndex((image) => image.name === imageName);
  return images.map((image, index) => {
    if (index !== selectedIndex) {
      return image;
    }
    image.src = croppedData.src;
    return image;
  });
};

export const setImageURL = (state = INITIAL_STATE, { imageURL }) => ({ ...state, imageURL });

export const setImages = (state = INITIAL_STATE, { imageDetails }) => ({ ...state, imageDetails });

export const setCroppedImageDetails = (state = INITIAL_STATE,
  { imageName, croppedData }) => (
  { ...state, imageDetails: updateCroppedImage(state.imageDetails, imageName, croppedData) });

export const setError = (state = INITIAL_STATE, { error }) => ({ ...state, error });

export const setImagesDownloadReady = (state = INITIAL_STATE,
  { downloadReady }) => ({ ...state, downloadReady });

export const HANDLERS = {
  [Types.SET_IMAGE_URL]: setImageURL,
  [Types.SET_IMAGES]: setImages,
  [Types.SET_CROPPED_IMAGE_DETAILS]: setCroppedImageDetails,
  [Types.SET_ERROR]: setError,
  [Types.SET_IMAGES_DOWNLOAD_READY]: setImagesDownloadReady,
};

export default createReducer(INITIAL_STATE, HANDLERS);


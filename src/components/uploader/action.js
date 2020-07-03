import Types from './types';
import { ImageService } from '../../services';

const setImageURL = (imageURL) => ({
  type: Types.SET_IMAGE_URL,
  imageURL,
});

const setImages = (imageDetails) => ({
  type: Types.SET_IMAGES,
  imageDetails,
});

const setError = (error) => ({
  type: Types.SET_ERROR,
  error,
});

const setCroppedImageDetails = (imageName, croppedData) => ({
  type: Types.SET_CROPPED_IMAGE_DETAILS,
  imageName,
  croppedData,
});

const setImagesDownloadReady = (downloadReady) => ({
  type: Types.SET_IMAGES_DOWNLOAD_READY,
  downloadReady,
});

const uploadImageToCloud = (imageDetails) => (dispatch) => {
  const promises = imageDetails.map((imageName) => new Promise((resolve, reject) => {
    ImageService.uploadImage({
      image: imageName.base64Image.split(',')[1],
    })
      .then((response) => {
        imageName.src = response.data.data.link;
        resolve(response.data.data.link);
      })
      .catch((error) => reject(error));
  }));
  Promise.all(promises)
    .then((results) => {
      dispatch(setImagesDownloadReady(true));
    })
    .catch((e) => {
      const message = e.message || 'Something went wrong';
      dispatch(setError(message));
    });
};

export {
  setImageURL,
  setError,
  setCroppedImageDetails,
  uploadImageToCloud,
  setImages,
};

/* eslint-disable import/prefer-default-export */
import baseApi from './baseApi';
import ImageApi from './image-service';

const ImageService = ImageApi(baseApi);

export {
  ImageService,
};

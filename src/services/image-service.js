import { APIURL } from '../constants/api-constants';

const { UPLOAD_IMAGE } = APIURL;

export default (api) => {
  const uploadImage = (params) => api.post(`${UPLOAD_IMAGE}`, params);

  return {
    uploadImage,
  };
};


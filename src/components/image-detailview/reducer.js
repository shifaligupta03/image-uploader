import {
  WIDTH755,
  WIDTH365,
  WIDTH380,
  HEIGHT450,
  HEIGHT212,
  HEIGHT380,
} from '../../constants/constants';

export const initialState = {
  uploadButton: {
    isLoading: false,
    isDisabled: false,
  },
  selectedImage: {
    name: null,
    alt: null,
    cropDetails: {},
  },
  imageSrcUrl: null,
  images: [
    {
      name: 'Horizontal',
      src: null,
      alt: `Crop this Image by width ${WIDTH755} and height ${HEIGHT450}`,
      details: { width: WIDTH755, height: HEIGHT450 },
      crop: {
        width: WIDTH755,
        height: HEIGHT450,
        aspect: WIDTH755 / HEIGHT450,
      },
    },
    {
      name: 'Vertical',
      src: null,
      alt: `Crop this Image by width ${WIDTH365} and height ${HEIGHT450}`,
      details: { width: WIDTH365, height: HEIGHT450 },
      crop: {
        width: WIDTH365,
        height: HEIGHT450,
        aspect: WIDTH365 / HEIGHT450,
      },
    },
    {
      name: 'Small',
      src: null,
      alt: `Crop this Image by width ${WIDTH365} and height ${HEIGHT212}`,
      details: { width: WIDTH365, height: HEIGHT212 },
      crop: {
        width: WIDTH365,
        height: HEIGHT212,
        aspect: WIDTH365 / HEIGHT212,
      },
    },
    {
      name: 'Gallery',
      src: null,
      alt: `Crop this Image by width ${WIDTH380} and height ${HEIGHT380}`,
      details: { width: WIDTH380, height: HEIGHT380 },
      crop: {
        width: WIDTH380,
        height: HEIGHT380,
        aspect: WIDTH380 / HEIGHT380,
      },
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setImageUrl': {
      const images = state.images.map((image) => ({ ...image, src: action.imageUrl }));
      return {
        ...state,
        setIsLoading: false,
        imageSrcUrl: action.imageUrl,
        selectedImage: action.selectedImage,
        images,
      };
    }
    case 'setIsLoading':
      return {
        ...state,
        setIsLoading: true,
      };
    case 'setUploadLoading': {
      const { uploadButton } = state;
      uploadButton.isLoading = action.loading;
      return {
        ...state,
        ...uploadButton,
      };
    }
    case 'enableUpload': {
      const { uploadButton } = state;
      uploadButton.isDisabled = action.length;
      return {
        ...state,
        ...uploadButton,
      };
    }
    case 'setSelectedImage':
      return {
        ...state,
        setIsLoading: false,
        selectedImage: action.selectedImage,
      };
    default:
      return { ...state };
  }
};


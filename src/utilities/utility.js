import { CANVAS2D, CANVAS, IMAGESIZE } from '../constants/constants';

const getImage = (image, { name, alt, details }) => {
  let fileURL;
  const canvas = document.createElement(CANVAS);
  const ctx = canvas.getContext(CANVAS2D);
  const { aspectRatio } = details;
  const thumbnailMaxWidth = details.width;
  const thumbnailMaxHeight = details.height;

  const thumbnailScaleX = image.naturalWidth / image.width;
  const thumbnailScaleY = image.naturalHeight / image.height;
  const thumbnailWidth = thumbnailMaxWidth * thumbnailScaleX;
  const thumbnailHeight = thumbnailMaxHeight * thumbnailScaleY;

  const inputImageAspectRatio = image.width / image.height;

  let outputWidth = image.naturalWidth;
  let outputHeight = image.naturalHeight;
  if (inputImageAspectRatio > aspectRatio) {
    outputWidth = (thumbnailWidth * aspectRatio) * 2;
  } else if (inputImageAspectRatio < aspectRatio) {
    outputHeight = (thumbnailWidth * aspectRatio);
  }

  canvas.width = thumbnailWidth;
  canvas.height = thumbnailHeight;

  ctx.drawImage(
    image,
    0,
    0,
    outputWidth,
    outputHeight,
  );

  const base64Image = canvas.toDataURL('image/png');

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        return;
      }
      blob.name = `${name}`;
      window.URL.revokeObjectURL(fileURL);
      fileURL = window.URL.createObjectURL(blob);
      resolve({
        src: fileURL,
        base64Image,
        name,
        alt,
        details,
      });
    }, 'image/png');
  });
};

const generateImages = (image) => {
  const promises = IMAGESIZE.map((imageSize) => new Promise((resolve, reject) => {
    getImage(image, imageSize)
      .then((images) => {
        resolve(images);
      })
      .catch((error) => reject(error));
  }));

  return Promise.all(promises)
    .then((results) => results);
};

export const getUploadedFileDimensions = (file) => new Promise((resolve, reject) => {
  try {
    const img = new Image();
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      generateImages(img).then((imageData) => resolve({
        width,
        height,
        url: img.src,
        resizedImages: imageData,
      }));
    };
    img.src = window.URL.createObjectURL(file);
  } catch (exception) {
    return reject(exception);
  }
});

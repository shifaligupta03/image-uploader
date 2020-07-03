export const ACCEPTEDIMAGE = {
  WIDTH: 1024,
  HEIGHT: 1024,
};

export const VALIDIMAGETYPES = [
  'image/gif',
  'image/jpeg',
  'image/png',
];

export const WIDTH755 = 755;
export const WIDTH365 = 365;
export const WIDTH380 = 380;
export const HEIGHT450 = 450;
export const HEIGHT212 = 212;
export const HEIGHT380 = 380;
export const CANVAS2D = '2d';
export const CANVAS = 'canvas';

export const IMAGESIZE = [{
  name: 'Horizontal',
  alt: `Crop this Image by width ${WIDTH755} and height ${HEIGHT450}`,
  details: { width: WIDTH755, height: HEIGHT450, aspectRatio: WIDTH755 / HEIGHT450 },
},
{
  name: 'Vertical',
  alt: `Crop this Image by width ${WIDTH365} and height ${HEIGHT450}`,
  details: { width: WIDTH365, height: HEIGHT450, aspectRatio: WIDTH365 / HEIGHT450 },
},
{
  name: 'Small',
  alt: `Crop this Image by width ${WIDTH365} and height ${HEIGHT212}`,
  details: { width: WIDTH365, height: HEIGHT212, aspectRatio: WIDTH365 / HEIGHT212 },
},
{
  name: 'Gallery',
  alt: `Crop this Image by width ${WIDTH380} and height ${HEIGHT380}`,
  details: { width: WIDTH380, height: HEIGHT380, aspectRatio: WIDTH380 / HEIGHT380 },
},

];

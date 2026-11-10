import { localAsset } from './assets';
import { settings } from './settings';

const imagePath = localAsset(settings.resumeImage.path, /\.(png|jpe?g|webp)$/i);

export const resume = {
  pdf: localAsset(settings.resumePath, /\.pdf$/i),
  image: imagePath ? { ...settings.resumeImage, path: imagePath } : undefined,
};

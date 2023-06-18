export const checkImageUrl = (url: string): boolean => {
  if (!url) {
    return false;
  }

  const pattern = new RegExp(
    '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$',
    'i',
  );

  return pattern.test(url);
};

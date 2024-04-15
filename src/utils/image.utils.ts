export const getParametersForUnsplash = ({
  width,
  height,
  quality,
  format,
  crop,
}: {
  width: number;
  height?: number;
  quality: number;
  format: string;
  crop?: boolean;
}) => {
  return `?w=${width}${height ? `&h=${height}` : ""}&q=${quality}&fm=${format}${
    crop ? "&fit=crop" : ""
  }`;
};

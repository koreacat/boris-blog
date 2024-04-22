export const getParametersForUnsplash = ({
  width,
  height,
  quality,
  format,
  crop,
}: {
  width?: number;
  height?: number;
  quality: number;
  format?: string;
  crop?: boolean;
}) => {
  const optionQuery = [
    { key: "w", value: width },
    { key: "h", value: height },
    { key: "q", value: quality },
    { key: "fm", value: format },
  ]
    .map(({ key, value }) => (value ? `${key}=${value}` : ""))
    .filter((el) => el.length)
    .join("&");

  return `?${optionQuery}${crop ? "&fit=crop" : ""}`;
};

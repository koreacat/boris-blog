import { RefObject, useCallback, useEffect, useState } from "react";
import { getParametersForUnsplash } from "../../utils/image.utils";
import { PostDto } from "../../dto/PostDto";

interface Args {
  imageRef: RefObject<HTMLImageElement>;
  post: PostDto;
}
export const useIntersectingImage = ({ imageRef, post }: Args) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const loadIntersectingImage: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((el) => {
        if (!imageRef.current) return;
        if (isImageLoaded) return;
        if (!el.isIntersecting) return;

        imageRef.current.src = `${post.image}${getParametersForUnsplash({
          width: 256,
          height: 256,
          quality: 80,
          format: "webp",
          crop: true,
        })}`;

        setIsImageLoaded(true);
      });
    },
    [imageRef, isImageLoaded, post.image]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(loadIntersectingImage);

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.unobserve(imageRef.current as HTMLImageElement);
  }, [imageRef, loadIntersectingImage]);
};

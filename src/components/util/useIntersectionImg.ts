import { useEffect, useRef } from "react";

const useIntersectionImg = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          if(!target.dataset.src) return;
          target.src = target.dataset.src;
          observer.unobserve(target);
        }
      });
    });

    observer.observe(imgElement);

    return () => observer.disconnect();
  }, []);

  return imgRef;
};

export default useIntersectionImg;
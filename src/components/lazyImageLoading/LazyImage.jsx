import { useEffect, useRef, useState } from "react";
import "./lazy-image.less";

const Skeleton = ({ width, height }) => {
  return (
    <div className="skeleton" style={{ width: width, height: height }}>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImgSrc(src);
        observer.disconnect();
      }
    });
    const imgElement = imgRef.current;
    if (imgElement) {
      observer.observe(imgElement);
    }
    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, [src]);


  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <>
          {" "}
          <Skeleton width="100%" height="100%" />
          <img
            src={imgSrc}
            alt={alt}
            onLoad={handleLoad}
            ref={imgRef}
            className={className}
          />
        </>
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          onLoad={handleLoad}
          ref={imgRef}
          className={className}
        />
      )}
    </>
  );
};

export default LazyImage;

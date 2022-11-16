import { LazyLoadImage } from "react-lazy-load-image-component";

export const LazyLoadingImage = ({ src, alt }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      className="card-img-top border-none"
    />
  );
};

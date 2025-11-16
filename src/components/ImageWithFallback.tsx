import type { ImgHTMLAttributes } from 'react';
import '../styles/ImageWithFallback.css'; 

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'className'> & {
  src: string;
  alt: string;
  objectPosition?: 'left' | 'center';
};

export const ImageWithFallback = ({
  src,
  alt,
  objectPosition = 'center',
  ...props
}: Props) => {
  
  const positionClass =
    objectPosition === 'left' ? 'img-fb-left' : 'img-fb-center';

  return (
    <img
      src={src}
      alt={alt}
      className={`img-fb-base ${positionClass}`}
      {...props}
      onError={(e) => {
        (e.currentTarget.src = "https://via.placeholder.com/400?text=Image+Error");
      }}
    />
  );
};
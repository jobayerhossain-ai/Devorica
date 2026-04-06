interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage = ({
  src,
  alt,
  priority = false,
  sizes,
  className,
  ...props
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...(priority && { fetchPriority: "high" as const })}
      {...(sizes && { sizes })}
      className={className}
      {...props}
    />
  );
};

export default OptimizedImage;

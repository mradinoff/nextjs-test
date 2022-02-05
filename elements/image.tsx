import Image, { ImageLoaderProps } from "next/image";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

export interface ImageFileProps {
  [key: string]: any;
}

export type ImageElemProps = {
  image: ImageFileProps;
  className?: string;
  blur?: boolean;
  contain?: boolean;
};

const ImageContainer = styled("div")`
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  &:before {
    display: block;
    content: "";
    width: 100%;
  }

  &.--landscape {
    &:before {
      padding-top: calc((5 / 8) * 100%);
    }
  }

  &.--square {
    padding-top: 100%;
  }

  & > .e-image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const ImageElem: React.FC<ImageElemProps> = ({
  image,
  className,
  blur,
  contain = false
}) => {
  const { src, alt } = image;
  if (src) {
    return (
      <ImageContainer
        className={`e-image__container${className ? " " + className : ""}`}
      >
        <Image
          className="e-image"
          src={src}
          alt={alt}
          layout="fill"
          objectFit={contain ? "contain" : "cover"}
          blurDataURL={src}
          placeholder={blur ? "blur" : "empty"}
        />
      </ImageContainer>
    );
  } else {
    return <></>;
  }
};

export default ImageElem;

import Image from "next/image";
import styled from "@emotion/styled";

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
  height: 100%;

  &:before {
    display: block;
    content: "";
    width: 100%;
  }

  &.--landscape {
    &:before {
      padding-top: calc((3 / 4) * 100%);
    }
  }

  &.--square {
    padding-top: 100%;
  }

  &.-fill {
    height: 100%;
  }

  &.--portrait {
    padding-top: calc((25 / 16) * 100%);
  }

  & > .e-image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const ImageElem: React.FC<ImageElemProps> = ({ image, className }) => {
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
          objectFit="cover"
          blurDataURL={src}
          placeholder="blur"
        />
      </ImageContainer>
    );
  } else {
    return <></>;
  }
};

export default ImageElem;

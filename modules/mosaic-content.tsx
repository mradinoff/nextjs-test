import styled from "@emotion/styled";
import React, { useState, MouseEvent } from "react";
import Fader from "../elements/fader";
import ImageElem, { ImageFileProps } from "../elements/image";
import Modal from "../elements/modal";
import colors from "../styles/design-tokens/colors";
import variables from "../styles/design-tokens/variables";

type MosiacContentProps = {
  largeMedia: ImageFileProps;
  smallMedia: ImageFileProps[];
  heading: string;
  copy: string;
  subheading?: string;
  boldCopy?: string;
};

const MosaicContentContainer = styled("section")`
  display: grid;
  grid-gap: ${variables.gridGap};
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 1fr;

  @media (max-width: ${variables.medium}) {
    grid-template-rows: 1fr 1fr 1fr;
  }

  & > .m-mosaic-content__large-wrapper {
    grid-column: 1 / span 4;
    grid-row: 1 / span 2;

    @media (max-width: ${variables.medium}) {
      grid-column: 1 / span 3;
      grid-row: span 2;
    }
  }

  & > .m-mosaic-content__small-wrapper {
    grid-column: 5 / span 4;
    grid-row: span 1;
    position: relative;

    @media (max-width: ${variables.medium}) {
      grid-column: span 6;
      grid-row: 3;
    }
  }

  & > .m-mosaic-content__content-wrapper {
    grid-column: 9 / span 4;
    grid-row: 1 / span 2;

    @media (max-width: ${variables.medium}) {
      grid-column: 4 / span 9;
      grid-row: span 2;
    }

    & > .m-mosaic-content__heading {
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    & > .m-mosaic-content__break {
      border: none;
      height: 1px;
      margin-bottom: 28px;
      background-color: ${colors.white};
    }
    & > .m-mosaic-content__copy {
      margin-bottom: 30px;
      color: ${colors.ghost};
    }
    & > .m-mosaic-content__subheading {
      margin-bottom: 11px;
      color: ${colors.red};
      text-transform: uppercase;
    }
    & > .m-mosaic-content__bold-copy {
      margin-bottom: 80px;

      @media (max-width: ${variables.medium}) {
        margin-bottom: 30px;
      }
    }
  }

  & .m-mosaic-content__click {
    & .e-image {
      transition: 0.4s transform ease-in;

      @media (prefers-reduced-motion) {
        transition: none;
      }
    }

    &:hover,
    &:focus {
      & .e-image {
        transform: scale(1.03);
        cursor: nwse-resize;
      }
    }
  }
`;

const MosaicContent: React.FC<MosiacContentProps> = ({
  heading,
  copy,
  subheading,
  boldCopy,
  smallMedia,
  largeMedia
}) => {
  const [modalImage, setModalImage] = useState({ src: null, alt: null });
  const modalClose = () => {
    setModalImage({ src: null, alt: null });
  };

  const imageClick = (
    e: MouseEvent<HTMLAnchorElement>,
    image: ImageFileProps
  ) => {
    e.preventDefault();
    setModalImage({ src: image.src, alt: image.alt });
  };

  return (
    <MosaicContentContainer className="m-mosaic-content --container --body-module">
      <Fader variant="scale" className="m-mosaic-content__large-wrapper">
        <a
          href=""
          className="m-mosaic-content__click"
          onClick={e => imageClick(e, largeMedia)}
        >
          <ImageElem image={largeMedia} className="--fill" />
        </a>
      </Fader>
      {smallMedia.map((media, i) => (
        <Fader
          variant="scale"
          className="m-mosaic-content__small-wrapper"
          key={i}
          delay={i + 2}
        >
          <a
            href=""
            className="m-mosaic-content__click"
            onClick={e => imageClick(e, media)}
          >
            <ImageElem image={media} className="--fill" />
          </a>
        </Fader>
      ))}
      <div className="m-mosaic-content__content-wrapper">
        <h2 className="m-mosaic-content__heading h3">{heading}</h2>
        <hr className="m-mosaic-content__break" />
        <p className="m-mosaic-content__copy body-regular">{copy}</p>
        {subheading && (
          <h3 className="m-mosaic-content__subheading h4">{subheading}</h3>
        )}
        {boldCopy && (
          <h3 className="m-mosaic-content__bold-copy body-bold">{boldCopy}</h3>
        )}
      </div>
      {modalImage?.src && (
        <Modal handleClose={modalClose}>
          <ImageElem image={modalImage} className="--landscape" contain />
        </Modal>
      )}
    </MosaicContentContainer>
  );
};
export default MosaicContent;

import styled from "@emotion/styled";
import React from "react";
import ImageElem, { ImageFileProps } from "../elements/image";
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

  & > .m-mosaic-content__large-wrapper {
    grid-column: 1 / span 4;
    grid-row: 1 / span 2;
  }

  & > .m-mosaic-content__small-wrapper {
    grid-column: 5 / span 4;
    grid-row: span 1;
    position: relative;
  }

  & > .m-mosaic-content__content-wrapper {
    grid-column: 9 / span 4;
    grid-row: 1 / span 2;

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
}) => (
  <MosaicContentContainer className="m-mosaic-content --container --body-module">
    <div className="m-mosaic-content__large-wrapper">
      <ImageElem image={largeMedia} className="portrait" />
    </div>
    {smallMedia.map((media, i) => (
      <div className="m-mosaic-content__small-wrapper" key={i}>
        <ImageElem image={media} className="landscape" />
      </div>
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
  </MosaicContentContainer>
);

export default MosaicContent;

import React from "react";
import styled from "@emotion/styled";
import ImageElem, { ImageFileProps } from "../elements/image";
import Fader from "../elements/fader";
import Link from "next/link";
import colors from "../styles/design-tokens/colors";

const NewsTileContainer = styled(Fader)`
  display: flex;
  flex-direction: column;

  & > .c-news-tile__container {
    display: flex;
    flex-direction: column;
    height: 100%;

    & > .c-news-tile__image {
      margin-top: 0;
      margin-bottom: 27px;
      border-bottom: 4px solid ${colors.red};

      & .e-image {
        transition: 0.3s transform linear;
      }
    }

    & > .c-news-tile__heading {
      margin-bottom: 12px;
    }

    & > .c-news-tile__copy {
      margin-bottom: 20px;
    }

    & > .c-news-tile__link-container {
      margin-top: auto;

      & > .c-news-tile__link {
        text-decoration: none;
        padding-bottom: 4px;
        margin-bottom: 0;
        transition: 0.2s padding ease-out, 0.2s margin ease-out;
        display: inline-block;
        border-bottom: 1px solid ${colors.red};

        &:hover,
        &:focus {
          padding-bottom: 0;
          margin-bottom: 4px;
        }
      }
    }
  }
`;

export type NewsTileProps = {
  heading: string;
  copy: string;
  image: ImageFileProps;
  link: string;
  index?: number;
};

const NewsTile: React.FC<NewsTileProps> = ({
  heading,
  copy,
  image,
  index,
  link
}) => (
  <NewsTileContainer delay={index} className="c-news-tile">
    <div className="c-news-tile__container">
      <div className="c-news-tile__image">
        <ImageElem image={image} className="--landscape" blur />
      </div>
      <h3 className="c-news-tile__heading h4">{heading}</h3>
      {copy && <p className="c-news-tile__copy body-small">{copy}</p>}
      <div className="c-news-tile__link-container">
        <Link href={link} passHref>
          <a className="c-news-tile__link e-link">
            <span>Read more</span>
          </a>
        </Link>
      </div>
    </div>
  </NewsTileContainer>
);

export default NewsTile;

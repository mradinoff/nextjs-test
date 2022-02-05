import React from "react";
import styled from "@emotion/styled";
import Fader from "../elements/fader";
import variables from "../styles/design-tokens/variables";
import NewsTile, { NewsTileProps } from "../components/news-tile";

const LatestNewsContainer = styled("section")`
  & > .m-latest-news__container {
    z-index: 1;

    & > .m-latest-news__intro {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: ${variables.gridGap};

      @media (max-width: ${variables.medium}) {
        display: block;
      }

      & > .m-latest-news__intro-container {
        display: flex;
        flex-direction: column;
        text-align: center;
        grid-column: 3 / span 8;
        grid-row: 1;

        @media (max-width: ${variables.small}) {
          text-align: left;
        }

        & > .m-latest-news__heading {
          margin-bottom: 60px;
          text-transform: uppercase;

          @media (max-width: ${variables.small}) {
            margin-bottom: 30px;
          }
        }
      }
    }

    & > .m-latest-news__tiles {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: ${variables.gridGap};

      @media (max-width: ${variables.medium}) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: ${variables.small}) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

type LatestNewsProps = {
  heading?: string;
  items: NewsTileProps[] | [];
};

const LatestNews: React.FC<LatestNewsProps> = ({ heading, items }) => (
  <LatestNewsContainer className="m-latest-news --body-module">
    <div className="m-latest-news__container --container">
      <Fader className="m-latest-news__intro">
        <div className="m-latest-news__intro-container">
          {heading && <h2 className="m-latest-news__heading">{heading}</h2>}
        </div>
      </Fader>
      {items?.[0] && (
        <div className="m-latest-news__tiles">
          {items.map((item, i) => (
            <NewsTile
              key={i}
              heading={item.heading}
              copy={item.copy}
              image={item.image}
              link={item.link}
              index={i}
            />
          ))}
        </div>
      )}
    </div>
  </LatestNewsContainer>
);

export default LatestNews;

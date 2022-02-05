import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import typography from "../styles/design-tokens/typography";
import variables from "../styles/design-tokens/variables";
import bodyModule from "../styles/utilities/body-module";
import container from "../styles/utilities/container";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Global
      styles={css`
        html,
        body {
          max-width: 100%;
          padding: 0;
          margin: 0;
          font-size: 62.5%;

          @media (max-width: ${variables.small}) {
            font-size: 50%;
          } 
        }
        body {
          position: relative;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        * {
          box-sizing: border-box;
        }
        ${bodyModule}
        ${container}
        ${typography}
      `}
    />
    <Component {...pageProps} />
  </>
);

export default App;

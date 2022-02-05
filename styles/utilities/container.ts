import variables from "../design-tokens/variables";

const container = `
  .--container {
    max-width: ${variables.maxWidth};
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${variables.gridGap};
  }
`;

export default container;

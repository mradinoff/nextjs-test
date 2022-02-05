import variables from "../design-tokens/variables";

const bodyModule = `
  .--body-module {
    margin-top: 230px;
    margin-bottom: 230px; 

    @media (max-width: ${variables.small}) {
      margin-top: 100px;
      margin-bottom: 100px;
    }
  }
`;

export default bodyModule;

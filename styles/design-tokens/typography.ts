import colors from "./colors";

const typography = `
h1,
h2,
h3,
h4,
h5,
p,
li,
a,
dt,
dd,
blockquote {
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Open Sans", sans-serif;
  color: ${colors.white};
}

h2,
.h2 {
  font-size: 4.2rem;
  font-weight: 300;
  line-height: 1.35;
  letter-spacing: 0.8px;
}

h3,
.h3 {
  font-size: 2.6rem;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.5px;
}

h4,
.h4 {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.75;
  letter-spacing: 0;
}

h5,
.h5 {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.75;
  letter-spacing: 0;
}

p,
.body-regular {
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0;
}

.body-bold {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: 0;
}

.body-small {
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.6;
  color: ${colors.ghost};
  letter-spacing: 0;
}

.e-link {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: 0;
}
`;

export default typography;

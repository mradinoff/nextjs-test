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
  font-size: rem(42px);
  font-weight: 300;
  line-height: 1.35;
  letter-spacing: 0.8px;
}

h3,
.h3 {
  font-size: rem(26px);
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.5px;
}

h4,
.h4 {
  font-size: rem(18px);
  font-weight: 600;
  line-height: 1.75;
}

h5,
.h5 {
  font-size: rem(16px);
  font-weight: 600;
  line-height: 1.75;
}

p,
.body-regular {
  font-size: rem(18px);
  font-weight: 300;
  line-height: 1.6;
}

.body-bold {
  font-size: rem(18px);
  font-weight: 600;
  line-height: 1.6;
}

.body-small {
  font-size: rem(16px);
  font-weight: 300;
  line-height: 1.6;
  color: var(--grey);
}

.e-link {
  font-size: rem(16px);
  font-weight: 600;
  line-height: 1.6;
}
`;

export default typography;

import { MouseEvent } from "react";

const linkClick = (e: MouseEvent, value: string) => {
  e.preventDefault();
  console.log(`Clicked: ${value}`);
};
export default linkClick;

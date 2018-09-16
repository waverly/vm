// EXAMPLE
import { css } from "styled-components";

export const media = {
  mobile: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `
};

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

// layout

export const flexCenter = `
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const fixedFullSize = `
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const absFullSize = `
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const fullBleedWrapper = `
	width: 100%;
`;

// end layout

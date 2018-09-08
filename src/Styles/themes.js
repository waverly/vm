import { css } from "styled-components";

export const theme = {
  // mixins
  test: "#E53D3d",
  mixins: {
    flex_row_wrap: css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    `
  },

  // end mixins

  colors: {
    darkGray: "#454545",
    lightGray: "#BABABA",
    middleGray: "#979797",
    red: "#E53D3D"
  },

  // layout
  z: {
    titleBar: 50,
    settingsMenu: 80,
    overlay: 100,
    threeDot: 110,
    modal: 120,
    alert: 150
  },

  spacing: {
    eighth: "2px",
    quarter: "4px",
    half: "7px",
    single: "14px",
    double: "24px",
    triple: "36px",
    quadruple: "48px"
  },

  // end layout

  // padding and margins

  padding: {
    article: "60px",
    column: "60px"
  },

  // end padding and margins

  // type
  fontSize: {
    header: "132px",
    body: "11px"
  },

  fontFamily: {
    cormorant: "'Cormorant', serif"
  },

  fontWeight: {
    light: "200",
    regular: "400",
    medium: "600",
    heavy: "800"
  }

  // end type
};

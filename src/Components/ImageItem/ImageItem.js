// @flow

import React from "react";
import styled from "styled-components";
import { media } from "Styles/style-utils";

const Wrapper = styled.div`
  width: auto;
  margin: 0 ${props => props.theme.spacing.triple};
  display: inline-block;
  display: ${props => (props.src ? "inline" : "none")};
  flex: 0 0 auto;
  position: relative;
  img {
    height: 100%;
  }

  ${media.mobile`
    width: 100%;
    padding: 0;
    margin: ${props => props.theme.spacing.double} 0;
  `};
`;

const ImageWrapper = styled.div`
  padding: ${props => props.paddingV}em ${props => props.paddingH}em;
  height: calc(100% - ${props => props.theme.height.caption});
  img {
    height: 100%;
  }
  ${media.mobile`
    width: 100%;
    padding: 0;
  `};
`;

const Caption = styled.p`
  position: absolute;
  bottom: 0;
  height: ${props => props.theme.height.caption};
  width: 100%;
`;

const ImageItem = props => {
  const { src, caption, paddingH, paddingV } = props;
  return (
    <Wrapper src={src}>
      <ImageWrapper paddingH={paddingH} paddingV={paddingV}>
        <img src={src} />
      </ImageWrapper>
      <Caption>{caption}</Caption>
    </Wrapper>
  );
};

export default ImageItem;

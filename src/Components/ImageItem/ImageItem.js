// @flow

import React from "react";
import styled from "styled-components";
import { media } from "Styles/style-utils";

const Wrapper = styled.div`
  padding: 0 ${props => props.theme.padding.column};
  display: ${props => (props.imageSrc ? "inline-block" : "none")};
  width: auto !important;
  height: 100%;
  position: relative;
  display: inline-block;
  flex: 0 0 auto;
  img {
    height: 100%;
    max-width: unset;
    width: auto;
  }
  ${media.mobile`
      padding: ${props => props.theme.spacing.single};
      img {
        height: auto;
        width: 100%;
      }
  `};
`;

const ImageWrapper = styled.div`
  padding-top: ${props => (props.padding.top ? `${props.padding.top}em` : 0)};
  padding-bottom: ${props =>
    props.padding.bottom ? `${props.padding.bottom}em` : 0};
  padding-left: ${props =>
    props.padding.left ? `${props.padding.left}em` : 0};
  padding-right: ${props =>
    props.padding.right ? `${props.padding.right}em` : 0};
  height: calc(100% - ${props => props.theme.height.caption});

  img {
    height: 100%;
  }
  ${media.mobile`
    width: 100%;
    padding: 0;
  `};
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  height: ${props => props.theme.height.caption};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${media.mobile`
    position: relative;
  `};
`;

const ImageItem = props => {
  const { imageSrc, caption, padding, link } = props;
  return (
    <Wrapper imageSrc={imageSrc}>
      <ImageWrapper imageSrc={imageSrc} padding={padding}>
        <a href={link} target="_blank">
          <img src={imageSrc} />
        </a>
      </ImageWrapper>

      <Caption>{caption}</Caption>
    </Wrapper>
  );
};

export default ImageItem;

// @flow

import React from "react";
import styled from "styled-components";
import { media } from "Styles/style-utils";

const Wrapper = styled.div`
  width: auto;
  margin: 0 ${props => props.theme.spacing.triple};
  display: inline-block;
  flex: 0 0 auto;
  position: relative;
  video {
    height: 100%;
  }

  ${media.mobile`
    width: 100%;
    padding: 0;
    margin: ${props => props.theme.spacing.double} 0;
    video {
      height: auto;
      width: 100%;
    }
  `};
`;

const VideoWrapper = styled.div`
  padding-top: ${props => (props.paddingV ? `${props.paddingV}em` : 0)};
  padding-bottom: ${props => (props.paddingV ? `${props.paddingV}em` : 0)};
  padding-left: ${props => (props.paddingH ? `${props.paddingH}em` : 0)};
  padding-right: ${props => (props.paddingH ? `${props.paddingH}em` : 0)};
  height: calc(100% - ${props => props.theme.height.caption});

  video {
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

type Props = {
  videoUrl: string,
  caption: string
};

const VideoItem = props => {
  const { videoUrl, caption, link } = props;
  return (
    <Wrapper>
      <VideoWrapper>
        <a href={link} target="_blank">
          <video src={videoUrl} autoPlay loop muted playsInline />
        </a>
      </VideoWrapper>
      <Caption>{caption}</Caption>
    </Wrapper>
  );
};

export default VideoItem;

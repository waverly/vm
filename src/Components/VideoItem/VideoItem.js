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
  padding: ${props => props.paddingV}em ${props => props.paddingH}em;
  height: calc(100% - ${props => props.theme.height.caption});
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
  ${media.mobile`
    position: relative;
  `};
`;

type Props = {
  videoUrl: string,
  caption: string
};

const VideoItem = props => {
  const { videoUrl, caption } = props;
  return (
    <Wrapper>
      <VideoWrapper>
        <video src={videoUrl} autoPlay loop muted playsInline />
      </VideoWrapper>
      <Caption>{caption}</Caption>
    </Wrapper>
  );
};

export default VideoItem;

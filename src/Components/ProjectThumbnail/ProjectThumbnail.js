// @flow

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* TODO: create more exact width props*/
  width: 100%;
  text-align: left;
  margin-bottom: 2em;
  img {
    width: 100%;
  }
`;

const ProjectThumbnail = props => {
  const { title, subtitle, thumbnail } = props.data;
  return (
    <Wrapper>
      <img src={thumbnail} alt="" />
      <p>{title}</p>
      <p>{subtitle}</p>
    </Wrapper>
  );
};

export default ProjectThumbnail;

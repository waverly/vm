// @flow

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* TODO: create more exact width props*/
  width: ${props => (props.module_size === "half" ? "40%" : "100%")};
  text-align: left;
  margin: 2em 0;
  img{
    width: 100%;
  }
`;

const ProjectThumbnail = props => {
  const { title, subtitle, thumbnail } = props.data;
  return (
    <Wrapper>
      <img src={thumbnail} alt=""/>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
    </Wrapper>
  );
};

export default ProjectThumbnail;

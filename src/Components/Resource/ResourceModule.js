// @flow

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background: url(${props => props.hero_image}) no-repeat center center;
  background-size: cover;
  text-align: center;
  padding: ${({ theme }) => theme.padding.article};
  margin: 2em 0;
`;

const ResourceModule = props => {
  const { title, subtitle, thumbnail } = props.data.resource;

  return (
    <Wrapper hero_image={thumbnail}>
      <h3>Resource</h3>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </Wrapper>
  );
};

export default ResourceModule;

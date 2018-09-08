// @flow

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* TODO: create more exact width props*/
  width: ${props => (props.module_size === "half" ? "40%" : "100%")};
  background: url(${props => props.hero_image}) no-repeat center center;
  background-size: cover;
  text-align: center;
  margin: 2em 0;

  /* TODO: create padding specific to module*/
  padding: ${({ theme }) => theme.padding.article};
`;

const ArticleModule = props => {
  const { title, subtitle, hero_image } = props.data;
  return (
    <Wrapper hero_image={hero_image} module_size={props.module_size}>
      <h3>Article</h3>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </Wrapper>
  );
};

export default ArticleModule;

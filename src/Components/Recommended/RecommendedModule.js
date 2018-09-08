// @flow

import React from "react";
import styled from "styled-components";

import ArticleModule from "../Article";

const Wrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.padding.article};
  margin: 2em 0;
  background-color: lightpink;
  text-align: center;
`;

const ArticleFlexWrapper = styled.div`
  ${({ theme }) => theme.mixins.flex_row_wrap};
  justify-content: space-around;
`;

const RecommendedModule = props => {
  const { title, subtitle } = props.data;
  // console.log(props.data.article);
  return (
    <Wrapper>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <ArticleFlexWrapper>
        {props.data.recommended_items.map(i => (
          <ArticleModule
            key={i.article.id}
            data={i.article}
            module_size="half"
          />
        ))}
      </ArticleFlexWrapper>
    </Wrapper>
  );
};

export default RecommendedModule;

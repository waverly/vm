// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { media } from "Styles/style-utils";

// TODO: if height of inner div is larger than container, apply two cols

const Wrapper = styled.div`
  width: ${props =>
    props.wrapperHeight < props.textHeight ? "600px" : "400px"};

  margin: 0 ${props => props.theme.spacing.triple};
  display: inline-block;
  flex: 0 0 auto;

  ${media.mobile`
    width: 100%;
    padding: ${props => props.theme.spacing.single};
    margin: ${props => props.theme.spacing.triple} 0;
  `};
`;

const TextWrapper = styled.div`
  padding: ${props => props.paddingV}em ${props => props.paddingH}em;
  column-count: ${props => (props.wrapperHeight < props.textHeight ? 2 : 1)};
  ${media.mobile`
    column-count: 1;
  `};
`;

type Props = {
  text: string
};

type State = {
  wrapperHeight: number,
  textHeight: number
};

class TextItem extends Component<Props, State> {
  state = {
    wrapperHeight: 0,
    textHeight: 0
  };

  componentDidMount() {
    this.setState({
      wrapperHeight: this.wrapper.clientHeight,
      textHeight: this.text.clientHeight
    });
  }

  render() {
    const { text } = this.props;
    return (
      <Wrapper
        wrapperHeight={this.state.wrapperHeight}
        textHeight={this.state.textHeight}
        innerRef={element => {
          this.wrapper = element;
        }}
      >
        <TextWrapper
          wrapperHeight={this.state.wrapperHeight}
          textHeight={this.state.textHeight}
          innerRef={element => {
            this.text = element;
          }}
        >
          {text}
        </TextWrapper>
      </Wrapper>
    );
  }
}

export default TextItem;

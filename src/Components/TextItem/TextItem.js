// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { media } from "Styles/style-utils";

// TODO: if height of inner div is larger than container, apply two cols

const Wrapper = styled.div`
  width: auto;
  max-width: ${props =>
    props.wrapperHeight < props.textHeight ? "800px" : "400px"};
  height: calc(100% - ${props => props.theme.height.caption});
  overflow: hidden;
  margin: 0 ${props => props.theme.spacing.triple};
  display: inline-block;
  flex: 0 0 auto;

  ${media.mobile`
    width: 100%;
    padding: ${props => props.theme.spacing.single};
    margin: ${props => props.theme.spacing.triple} 0;
  `};
`;

const InnerWrapper = styled.div`
  height: 100%;
`;

const TextWrapper = styled.div`
  height: ${props =>
    props.wrapperHeight < props.textHeight ? "100%" : "auto"};
  padding: ${props => props.paddingV}em ${props => props.paddingH}em;
  /* add column gap here */
  ${"" /* column-count: ${props => (props.wrapperHeight < props.textHeight ? 2 : 1)}; */} column-width: ${props =>
      props.wrapperHeight < props.textHeight ? "300px" : "auto"};

  ${media.mobile`
    column-count: 1;
    height: auto;
  `};
`;

type Props = {
  text: string
};

type State = {
  wrapperHeight: number,
  textHeight: number
  // multiColumn property
};

class TextItem extends Component<Props, State> {
  state = {
    wrapperHeight: 0,
    textHeight: 0
  };

  stateUpdate = data => {
    const newState = Object.assign({}, this.state, {
      data
    });

    this.setState(newState);
  };

  updateDimensions = () => {
    this.stateUpdate({
      wrapperHeight: this.wrapper.offsetHeight,
      textHeight: this.text.offsetHeight
    });
  };

  componentDidMount() {
    this.setState({
      wrapperHeight: this.wrapper.offsetHeight,
      textHeight: this.text.offsetHeight
    });

    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
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
        <InnerWrapper>
          <TextWrapper
            wrapperHeight={this.state.wrapperHeight}
            textHeight={this.state.textHeight}
            innerRef={element => {
              this.text = element;
            }}
          >
            {text}
          </TextWrapper>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

export default TextItem;

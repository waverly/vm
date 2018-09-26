// @flow

import React, { Component } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import debounce from "lodash/debounce";

import { media } from "Styles/style-utils";

// TODO: if height of inner div is larger than container, apply two cols

const Wrapper = styled.div`
  width: auto;
  max-width: 500px;
  width: auto;
  height: calc(100% - ${props => props.theme.height.caption});
  overflow: hidden;
  margin: 0 ${props => props.theme.spacing.triple};
  display: inline-block;
  flex: 0 0 auto;
  padding: 0 35px;
  margin: 0 30px;
  overflow: auto;

  ${media.mobile`
    max-width: 100%;
    width: 100%;
    padding: ${props => props.theme.spacing.single};
    margin: ${props => props.theme.spacing.triple} 0;
  `};
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
`;

const TextWrapper = styled.div`
  padding: ${props => props.paddingV}em ${props => props.paddingH}em;

  ${media.mobile`
    height: auto;
  `};
`;

type Props = {
  text: string
};

type State = {
  wrapperHeight: number,
  textHeight: number,
  multiColumn: boolean,
  wrapperWidth: string,
  columnCount: number
  // multiColumn property
};

class TextItem extends Component<Props, State> {
  state = {
    wrapperHeight: 0,
    textHeight: 0
  };

  stateUpdate = data => {
    const newState = Object.assign({}, this.state, data);
    this.setState(newState);
  };

  render() {
    const { text } = this.props;
    return (
      <Wrapper
        multiColumn={this.state.multiColumn}
        wrapperWidth={this.state.wrapperWidth}
        innerRef={element => {
          this.wrapper = element;
        }}
      >
        <InnerWrapper>
          <TextWrapper
            columnCount={this.state.columnCount}
            multiColumn={this.state.multiColumn}
            wrapperWidth={this.state.wrapperWidth}
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

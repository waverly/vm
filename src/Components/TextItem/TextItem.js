// @flow

import React, { Component } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import debounce from "lodash/debounce";

import { media } from "Styles/style-utils";

// TODO: if height of inner div is larger than container, apply two cols

const Wrapper = styled.div`
  width: auto;
  max-width: ${props => (props.multiColumn ? props.wrapperWidth : "400px")};
  height: calc(100% - ${props => props.theme.height.caption});
  overflow: hidden;
  margin: 0 ${props => props.theme.spacing.triple};
  display: inline-block;
  flex: 0 0 auto;
  padding: 0 ${props => props.theme.padding.column};

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
  align-items: center;
`;

const TextWrapper = styled.div`
  padding: ${props => props.paddingV}em ${props => props.paddingH}em;
  column-gap: 20px;
  column-count: ${props => props.columnCount};
  column-width: ${props => (props.multiColumn ? "300px" : "auto")};

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

  updateDimensions = () => {
    console.log("inside update dimensions");
    console.log(this.wrapper, this.text);
    // console.log(this.wrapper.offsetHeight, this.text.offsetHeight);
    if (this.wrapper && this.text) {
      const multiColumn = this.wrapper.clientHeight < this.text.clientHeight;
      console.log(this.wrapper.clientHeight, this.text.clientHeight);
      const wrapperWidth = `${Math.ceil(
        this.text.clientHeight / this.wrapper.clientHeight
      ) *
        300 +
        50}px`;
      const columnCount = Math.ceil(
        this.text.clientHeight / this.wrapper.clientHeight
      );
      this.stateUpdate({
        wrapperHeight: this.wrapper.clientHeight,
        textHeight: this.text.clientHeight,
        multiColumn,
        columnCount,
        wrapperWidth
      });
    } else {
      return;
    }
  };

  componentDidMount() {
    console.log("component did mount");
    this.updateDimensions();
    // const multiColumn = this.wrapper.offsetHeight < this.text.offsetHeight;
    // const wrapperWidth = `${Math.ceil(
    //   this.text.offsetHeight / this.wrapper.offsetHeight
    // ) *
    //   300 +
    //   50}px`;
    // this.stateUpdate({
    //   wrapperHeight: this.wrapper.offsetHeight,
    //   textHeight: this.text.offsetHeight,
    //   multiColumn,
    //   wrapperWidth
    // });
    window.addEventListener("resize", _.debounce(this.updateDimensions, 500));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

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

// @flow

import React, { Component } from "react";
import styled from "styled-components";
import * as _ from "lodash";
import debounce from "lodash/debounce";

import { media } from "Styles/style-utils";

// TODO: if height of inner div is larger than container, apply two cols

const Wrapper = styled.div`
  width: auto;
  max-width: ${props => (props.multiColumn ? props.wrapperWidth : "500px")};
  width: ${props => (props.multiColumn ? props.wrapperWidth : "500px")};
  height: calc(100% - ${props => props.theme.height.caption});
  overflow: hidden;
  margin: 0 ${props => props.theme.spacing.triple};
  display: inline-block;
  flex: 0 0 auto;
  padding-left: ${props =>
    props.multiColumn ? props => props.theme.padding.column : "35px"};
  padding-right: ${props =>
    props.multiColumn ? props => props.theme.padding.column : "35px"};
  margin-left: ${props => (props.multiColumn ? "0" : "30px")};
  margin-right: ${props => (props.multiColumn ? "0" : "30px")};

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
    // the problem is that it should only run if the wrapper height changes, and then needs to recalc

    if (this.wrapper) {
      if (this.wrapper.clientHeight != this.state.wrapperHeight) {
        let wrapperWidth;
        console.log("wrapper height changed");
        console.log(this.wrapper.clientHeight, this.state.wrapperHeight);

        const multiColumn = this.wrapper.clientHeight < this.state.textHeight;

        // wrapperWidth has to be greater if the wrapperHeight is less than 350

        if (this.wrapper.clientHeight > 480) {
          wrapperWidth = `${Math.ceil(
            this.state.textHeight / this.wrapper.clientHeight
          ) *
            430 +
            150}px`;
        } else {
          wrapperWidth = `${Math.ceil(
            this.state.textHeight / this.wrapper.clientHeight
          ) *
            300 +
            400}px`;
        }

        const columnCount = Math.ceil(
          this.state.textHeight / this.wrapper.clientHeight
        );

        console.log("lets debug wrapper width");

        console.log({
          wrapperHeight: this.wrapper.clientHeight,
          textHeight: this.state.textHeight,
          multiColumn,
          wrapperWidth,
          columnCount
        });
        this.stateUpdate({
          wrapperHeight: this.wrapper.clientHeight,
          multiColumn,
          columnCount,
          wrapperWidth
        });
      } else {
        console.log("wrapper height didnt change");
      }
    }
  };

  componentDidMount() {
    console.log("component did mount");
    let wrapperWidth;

    const multiColumn = this.wrapper.clientHeight < this.text.clientHeight;
    if (this.wrapper.clientHeight > 480) {
      wrapperWidth = `${Math.ceil(
        this.text.clientHeight / this.wrapper.clientHeight
      ) *
        430 +
        100}px`;
    } else {
      wrapperWidth = `${Math.ceil(
        this.text.clientHeight / this.wrapper.clientHeight
      ) *
        300 +
        400}px`;
    }
    const columnCount = Math.ceil(
      this.text.clientHeight / this.wrapper.clientHeight
    );

    console.log({
      wrapperHeight: this.wrapper.clientHeight,
      textHeight: this.text.clientHeight,
      multiColumn,
      wrapperWidth,
      columnCount
    });
    this.stateUpdate({
      wrapperHeight: this.wrapper.clientHeight,
      textHeight: this.text.clientHeight,
      multiColumn,
      columnCount,
      wrapperWidth
    });

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

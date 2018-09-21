// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

import ProjectThumbnail from "Components/ProjectThumbnail";
import { media } from "Styles/style-utils";
import { linkResolver } from "Utils/prismic-configuration";

const apiEndpoint = "https://vicentemunoz.prismic.io/api/v2";

const HomeFlexWrap = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: 1s opacity;
  ${media.mobile`
    flex-direction: column;
    position: unset;
    height: auto;
  `};
`;

const Column = styled.div`
  flex: 1 1 0%;
  justify-content: flex-start;
  align-items: center;
  padding: ${props => props.theme.spacing.triple};
  h1 {
    margin-bottom: ${props => props.theme.spacing.triple};
  }
  ${media.mobile`
      padding: ${props => props.theme.spacing.single};
      h1 {
        margin-bottom: ${props => props.theme.spacing.single};
      }
  `};
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex: 1 1 0%;
  overflow-y: scroll;
  height: 100%;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  a {
    width: 45%;
  }
`;

class Homepage extends Component {
  state = {
    data: [],
    loaded: false
  };

  dynamicSort = property => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 500);
    // API call for project thumbnails and titles
    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "project"), {
          orderings: "[my.project.order]"
        })
        .then(response => {
          const projects = response.results.map(project => {
            // console.log(project);
            let { uid } = project;
            let { title, subtitle, thumbnail, order } = project.data;
            title = title[0].text;
            if (subtitle[0]) {
              subtitle = subtitle[0].text;
            }

            thumbnail = thumbnail.url;
            return { title, subtitle, thumbnail, uid, order };
          });

          // create a new "State" object without mutating
          // the original State object.
          const newState = Object.assign({}, this.state, {
            projects
          });
          // store the new state object in the component's state
          this.setState(newState);
        });
    });

    // API call for homepage data
    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "home"))
        .then(response => {
          // const slices = response.results[0].data.body;
          // console.log(response.results);
          let data = {};
          const homeData = response.results[0].data;
          let information = homeData.information;
          console.log(information);
          data.information = RichText.render(information, linkResolver);
          console.log(data.information);

          data.title = homeData.title[0].text;

          // create a new "State" object without mutating
          // the original State object.
          const newState = Object.assign({}, this.state, {
            data
          });
          // store the new state object in the component's state
          this.setState(newState);
        });
    });
  }

  render() {
    return (
      <HomeFlexWrap loaded={this.state.loaded}>
        <Column>
          <h1>{this.state.data.title}</h1>
        </Column>
        <Column>
          <h1>Information</h1>
          <div>{this.state.data.information}</div>
        </Column>
        <Column>
          <h1>Work</h1>
          <ImageWrapper>
            {this.state.projects ? (
              this.state.projects.map(project => (
                <Link key={project.uid} to={`/${project.uid}`}>
                  <ProjectThumbnail data={project} />
                </Link>
              ))
            ) : (
              <h1 />
            )}
          </ImageWrapper>
        </Column>
      </HomeFlexWrap>
    );
  }
}

export default Homepage;

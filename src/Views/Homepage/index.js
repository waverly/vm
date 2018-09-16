// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import styled, { css } from "styled-components";

import ProjectThumbnail from "Components/ProjectThumbnail";
import { media } from "Styles/style-utils";
import { linkResolver } from "Utils/prismic-configuration";
import { generateKey } from "Utils/helpers";

import {
  fetchArticle,
  fetchPerson,
  fetchResource
} from "Utils/prismic-configuration";

const apiEndpoint = "https://vicentemunoz.prismic.io/api/v2";

const HomeFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  ${media.mobile`
    flex-direction: column;
  `};
`;

const Column = styled.div`
  flex: 1 1 0%;
  justify-content: flex-start;
  align-items: center;
  padding: ${props => props.theme.spacing.triple};
  h1 {
    margin-bottom: ${props => props.theme.spacing.double};
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
  a {
    width: 45%;
  }
`;

class Homepage extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    // API call for project thumbnails and titles
    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "project"))
        .then(response => {
          // const slices = response.results[0].data.body;
          console.log(response.results);

          const projects = response.results.map(project => {
            let { uid } = project;
            console.log(project.data);
            let { title, subtitle, thumbnail } = project.data;
            title = title[0].text;
            if (subtitle[0]) {
              subtitle = subtitle[0].text;
            }

            thumbnail = thumbnail.url;
            return { title, subtitle, thumbnail, uid };
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
          data.information = RichText.render(information, linkResolver);

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
      <HomeFlexWrap>
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

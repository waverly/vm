import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextItem from "Components/TextItem";
import ImageItem from "Components/ImageItem";
import VideoItem from "Components/VideoItem";
import { media } from "Styles/style-utils";
import { generateKey } from "Utils/helpers";
import { linkResolver } from "Utils/prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
const apiEndpoint = "https://vicentemunoz.prismic.io/api/v2";

const ProjectWrapper = styled.div`
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: 1s opacity;
`;
const Header = styled.div`
  position: fixed;
  width: 100vw;
  height: ${props => props.theme.height.header};
  z-index: ${props => props.theme.z.titleBar};
`;

const Left = styled.div`
  position: fixed;
  top: ${props => props.theme.spacing.triple};
  left: ${props => props.theme.spacing.triple};
  ${media.mobile`
    top: ${props => props.theme.spacing.single};
    left: ${props => props.theme.spacing.single};
  `};
`;

const Right = styled.div`
  position: fixed;
  top: ${props => props.theme.spacing.triple};
  right: ${props => props.theme.spacing.triple};
  text-align: right;
  ${media.mobile`
    top: ${props => props.theme.spacing.single};
    right: ${props => props.theme.spacing.single};
  `};
`;

const BodyInner = styled.div`
  position: fixed;
  height: 60vh;
  width: 100vw;
  top: 20vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  ${media.mobile`
    flex-direction: column;
    height: auto;
    position: relative;
    overflow-x: hidden;
    top: 75px;
    div{
      &:last-child{
        padding-right: 0px;
      }
    }

  `};
`;

class Project extends Component {
  state = {
    data: {},
    loaded: false
  };

  stateUpdate = data => {
    // create a new "State" object without mutating
    // the original State object.
    const newState = Object.assign({}, this.state, {
      data
    });

    // store the new state object in the component's state
    this.setState(newState);
  };

  componentDidMount() {
    const uid = this.props.match.params.project;
    let apiData;

    setTimeout(() => {
      this.setState({ loaded: true });
    }, 500);

    // API call for project thumbnails and titles
    Prismic.api(apiEndpoint).then(api => {
      api.getByUID("project", uid).then(document => {
        const projectData = document.data;
        let { title, subtitle, body } = projectData;
        title = title[0].text;

        subtitle[0] ? (subtitle = subtitle[0].text) : (subtitle = null);

        apiData = { title, subtitle, body };

        this.stateUpdate(apiData);
      });
    });
  }

  render() {
    return (
      <ProjectWrapper loaded={this.state.loaded}>
        <Header>
          <Left>
            <Link to="/">
              <h1>Vicente Muñoz</h1>
              <p>Back</p>
            </Link>
          </Left>
          <Right>
            <h1>{this.state.data.title}</h1>
            <h1>{this.state.data.subtitle}</h1>
          </Right>
        </Header>
        <BodyInner>
          {this.state.data.body
            ? this.state.data.body.map(b => {
                let caption;
                // parse if it is a text or image field
                if (b.slice_type === "text") {
                  const text = RichText.render(
                    b.primary.richtext,
                    linkResolver
                  );
                  return <TextItem text={text} key={generateKey("text")} />;
                } else if (b.slice_type === "image") {
                  const imageSrc = b.primary.image.url;
                  const paddingH = b.primary.padding_horizontal;
                  const paddingV = b.primary.padding_vertical;
                  b.primary.caption.length > 0
                    ? (caption = b.primary.caption[0].text)
                    : null;
                  return (
                    <ImageItem
                      paddingH={paddingH}
                      paddingV={paddingV}
                      imageSrc={imageSrc}
                      caption={caption}
                      key={generateKey(b.primary.image.url)}
                    />
                  );
                } else if (b.slice_type === "video") {
                  const videoUrl = b.primary.video_file.url;
                  b.primary.caption.length > 0
                    ? (caption = b.primary.caption[0].text)
                    : null;
                  return (
                    <VideoItem
                      key={generateKey(videoUrl)}
                      caption={caption}
                      videoUrl={videoUrl}
                    />
                  );
                }
              })
            : ""}
        </BodyInner>
      </ProjectWrapper>
    );
  }
}

export default Project;

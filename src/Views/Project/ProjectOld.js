import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { linkResolver } from "Utils/prismic-configuration";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { RichText, Date } from "prismic-reactjs";
const apiEndpoint = "https://vicentemunoz.prismic.io/api/v2";

class Project extends Component {
  componentDidMount() {
    const uid = this.props.match.params.project;
    let data;

    // API call for project thumbnails and titles
    Prismic.api(apiEndpoint).then(api => {
      api.getByUID("project", uid).then(function(document) {
        const projectData = document.data;
        let { title, subtitle, body } = projectData;
        title = title[0].text;
        subtitle = subtitle[0].text;

        data = { title, subtitle, body };
        console.log(data);
      });
    });

    //To retreive the API object check how to query the API
  }

  render() {
    return <h1>article page</h1>;
  }
}

export default Project;

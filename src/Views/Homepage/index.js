// @flow

import React, { Component } from "react";
import Prismic from "prismic-javascript";
import styled from "styled-components";

import ArticleModule from "Components/Article";
import ResourceModule from "Components/Resource";
import RecommendedModule from "Components/Recommended";
import { generateKey } from "Utils/helpers";

import {
  fetchArticle,
  fetchPerson,
  fetchResource
} from "Utils/prismic-configuration";

const apiEndpoint = "https://vicentemunoz.prismic.io/api/v2";

const homeGraphQuery = `{
  article {
    subtitle
    title
    hero_image
    author {
      uid
      first_name
      last_name
    }
  }
  resource {
    title
    subtitle
    thumbnail
  }
}`;

class Homepage extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "home"), {
          // graphQuery: homeGraphQuery
          fetchLinks: [
            "project.title",
            "project.subtitle",
            "project.hero_image",
            "project.author",
          ]
        })
        .then(response => {
          const slices = response.results[0].data.body;
          console.log(response.results);
          // console.log(slices);
          //
          // // put data in an object and add object to state
          // const parsedSlices = slices.map(d => {
          //   // parse data for necessary content
          //
          //   switch (d.slice_type) {
          //     // if single article module
          //     case "article_module":
          //       // if it is an article_module, mine the content relationship
          //
          //       console.log(d.primary.article.data.related_article.value.uid);
          //
          //       return {
          //         module_type: d.slice_type,
          //         article: fetchArticle(d.primary.article, "article")
          //       };
          //
          //     // if recommended block
          //     case "recommended":
          //       const title = d.primary.title[0].text;
          //       const subtitle = d.primary.subtitle[0].text;
          //       const type = d.slice_type;
          //       const recommended_items = d.items.map(i => {
          //         const article = i.recommended_item;
          //         // console.log(article);
          //         return {
          //           article: fetchArticle(article, "article")
          //         };
          //       });
          //       return {
          //         title,
          //         subtitle,
          //         recommended_items,
          //         module_type: d.slice_type
          //       };
          //
          //     // if resource module
          //     case "resource_module":
          //       // if it is a resource_module, mine the content relationship
          //       const resource = d.primary.resource;
          //       return {
          //         resource: fetchResource(resource, "resource"),
          //         module_type: d.slice_type
          //       };
          //     default:
          //       return;
             }
          });

          // create a new "State" object without mutating
          // the original State object.
          // const newState = Object.assign({}, this.state, {
          //   data: parsedSlices
          // });

          // store the new state object in the component's state
          // this.setState(newState);
        });
    });
  }

  render() {
    return (
      <div>
          <h1>homepage hi</h1>
        {/* {this.state.data.map(i => {
          switch (i.module_type) {
            case "article_module":
              // logic to determine which size article component to render
              return (
                <ArticleModule
                  key={generateKey("article")}
                  data={i.article}
                  module_type={i.module_type}
                />
              );
            case "resource_module":
              return <ResourceModule key={generateKey("resource")} data={i} />;
            case "recommended":
              return (
                <RecommendedModule key={generateKey("recommended")} data={i} />
              );
          }
        })} */}
      </div>
    );
  }
}

export default Homepage;

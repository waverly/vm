export const linkResolver = function(doc) {
  // Pretty URLs for known types
  if (doc.type === "blog") return "/post/" + doc.uid;
  if (doc.type === "page") return "/" + doc.uid;
  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.id;
};

export const fetchPerson = (author, type) => {
  console.log("inside of fetchAuthor");

  // console.log(author);

  return author;
};

export const fetchArticle = (article, type) => {
  let { id } = article;
  let { title, subtitle, hero_image, author } = article.data;

  author = fetchPerson(author);

  // add in logic to make sure it doesnt error out if any of these fields were left blank
  title = title[0].text;
  subtitle = subtitle[0].text;
  hero_image = hero_image.url;

  return {
    id,
    title,
    subtitle,
    hero_image,
    type
  };
};

export const fetchResource = (resource, type) => {
  let { id } = resource;
  let { title, subtitle, thumbnail, module_type } = resource.data;

  // add in logic to make sure it doesnt error out if any of these fields were left blank
  title = title[0].text;
  subtitle = subtitle[0].text;
  thumbnail = thumbnail.url;

  return {
    id,
    title,
    subtitle,
    thumbnail,
    module_type,
    type
  };
};

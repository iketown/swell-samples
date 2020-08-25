import { useRouter } from "next/router";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import client from "../../client";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

//
//
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body = [],
  } = props;
  return (
    <article>
      <h1>{title}</h1>
      <span>by {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(({ title, description }) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      )}
      {authorImage && (
        <div>
          <img src={urlFor(authorImage).width(50).url()} />
        </div>
      )}
      <BlockContent
        blocks={body}
        imageOptions={{ w: 600, h: 240, fit: "max" }}
        {...client.config()}
      />
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.fetch(`*[_type == 'post']`);
  return {
    paths: posts.map(({ slug }) => `/post/${slug.current}`),
    //  [`/post/hello-world`],
    fallback: true,
  };
};

const query = groq`*[_type == 'post' && slug.current == $slug][0]
  {
    title,
     "name": author->name,
     "authorImage": author->image,
      slug,
      "categories": categories[]->{title, description},
      body
      }
  `;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "" } = context.params;
  const props = await client.fetch(query, {
    slug,
  });

  return { props };
};

export default Post;

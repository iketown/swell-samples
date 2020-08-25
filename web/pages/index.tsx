import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import client from "../client";
import groq from "groq";
const HomePage = ({ posts = [] }) => {
  return (
    <div>
      <h1>hey its my blog</h1>
      {posts.map(({ _id, title = "", slug = {}, _updatedAt = "" }) => {
        return (
          slug && (
            <li key={_id}>
              <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                <a>{title}</a>
              </Link>
            </li>
          )
        );
      })}
    </div>
  );
};

export default HomePage;

const query = groq`
  *[_type == "post" && _createdAt < now() ]|order(_createdAt asc)
`;
export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await client.fetch(query);
  console.log("posts", posts);
  return {
    props: { posts },
  };
};

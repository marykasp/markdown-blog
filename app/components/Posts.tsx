import { useState } from "react";
import { getSortedPostsData } from "../../lib/posts";
import ListItem from "./ListItem";

const Posts = () => {
  const posts = getSortedPostsData();
  console.log(posts);

  return (
    <section className="mt-10  max-w-2xl text-white">
      <h2 className="text-3xl font-semibold border-b pb-2 border-zinc-800 dark:text-white/90">
        Latest Posts
      </h2>
      <ul className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <ListItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;

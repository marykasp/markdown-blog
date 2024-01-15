import { useState } from "react";
import { getPostsMeta } from "../../lib/posts";
import ListItem from "./ListItem";
import Link from "next/link";

const Posts = async () => {
  // get meta data from all the posts
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }

  return (
    <section className="mt-10  max-w-2xl dark:text-white">
      <div className="p-2 flex justify-between items-center border-b dark:border-zinc-800 border-gray-300">
        <h2 className="text-3xl font-semibold">Latest Posts</h2>
        <Link
          href="/blog"
          className="p-2 bg-blue-500 text-white dark:bg-blue-300 dark:text-zinc-700 rounded-sm text-sm"
        >
          View All
        </Link>
      </div>
      <ul className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
        {/* display only 4 most recent posts */}
        {posts.slice(0, 4).map((post) => (
          <ListItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;

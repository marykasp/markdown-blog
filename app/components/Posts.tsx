import { getSortedPostsData } from "../../lib/posts";

const Posts = () => {
  const posts = getSortedPostsData();
  // console.log(posts);

  return (
    <section className="mt-10  max-w-2xl text-white">
      <h2 className="text-3xl font-semibold border-b pb-2 border-gray-600 dark:text-white/90">
        Latest Posts
      </h2>
      <ul className="w-full">{posts.map((post) => JSON.stringify(post))}</ul>
    </section>
  );
};

export default Posts;

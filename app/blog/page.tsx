import { getPostsMeta } from "../../lib/posts";
import PostListItem from "../components/PostListItem";

const Blog = async () => {
  const posts = await getPostsMeta();

  if (!posts) return <p>Sorry no posts yet on this blog</p>;

  return (
    <>
      <h2 className="dark:text-white font-bold text-2xl my-6">Writings</h2>
      <section className="w-full max-w-4xl">
        <ul className="w-full flex flex-col gap-4">
          {posts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Blog;

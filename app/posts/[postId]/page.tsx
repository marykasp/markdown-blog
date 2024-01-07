import { getSortedPostsData } from "../../../lib/posts";
import { notFound } from "next/navigation";

export const generateMetadata = ({
  params,
}: {
  params: { postId: string };
}) => {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  // would be title for custom 404 page if post is not found
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
  };
};

const Post = async ({ params }: { params: { postId: string } }) => {
  // import list of all posts
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  // check existing posts for postID - return not found if doesn't exist
  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  return <div>page</div>;
};

export default Post;

import getFormattedDate from "../../../lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

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

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="prose prose-2xl px-6 prose-zinc dark:prose-invert mx-auto mt-10">
      <h1 className="text-4xl tracking-wide mt-4 mb-0">{title}</h1>
      <p className="mt-0 text-md text-blue-300 font-mono tracking-wide">
        {pubDate}
      </p>
      <article className="prose-base">
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </article>
    </main>
  );
};

export default Post;

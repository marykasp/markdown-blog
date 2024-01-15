import getFormattedDate from "../../../lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "../../components/Button";
import "highlight.js/styles/base16/ashes.css";

// route segment config - not cache anything, server side rendered
export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); // deduplicated during build

  if (!posts) return [];

  // return a list of posts ids
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export const generateMetadata = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  // would be title for custom 404 page if post is not found
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.meta.title,
  };
};

const Post = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) notFound();

  const { meta, content } = post;

  // extract out date and tags from meta object on BlogPost type
  const pubDate = getFormattedDate(meta.date);
  // console.log(meta.tags);

  const tags = meta.tags.map((tag, index) => (
    <Link
      href={`/tags/${tag}`}
      key={index}
      className={`${
        tag === "typescript" ? `bg-blue-500` : `bg-yellow-500`
      } rounded-sm  text-white text-sm px-4 py-1 no-underline font-normal`}
    >
      {tag}
    </Link>
  ));

  return (
    <div className="prose prose-2xl prose-zinc dark:prose-invert  mt-10">
      <h2 className="text-4xl tracking-wide mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-md text-blue-300 font-mono tracking-wide">
        {pubDate}
      </p>
      <article className="prose-base">{content}</article>
      <section>
        <h3 className="text-sm tracking-wide">Related posts:</h3>
        {/* link to similar blog poss */}
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p className="mb-10">
        <Button>
          <Link href="/" className="no-underline">
            Back to home
          </Link>
        </Button>
      </p>
    </div>
  );
};

export default Post;

// display a list of matching blog posts with same tag
import { getPostsMeta } from "../../../lib/posts";
import ListItem from "../../components/ListItem";
import Link from "next/link";

export const revalidate = 0;

type Props = {
  // an object of tags with key:value pairs
  params: {
    tag: string;
  };
};

// export async function generateStaticParams() {
//   // get post meta data - returns array of Meta objects
//   const posts = await getPostsMeta();

//   if (!posts) return [];

//   // map over all the posts and get the tags - [[]] - flatten array of array - create a set to remove duplicates
//   const tags = new Set(posts.map((post) => post.tags).flat());

//   // need an array of objects - map over array of tags - create object (key:value)
//   return Array.from(tags).map((tag) => ({ tag }));
// }

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

const TagPostList = async ({ params: { tag } }: Props) => {
  // get meta data of all posts
  const posts = await getPostsMeta();

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no pasts with that {tag}</p>;

  // return a list of posts metadata that includes the tag that matches the param
  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  // if none match return this this ui to say none match
  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <div className="mt-10">Sorry, no posts for those keywords</div>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="text-xl ">
        Results for:{" "}
        <span className="bg-blue-500 text-white p-2 rounded-sm text-sm">
          {tag}
        </span>
      </h2>
      <section className="w-full max-w-4xl">
        <ul className="w-full list-none py-6 ">
          {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TagPostList;

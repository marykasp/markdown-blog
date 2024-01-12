// display a list of matching blog posts with same tag
import { getPostsMeta } from "../../../lib/posts";
import ListItem from "../../components/ListItem";
import Link from "next/link";

export const revalidate = 0;

type Props = {
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

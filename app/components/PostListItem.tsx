import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";

type Props = {
  post: Meta;
};

const PostListItem = ({ post }: Props) => {
  const formattedDate = getFormattedDate(post.date);
  const month = formattedDate.split(" ")[0].slice(0, 3);
  const day = formattedDate.split(" ")[1].slice(0, 1);

  // const date = `${month} ${day}`;

  return (
    <li className="border-b border-gray-200 dark:border-zinc-700 pb-2">
      <Link
        href={`/posts/${post.id}`}
        className="flex items-center justify-between hover:text-blue-500 dark:hover:text-blue-300 dark:text-white"
      >
        <h3 className="font-semibold text-md">{post.title}</h3>
        <time className="text-blue-500 font-bold text-sm">{formattedDate}</time>
      </Link>
    </li>
  );
};

export default PostListItem;

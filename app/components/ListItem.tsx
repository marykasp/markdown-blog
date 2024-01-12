import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";

type Props = {
  post: Meta;
};

const ListItem = ({ post }: Props) => {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="xs:border-none xs:p-0 border border-1 rounded-md dark:border-zinc-800 border-neutral-300 p-4 bg-transparent hover:bg-neutral-200 dark:hover:bg-zinc-700">
      {/* metadata image from post */}
      <div>
        <p className="text-sm dark:text-blue-300 text-blue-500 font-mono tracking-wide">
          {formattedDate}
        </p>
        <Link
          href={`/posts/${id}`}
          className="dark:text-white text-zinc-800 mt-1 inline-block text-md hover:text-black/70 dark:hover:text-white hover:underline"
        >
          {title}
        </Link>
      </div>
    </li>
  );
};

export default ListItem;

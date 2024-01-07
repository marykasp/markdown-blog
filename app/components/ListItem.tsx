import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

const ListItem = ({ post }: Props) => {
  const { id, title, date } = post;
  // formatted date
  const formattedDate = getFormattedDate(date);

  return (
    <li className="xs:border-none xs:p-0 border border-1 rounded-sm border-zinc-700 p-4 bg-transparent hover:bg-zinc-700">
      {/* metadata image from post */}
      <div>
        <p className="text-sm text-gray-300 font-mono tracking-wide">
          {formattedDate}
        </p>

        <Link
          href={`/posts/${id}`}
          className="mt-1 inline-block text-md hover:text-black/70 dark:hover:text-white"
        >
          {title}
        </Link>
      </div>
    </li>
  );
};

export default ListItem;

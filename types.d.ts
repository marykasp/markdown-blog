type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

type TagColors = {
  typescript: string;
  javascript: string;
  react: string;
  git: string;
};

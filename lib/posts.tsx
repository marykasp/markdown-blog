import { compileMDX } from "next-mdx-remote/rsc";

type Filetree = {
  tree: [
    {
      path: string;
    },
  ];
};

export const getPostByName = async (
  fileName: string,
): Promise<BlogPost | undefined> => {
  // use filename to fetch data from file
  const res = await fetch(
    `https://raw.githubusercontent.com/marykasp/blogposts/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-Github-Api-Version": "2022-11-28",
      },
    },
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
  }>({
    source: rawMDX,
  });

  // get id w/o mdx
  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };

  return blogPostObj;
};

export const getPostsMeta = async (): Promise<Meta[] | undefined> => {
  // fetch mdx blog posts from github repo
  const res = await fetch(
    "https://api.github.com/repos/marykasp/blogposts/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-Github-Api-Version": "2022-11-28",
      },
    },
  );

  if (!res.ok) return undefined;

  // get filetree object from github
  const repoFiletree: Filetree = await res.json();

  // map over filetree array and get path property - filter for only paths that end in mdx
  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  // iterate over the files array of mdx file name - use for loop since need to async/await
  for (const file of filesArray) {
    // retrieve data from post based on the file name from github
    const post = await getPostByName(file);

    // if there is a post - get metadata and push to posts array
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  // return sorted posts of metadata
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

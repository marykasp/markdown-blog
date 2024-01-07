import fs from "fs";
import path from "path";
import matter from "gray-matter";

// get directory where posts are stored
const postsDirectory = path.join(process.cwd(), "blogposts");
console.log(postsDirectory);

export function getSortedPostsData() {
  // get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  // iterate over the files
  const allPostsData = fileNames.map((filename) => {
    // remove ".md" from file name to get id of file
    const id = filename.replace(/\.md$/, "");

    // Read markdown file as a string - full path with filename
    const fullPath = path.join(postsDirectory, filename);
    // read the content of each file
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // use gray matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    // return a blogpost object type for each file
    return blogPost;
  });

  // sort list of post data by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

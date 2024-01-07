import ProfilePic from "./components/ProfilePic";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="sm:p-6 md:p-0 mx-auto mt-6 max-w-4xl">
      <div className="flex xs:flex-col md:flex-row justify-between items-center gap-10">
        <div id="hero-info" className="xs:order-last md:order-first">
          <h1 className="my-12 text-4xl dark:text-white font-bold">
            <span>Hi</span> I&apos;m Mary!
          </h1>
          <div>
            <p className="text-white mb-3 ">Welcome to my digital space. 🌱</p>
            <p className="text-white text-md">
              I&apos;m a software developer in Chicago. I make open-source
              projects and write about code, design, and life. I like cozy video
              games, journaling, fantasy, reading, and coding.
            </p>
          </div>
        </div>
        <ProfilePic />
      </div>
      {/* Latest Posts - create a card component */}
      <Posts />
    </main>
  );
}

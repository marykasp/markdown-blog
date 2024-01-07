import ProfilePic from "./components/ProfilePic";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="sm:p-6 md:p-0 mx-auto mt-6 max-w-4xl">
      <div className="flex xs:flex-col md:flex-row justify-between items-center gap-10">
        <div id="hero-info" className="xs:order-last md:order-first">
          <h1 className="my-12 text-5xl tracking-wider dark:text-white font-bold">
            <span className="text-blue-300">Hi</span> I&apos;m Mary!
          </h1>
          <div>
            <p className=" mb-3 text-neutral-300 ">
              Welcome to my digital space. 🌱
            </p>
            <p className="text-neutral-300 text-md">
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

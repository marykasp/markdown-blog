import ProfilePic from "./components/ProfilePic";

export default function Home() {
  return (
    <main className="px-6 mx-auto mt-6">
      <div className="flex sm:flex-col md:flex-row justify-between items-center">
        <div id="hero-info">
          <h1 className="my-12 text-4xl dark:text-white font-bold">
            <span>Hi</span> I&apos;m Mary!
          </h1>
          <div>
            <p className="text-white mb-3">Welcome to my digital space. 🌱</p>
            <p className="text-white">
              I&apos;m a software developer in Chicago. I make open-source
              projects and write about code, design, and life. I like cozy video
              games, journaling, fantasy, reading, and coding.
            </p>
          </div>
        </div>
        <ProfilePic />
      </div>
      {/* Latest Posts - create a card component */}
    </main>
  );
}

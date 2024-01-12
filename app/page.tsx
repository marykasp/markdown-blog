import ProfilePic from "./components/ProfilePic";
import Posts from "./components/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="flex xs:flex-col md:flex-row justify-between items-center gap-10">
        <div id="hero-info" className="xs:order-last md:order-first">
          <h1 className="my-12 text-5xl tracking-wider dark:text-white font-bold">
            <span className="dark:text-blue-300 text-blue-500">Hi</span>{" "}
            I&apos;m Mary!
          </h1>
          <div>
            <p className=" mb-3 dark:text-neutral-300">
              Welcome to my digital space.{"  "}
              <Image
                src="/images/animal-2.svg"
                alt="Mary Kasparian"
                width={20}
                height={20}
                className="inline-block"
              />
            </p>
            <p className="dark:text-neutral-300 text-zinc-800 text-md">
              I&apos;m a software developer in Chicago. I make open-source
              projects and write about code, design, and life. I like cozy video
              games, journaling, fantasy, reading, and coding.
            </p>
          </div>
        </div>
        <ProfilePic />
      </div>
      {/* Latest Posts - create a card component */}
      {/* @ts-expect-error Server Component */}
      <Posts />
    </section>
  );
}

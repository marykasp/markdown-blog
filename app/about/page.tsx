import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <main className="dark:text-neutral-200 mt-6">
      <article className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          {/* image of wolf and archer */}
          <div className="flex flex-col gap-4 ">
            <h2 className="text-2xl dark:text-white font-semibold mb-6">
              About me
            </h2>
            <p className="text-base ">
              Hello there! 👋 I&apos;m Mary, a passionate software engineer
              based in the lively city of Chicago. 🌆 My journey into the tech
              world has been quite the adventure – transitioning from a
              background in science to finding my calling as a front-end
              developer.
            </p>
            <p className="mb-3">
              You can contact me by email say hi! I always appreciate meeting
              new people.
            </p>
            <ul className="list-disc marker:text-blue-500">
              <li className="hover:text-blue-500 hover:font-semibold text-blue-500 dark:text-blue-300">
                <Link href="https://www.github.com/marykasp" target="_blank">
                  Github
                </Link>
              </li>
              <li className="hover:text-blue-500 hover:font-semibold text-blue-500 dark:text-blue-300">
                <Link href="https://www.marykasparian.com" target="_blank">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <Image
            src="/images/marykwolf.png"
            alt="character drawing of mary with wolf by side"
            width={400}
            height={400}
          />
        </div>
        <h3 className="text-xl font-semibold dark:text-white">
          From Scientist to Coder
        </h3>
        <p>
          In my previous life, I delved into the realms of science, exploring
          its wonders and intricacies. However, the allure of creating and
          crafting in the digital landscape captured my imagination. I pivoted
          towards the world of coding, embracing the dynamic challenges and
          endless possibilities of front-end development.
        </p>
        <h3 className="text-xl font-semibold dark:text-white">
          Embracing Cozy Comforts
        </h3>
        <p>
          Comforts Beyond the lines of code, I find solace and joy in the cozy
          corners of life. I&apos;m an avid enthusiast of all things snug and
          cozy – from immersing myself in captivating video games that whisk me
          away to fantastical realms, to diving into the enchanting worlds of
          fantasy books that ignite my imagination.
        </p>
        <h3 className="font-medium tracking-wider uppercase text-blue-500 dark:text-blue-300">
          My Cozy Interests
        </h3>
        <ol className="list-disc marker:text-blue-500 flex flex-col gap-2">
          <li>
            <span className="font-bold">Video Games</span>: Discovering hidden
            gems in cozy, immersive gaming worlds is my ultimate downtime
            delight. 🎮
          </li>
          <li>
            <span className="font-bold">Fantasy Worlds:</span>
            Lost in the pages of magical tales, I traverse through captivating
            narratives and embark on epic adventures.
          </li>
          <li>
            <span className="font-bold">Books:</span>
            Whether it&apos;s losing myself in a fantasy epic or exploring new
            ideas in non-fiction, books are my constant companions.
          </li>
        </ol>
      </article>
    </main>
  );
};

export default About;

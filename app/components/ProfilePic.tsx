import Image from "next/image";

const ProfilePic = () => {
  return (
    <section className="w-full mx-auto grow">
      <Image
        className="border-4 border-blue-500 dark:border-zinc-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/marykblog.png"
        alt="Mary Kasparian"
        width={200}
        height={200}
        priority
      />
    </section>
  );
};

export default ProfilePic;

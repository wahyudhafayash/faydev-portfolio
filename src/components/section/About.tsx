import IconCloud from "@/components/magicui/icon-cloud";
import TextRevealByWord from "../magicui/text-reveal";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "vercel",
  "cypress",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "postgresql",
  "firebase",
  "amazonaws",
];

const Aboutpage = () => {
  return (
    <section
      id="about"
      className="bg-zinc-800 text-white pt-24 pb-10 px-4 cursor-default md:px-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 justify-center max-w-screen-xl mx-auto px-2 md:px-10">
        <div className="mb-4 md:mb-40 lg-mb-40 md:col-span-2">
          <div className="sticky top-32  mt-[130px] md:my-[330px] md:top-[330px] lg:top-[130px] lg:mt-[90px] lg:mb-[50px] lg:top-[100px]">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col items-center">
          <div className="relative">
            <TextRevealByWord
              className="text-sm md:text-xl text-justify"
              text={`I am Muhammad Fayash Wahyudha, a passionate Full-Stack Web Developer based in Jakarta. I graduated from Purwadhika Digital Technology School, where I developed expertise in both frontend and backend development. My experience equips me with a strong foundation in various web technologies, allowing me to create dynamic and responsive applications. I am dedicated to delivering high-quality work and thrive in collaborative environments. With excellent communication and leadership skills, I ensure that projects run smoothly and that every team member feels valued. Eager to contribute my expertise to innovative projects, I am ready to take on new challenges in the tech industry. Let’s create something amazing together!`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;

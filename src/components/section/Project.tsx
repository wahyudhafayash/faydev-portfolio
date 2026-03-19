import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: "FayDev Portfolio",
    description: "Personal portfolio website",
    imageUrl: "/portfolio.png",
    previewLink: "https://fayash-portfolio.netlify.app/",
    repoLink: "https://github.com/faydev-organization/faydev-portfolio",
    altText: "Portfolio",
  },
  {
    title: "Sport On",
    description: "E-Commerse Website",
    imageUrl: "/Sporton.png",
    previewLink: "https://sporton-fe-zeta.vercel.app/",
    repoLink: "https://github.com/faydev-organization/faydev-portfolio",
    altText: "Sporton Website",
  },
  {
    title: "Docter Stream Executive Redm",
    description: "Website Info Stream for executive",
    imageUrl: "/exe.png",
    previewLink: "https://www.doctorexecutiveredm.my.id/",
    repoLink: "https://github.com/faydev-organization/faydev-portfolio",
    altText: "Sporton Website",
  },
  {
    title: "Fay AI Story Builder",
    description: "AI-based story builder",
    imageUrl: "/ai1.png",
    previewLink: "https://ai-kids-story-builder-phi.vercel.app/",
    repoLink: "https://github.com/faydev-organization/ai-kids-story-builder",
    altText: "AI Builder",
  },
  {
    title: "Enterkomputer Movie",
    description: "Website for Enterkomputer Movie",
    imageUrl: "/ekmovie.png",
    previewLink: "https://enterkomputer-movie.netlify.app/",
    repoLink: "https://github.com/wahyudhafayash/enterkomputer-movie-nextjs",
    altText: "Enter Komputer Movie",
  },
  {
    title: "iPhone 15",
    description: "iPhone product showcase",
    imageUrl: "/iphone1.png",
    previewLink: "https://vite-iphone-15.vercel.app/",
    repoLink: "https://github.com/faydev-organization/vite-iphone-15",
    altText: "iPhone",
  },
  {
    title: "Netflix Clone",
    description: "!!SERVER UNDER MAINTENANCE!!",
    imageUrl: "/netflix3.png",
    previewLink: "https://netflix-clone-nextjs-nine-psi.vercel.app/",
    repoLink: "https://github.com/faydev-organization/netflix-clone-nextjs",
    altText: "Netflix",
  },
  {
    title: "Idol Company",
    description: "Web Company Profile",
    imageUrl: "/company-profile.png",
    previewLink: "https://idol-group-company.vercel.app/",
    repoLink: "https://github.com/wahyudhafayash/idol-group-company",
    altText: "Idol Company",
  },
  {
    title: "My Calculator",
    description: "Web calculator application",
    imageUrl: "/calculator.png",
    previewLink: "https://faycalculator.netlify.app/",
    repoLink: "https://github.com/faydev-organization/fay-calculator",
    altText: "Calculator",
  },
  {
    title: "FayFood Salad",
    description: "Web produk salad",
    imageUrl: "/umkm.png",
    previewLink: "https://umkm-six.vercel.app/",
    repoLink: "https://github.com/UMKM-WEB/UMKM",
    altText: "FayFood Salad",
  },
  {
    title: "Coffee Shop",
    description: "!!SERVER UNDER MAINTENANCE!!",
    imageUrl: "/kopi.png",
    previewLink: "https://coffee-shop-ten-woad.vercel.app/",
    repoLink: "https://github.com/wahyudhafayash",
    altText: "Coffee Shop",
  },
  {
    title: "To Do List",
    description: "!!SERVER UNDER MAINTENANCE!!",
    imageUrl: "/todo.png",
    previewLink: "#",
    repoLink: "https://github.com/wahyudhafayash",
    altText: "Todo List",
  },
];

const Projectpage = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <section
      id="project"
      className="bg-zinc-800 top-20 text-white pt-24 pb-10 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-screen mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold pb-20">My Projects</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-32">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <CardContainer className="inter-var" key={index}>
              <CardBody className="bg-transparent w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-400 text-sm max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src={project.imageUrl}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.altText}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                    onClick={() => window.open(project.previewLink)}
                  >
                    Preview →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-full text-white text-xs font-bold border border-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.repoLink)}
                  >
                    Repository
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-5 py-3 rounded-md text-white text-xs font-bold border border-white hover:bg-white hover:text-black"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projectpage;

import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Simon Game",
    description:
      "A simple online version of the classic Simon memory game with a sleek, minimalist design.",
    image: "/simon.png",
    github: "https://github.com/nishu0tanwar/js-simonGame",
    link: "https://js-simon-game-iota.vercel.app/",
  },
  {
    name: "Portfolio Website",
    description: "A sophisticated online portfolio built with Next.js, Tailwind CSS, and TypeScript, featuring a polished, modern design that effectively showcases my projects and skills.",
    image: "/portfolio.png",
    github: "https://github.com/nishu0tanwar/nextjs-portfolio",
    link: "https://nextjs-portfolio-coral-alpha.vercel.app/",
  },
  {
    name: "To-Do App",
    description: "A Fancy To-Do app made using ReactJS and Vite.",
    image: "/todo.png",
    github: "https://github.com/nishu0tanwar/fancy-todo-list",
    link: "https://fancy-todo-list-smoky.vercel.app/",
  },
  {
    name: "IOT-Smart Camera Module",
    description:
      "AI-powered IoT smart camera module revolutionizes surveillance with customizable features, enhancing security across diverse environments.",
    image: "/iot.png",
    github: "https://github.com/nishu0tanwar/py-iot-Smart-Camera-Module",
    link: ""
    
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection

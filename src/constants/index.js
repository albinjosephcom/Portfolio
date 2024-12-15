import { a, link } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React Native Developer",
      company_name: "Don Bosco Arts and Science College",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2022 - June 2022",
      points: [
         "Designed and developed user-friendly websites tailored to client requirements."  ,
          "Implemented responsive and visually appealing layouts using modern web technologies."  ,
          "Integrated backend functionality and APIs to enhance website features and performance." , 
          "Optimized websites for speed, SEO, and cross-browser compatibility."  
      ],
    },
    {
      title: "Intern",
      company_name: "PySpiders",
      icon: starbucks,
      iconBg: "#383E56",
      date: "October 2023 - September 2024",
      points: [
        "Studied full-stack Python development, including frameworks like Django and databases such as DBMS and MongoDB."  ,
         "Learned front-end technologies like HTML, CSS, JavaScript, and React.js."  ,
         "Gained experience in implementing responsive design and building dynamic web applications."  ,
         "Developed a strong foundation in back-end development, API integration, and database management."
      ],
    },
    {
      title: "Web Developer",
      company_name: "GR ASSOCIATES",
      icon: shopify,
      iconBg: "#383E56",
      date: "October 2024 - December 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "FreeLance Developer",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "December 2024 - Present",
      points: [
         "Developing and testing websites and mobile applications for various clients as a freelancer."  ,
         "Collaborating with clients to understand requirements and deliver tailored solutions."  ,
         "Ensuring high-quality performance through thorough testing and debugging of web and mobile applications."  ,
         "Implementing responsive designs and optimizing applications for seamless user experiences."  
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "Albin turned our vision into a stunning reality with his creativity and attention to detail, proving that a website can be as remarkable as our product.",
      name: "Anusree Raj",
      designation: "Assistan Professor",
      company: "Don Bosco College",
      image: "src/assets/testimonials/same.jpeg",
    },
    {
      testimonial:
        "Albin is unlike any web developer I've met—his dedication to his clients' success is truly exceptional.",
      name: "Bibin Binoj",
      designation: "Manager",
      company: "Lenskart",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Thanks to Albin's optimization, our website traffic soared by 50%. We couldn’t be more grateful!",
      name: "Fathima Naji",
      designation: "CEO",
      company: "Backend pot",
      image: "src/assets/testimonials/naji.jpeg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };
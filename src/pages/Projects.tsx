
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import versatileShare from '../images/VersatileShare.png'
import jobPortal from '../images/jobPortal.png'
import resumeBuilder from '../images/resumeBuilder.png'
import ePoliceWebsite from '../images/ePoliceWebsite.png'
import cropRecommendation from '../images/cropRecommendation.png'
import carbonFootprint from '../images/carbonFootprint.png'
import textUtils from '../images/textUtils.png'
import rockPaper from '../images/rockPaper.png'
import currencyConvertor from '../images/currencyConvertor.png'
import tictoctoe from '../images/tictoctoe.png'
import calculator from '../images/calculator.png'
import urlShortener from '../images/urlShortener.png'

interface Project {
  title: string;
  technologies: string;
  date: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    title: "Versatile Share",
    technologies: "Next.js, Vite, MERN",
    date: "Feb - June 2025 | Major-Project",
    // endDate: "2023-06",
    description: `Resource Sharing Platform for ISE department
A centralized platform where all resources across all semesters are well organized for both students and faculty. The platform will feature analytics to provide insights into the usage and effectiveness of each resource.
Key features include integration of AI and data scrapping. The platform will deliver personalized study materials based on individual needs and preferences, helping students focus on the most relevant content. Focused on real-time users. And AI generated summaries.`,
    image: versatileShare,
    githubLink: 'https://github.com/Rakeshappu/VersatileShare',
    liveLink:''
  },
  {
    title: "Job Portal",
    technologies: "React, Node.js",
    date: "August 2024 | Mini-Project",
    // endDate: "2023-06",
    description: `• Developed a MERN Stack-based job portal web application
enabling recruiters to post jobs and applicants to apply for jobs.
• Implemented features for recruiters to create, update, and manage
job postings, and for applicants to search, filter, and submit
applications.
• Focused on user authentication, data management with MongoDB,
and server-side logic using Node.js and Express.`,
    image: jobPortal,
    githubLink: 'https://github.com/Rakeshappu/job-portal',
    liveLink:''
  },
  {
    title: "Carbon Footprint Calculator",
    technologies: "HTML CSS JS REACT NODE.JS Typescript",
    date: "January 2024 | Infothon",
    // startDate: "2023-07",
    // endDate: "2023-12",
    description: `• Developed a Carbon Footprint Calculator that estimates individual
carbon footprints based on user inputs like electricity usage,
kilometers driven, etc.
• Contributed to front-end development using HTML and CSS, while
Django powered the back-end for input handling and calculations.
• Provided users with actionable insights, including tree-planting
equivalents and carbon reduction tips.`,
    image: carbonFootprint,
    githubLink: 'https://github.com/Rakeshappu/TechiesW18',
    liveLink:''
  },
  {
    title: "Resume Builder",
    technologies: "MERN",
    date: "August 2024",
    // startDate: "2023-07",
    // endDate: "2023-12",
    description: ``,
    image: resumeBuilder,
    githubLink: 'https://github.com/Rakeshappu/ResumeBuilder',
    liveLink:''
  },
  {
    title: "Epolice-website",
    technologies: "HTML CSS Django",
    date: "January 2024",
    // startDate: "2023-07",
    // endDate: "2023-12",
    description: ``,
    image: ePoliceWebsite,
    githubLink: 'https://github.com/mr-vbharadwaj/Epolice-website',
    liveLink:''
  },
  {
    title: "Crop Recommendation Model",
    technologies: "Ml, Django",
    date: "December 2023 | Hacksprint",
    description: `• Developed a Carbon Footprint Calculator that estimates individual
carbon footprints based on user inputs like electricity usage,
kilometers driven, etc.
• Contributed to front-end development using HTML and CSS, while
Django powered the back-end for input handling and calculations.
• Provided users with actionable insights, including tree-planting
equivalents and carbon reduction tips.`,
    image: cropRecommendation,
    githubLink: 'https://github.com/Rakeshappu/Hacksprint_Chic-coders',
    liveLink:''
  },
  {
    title: "Text Utils",
    technologies: "React",
    date: "September 2024",
    description: `• Created a text utility application using React Hooks, offering a
variety of text manipulation features.
• Key features include word and character counting, space removal,
auto-dismissing alert messages, and theme customization.`,
    image: textUtils,
    githubLink: 'https://github.com/Rakeshappu/TextUtils',
    liveLink:''
  },
  {
    title: "Rock-Paper-Scissors",
    technologies: "HTML CSS JavaScript",
    date: "May 2024",
    description: ``,
    image: rockPaper,
    githubLink: 'https://github.com/Rakeshappu/Rock-Paper-Scissors',
    liveLink:''
  },
  {
    title: "Currency Convertor",
    technologies: "JavaScript",
    date: "June 2024",
    description: ``,
    image: currencyConvertor,
    githubLink: 'https://github.com/Rakeshappu/CurrencyConvertor',
    liveLink:''
  },
  {
    title: "URL-Shortener",
    technologies: "Javascript",
    date: "July 2024",
    description: `• Created a text utility application using React Hooks, offering a
variety of text manipulation features.
• Key features include word and character counting, space removal,
auto-dismissing alert messages, and theme customization.`,
    image: urlShortener,
    githubLink: 'https://github.com/Rakeshappu/URL-Shortener',
    liveLink:''
  },
  {
    title: "TETRIS GAME",
    technologies: "HTML CSS JS",
    date: "June 2024",
    description: `• Developed a Tetris game to enhance programming skills.
• Utilized HTML and CSS to create an engaging front-end interface.
Implemented game functionality and mathematical calculations
using JavaScript.`,
    image: "/placeholder.svg",
    githubLink: 'https://github.com/Rakeshappu/Tetris',
    liveLink:''
  },
  {
    title: "Calculator",
    technologies: "HTML CSS JS",
    date: "June 2024",
    description: `• Developed a Tetris game to enhance programming skills.
• Utilized HTML and CSS to create an engaging front-end interface.
Implemented game functionality and mathematical calculations
using JavaScript.`,
    image: calculator,
    githubLink: 'https://github.com/Rakeshappu/Calculator',
    liveLink:''
  },
  {
    title: "Tic-Tac-Toe",
    technologies: "HTML CSS JS",
    date: "May 2024",
    description: ``,
    image: tictoctoe,
    githubLink: 'https://github.com/Rakeshappu/Tic-Tac-Toe',
    liveLink:''
  },
];

const Projects = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-project');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-neutral">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          My Projects
        </h1>
        
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`relative grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center opacity-0 ${
                index % 2 === 0 ? 'md:translate-x-[-300px]' : 'md:translate-x-[300px]'
              }`}
              style={{
                transform: `rotate(${index % 2 === 0 ? '-5deg' : '5deg'})`,
                transition: 'all 1s ease'
              }}
            >
              <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary">{project.title}</h2>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-semibold">Technologies:</span> {project.technologies}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold"></span>{' '}
                    {project.date}
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                <br />
                <div className="flex flex-wrap gap-4">
                  <a href="">
                    <button className="bg-primary hover:bg-primary-dark text-neutral px-4 sm:px-6 py-2 rounded-full transition-colors duration-300 text-sm sm:text-base">
                      <a href={project.githubLink} target='_blank'>Code (Github)</a>
                    </button>
                  </a>
                  <a href="">
                    <button className="bg-primary hover:bg-primary-dark text-neutral px-4 sm:px-6 py-2 rounded-full transition-colors duration-300 text-sm sm:text-base">
                      Live Preview
                    </button>
                  </a>
                </div>
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} relative group w-full aspect-[16/9] max-h-[250px]`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-xl transition-all duration-300 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-base sm:text-xl font-semibold bg-black/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full whitespace-nowrap">
                    <a href={project.githubLink} target='_blank'>View Project</a> 
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
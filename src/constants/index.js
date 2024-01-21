import { highradius, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    hibernate,
    cpp,
    java,
    spring,
    python,
    tensorflow
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: hibernate,
        name: "Hibernate",
        type: "Backend",
    },
    {
        imageUrl: cpp,
        name: "CPP",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: tensorflow,
        name: "Tensorflow",
        type: "Backend",
    },

    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "Highradius Corporation",
        icon: highradius,
        iconBg: "#accbe1",
        date: "July 2023 - December 2023",
        points: [
            "Developing and maintaining web applications using Java and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing robust backend solutions and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Developer Summer Intern",
        company_name: "Highradius Corporation",
        icon: highradius,
        iconBg: "#accbe1",
        date: "June 2023 - July 2023",
        points: [
            "Creating a full stack B2B enterprise Application",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing machine learning algorithms to predict future organization sales for each client and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/KStar-coder',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kaustav-sharma-ba7283214/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Blind Person Assistance',
        description: 'Developed a Machine Learning based application to assist blind people to help them locate people and objects in their surroundings while walking.',
        link: 'https://github.com/KStar-coder',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Nike Clone',
        description: 'Created a landing page clone of the popular sports brand Nike',
        link: 'https://github.com/KStar-coder/Nike-clone',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Magic-8-Ball',
        description: 'Designed and built a fun magic-8-ball application to help you out when you are in a dilemma',
        link: 'https://github.com/KStar-coder/Magic-8-Ball',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Sarcasm Detection',
        description: 'Built a Machine Learning based sarcasm detection software with the power of Natural Language Processing ',
        link: 'https://github.com/KStar-coder/Sarcasm-Detection',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Heart Disease Prediction',
        description: 'Developed a Machine Learning Application to predict if a patient has any heart disease',
        link: 'https://github.com/KStar-coder/Heart-Disease-Prediction',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Fake News Detection With Sentiment Analysis',
        description: 'A Machine Learning based application powered by Natural Language Processing to detect fake news and perform a sentiment analysis on the real news ',
        link: 'https://github.com/KStar-coder/Fake-News-Detection-with-Sentiment-Analysis',
    }
];
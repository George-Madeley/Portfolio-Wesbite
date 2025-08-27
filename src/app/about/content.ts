export interface Content {
  id: string;
  startTime: number;
  endTime: number | "present";
  timePeriod: string;
  type: "work" | "education" | "personal";
  position: string;
  company: {
    name: string;
    abbr?: string;
    href: string;
  };
  repos?: {
    name: string;
    href: string;
  }[];
  languages?: string[];
  description: string[];
}

const content: Content[] = [
  {
    id: "1fc63857-1eb6-4779-86bc-2b43872dd00e",
    startTime: 2024,
    endTime: 2024,
    timePeriod: "2024 - Present",
    type: "work",
    position: "Software Engineer",
    company: {
      name: "Atlantic Technology Ltd.",
      href: "https://www.atlantictechnology.co.uk/",
    },
    repos: [],
    languages: ["Python", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
    description: [
      "I am currently working as a software engineer at Atlantic Technology Ltd. My role involves developing software solutions for clients in a variety of different sectors. I work closely with clients to understand their requirements and develop bespoke software solutions that meet their needs. I also collaborate with a team of developers to design and implement software solutions that are robust, scalable, and user-friendly. I have gained experience in a wide range of technologies and frameworks, including Python, C++, JavaScript, TypeScript, HTML, and CSS. I have also developed my skills in software design, development, and testing, which has allowed me to deliver high-quality software solutions to clients. I am excited to continue my career in software development and look forward to working on new and exciting projects at Atlantic Technology Ltd.",
    ],
  },
  {
    id: "7b05c8e1-e6aa-4a76-bc61-d85d347629be",
    startTime: 2023,
    endTime: 2024,
    timePeriod: "2023 - 2024",
    type: "work",
    position: "Lead Software Engineer",
    company: {
      name: "Biodevices Without Borders",
      href: "https://bathbiodevices.com/",
    },
    repos: [
      {
        name: "Mobile App Code",
        href: "https://github.com/Bath-Biodevices-Without-Borders/App",
      },
      {
        name: "Micro-controller Code",
        href: "https://github.com/Bath-Biodevices-Without-Borders/Microcontroller",
      },
      {
        name: "Website Code",
        href: "https://github.com/Bath-Biodevices-Without-Borders/Website",
      },
    ],
    languages: [
      "React Native",
      "React",
      "Redux",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "C++",
    ],
    description: [
      "I collaborated in designing and developing a handheld water quality tester to be deployed to Sub-Saharan Africa to under developed communities. Programmed a React Native companion mobile application for iOS and Android which displays the measured properties of the tested water. Utilized Redux Saga and React-Native-BLE-PLX libraries to run multiple asynchronous threads to enable constant communication between the application and the water tester device via Bluetooth. Formed a back-end application in Firebase to upload the test results and GPS location to a database to be used to identify sources of water contamination. Collaborated with full-stack web developers to improve the company website. Built features allowing viewers to donate money to the non-profit organization. Cultivated the code bases for the micro-controller of the device and merged them together to form a complete device to communicate with the device sensors and the mobile application. Liaised with the social media team to develop a company wide branding document. ",
    ],
  },
  {
    id: "f5963aa2-c713-4a5e-9789-25904ad8230d",
    startTime: 2021,
    endTime: 2022,
    timePeriod: "2021 - 2022",
    type: "work",
    position: "Front-end Web Developer",
    company: { name: "BT", href: "https://www.bt.com/" },
    repos: [],
    languages: [
      "JavaScript",
      "HTML",
      "CSS",
      "Docker",
      "Microsoft Power Platform",
      "Power BI",
      "Power Apps",
      "C#",
      "Unity",
    ],
    description: [
      "Collaborated with senior team members in creating ergonomic and practical web app to aid health and safety inspections world-wide utilizing Microsoft Power Platform. Independently enhanced a company wide holiday booking calendar adopting tools such as HTML, CSS, TypeScript, React, and Redux. Educated team members on how employ Docker into their repositories and adapted already existing Git repositories to benefit from using Docker. Coached a team of graduates on how to use the Unity game engine in creating 3D augmented reality experiences for the next evolution in global marketing. Evaluated a series of for inaccuracies, using unit tests, integration tests, function tests, and acceptance tests, and investigates the source of errors to improve my own understanding of implementing Full-Stack development.",
      "Undertook a series of Codecademy courses in Front-End, Back-End, and Full-Stack web developed acquiring skills and techniques to be applied in a variety of corporate and personal projects. Developed a series of web-apps: on using the Spotify API, another to solve a campus wide revision difficulty, and another to visual aid managers in who in their team has booked time off. Enhanced skills in Python, C, C++, Unix CMD, Git, and Artificial Intelligence.",
    ],
  },
  {
    id: "da17f6e8-1ab8-44de-82db-7dbb51950d9b",
    startTime: 2020,
    endTime: 2022,
    timePeriod: "2020 - 2022",
    type: "personal",
    position: "Game Developer",
    company: { name: "Independent", href: "/projects" },
    repos: [
      {
        name: "Zombie Runner",
        href: "https://github.com/George-Madeley/GameDevTV-Unity3D-ZombieRunner",
      },
      {
        name: "Realm Rush",
        href: "https://github.com/George-Madeley/GameDevTV-Unity3D-RealmRush",
      },
      {
        name: "Obstacle Course",
        href: "https://github.com/George-Madeley/GameDevTV-Unity3D-ObstacleCourse",
      },
      {
        name: "Project Boost",
        href: "https://github.com/George-Madeley/GameDevTV-Unity3D-ProjectBoost",
      },
      {
        name: "Argon Assault",
        href: "https://github.com/George-Madeley/GameDevTV-Unity3D-ArgonAssault",
      },
    ],
    languages: ["C#", "Unity"],
    description: [
      "Adapted to coronavirus challenges and enrolled in online Udemy courses in C# video game design using Unity. Developed a 2D, rogue-like role play game using the gained knowledge. Produced artwork and graphics, a fully functioning inventory system, and a sophisticated questing system. Optimized code design to improve performance and readability. Learnt 3D game design to train a team for use in augmented reality advertising.",
      "Undertook online courses in C# and Unity by Codecademy and GameDev.tv to develop skills in game development. Created a series of games including a 3D space shooter, a 3D obstacle course, a 3D tower defense game, and a 2D plat-former.",
    ],
  },
  {
    id: "de1d6887-bc0b-443d-b4e2-cbba06a38723",
    startTime: 2019,
    endTime: 2024,
    timePeriod: "2019 - 2024",
    type: "education",
    position: "MEng Computer Systems Engineer",
    company: { name: "University of Bath", href: "https://www.bath.ac.uk/" },
    repos: [
      {
        name: "AI Sudoku Solver",
        href: "https://github.com/George-Madeley/CM20252-AI-Sodoku-Solver",
      },
      {
        name: "Circuit Analysis",
        href: "https://github.com/George-Madeley/EE20084-Circuit-Analysis-Coursework",
      },
      {
        name: "Shared Memory",
        href: "https://github.com/George-Madeley/CM30225-Shared-Memory-Coursework",
      },
      {
        name: "Distributed Memory",
        href: "https://github.com/George-Madeley/CM30225-Distributed-Memory-Coursework",
      },
      {
        name: "Image Filtering",
        href: "https://github.com/George-Madeley/EE40054-Image-Filtering-Coursework",
      },
      {
        name: "Neural Networks",
        href: "https://github.com/George-Madeley/EE40094-Neural-Networks-Coursework",
      },
      {
        name: "Genetic Algorithms",
        href: "https://github.com/George-Madeley/EE40094-Genetic-Algorithms-Coursework",
      },
      {
        name: "EEG Spike Classification",
        href: "https://github.com/George-Madeley/EE40094-EEG-Spike-Classification-Coursework",
      },
    ],
    languages: ["C", "Python", "MATLAB", "Java", "Assembly", "VHDL", "Verilog"],
    description: [
      "I Programmed multiple different data structures, including lists, binary trees and string comparison using Java in IntelliJ IDE. Proceeded to use algorithms including depth-first search and constraint satisfaction to program an artificial intelligence agent to solve sudoku problems under thirty seconds. From sixty different puzzles with four difficulties, the agent cracked forty-five puzzles under one second and the remaining fifteen puzzles in under 30 seconds.",
      "Developed a series of different machine learning algorithms to classify EEG signals, classify numbers from the MNIST dataset, and optimize other procedures. Utilized a variety of different machine learning techniques including neural networks, genetic algorithms, and support vector machines. Achieved an accuracy of 98.8% in classifying numbers from the MNIST dataset using a neural network. Created a genetic algorithm to solve polynomial equations and optimize the parameters of a neural network.",
      "Investigated varying noise reduction techniques to improve the quality of images. Programmed a series of different filters including a Gaussian filter, a median filter, and a butter-worth filter. Utilized Python to program the filters and test them on a series of different images.",
      "Created a program to perform convolution on a series of different images. Programmed the convolution in C and utilized multiple threads to parallelize the code. Investigated the performance of the code on a series of different images and compared the performance of the code on different numbers of threads. Investigated the performance when using shared memory and distributed memory.",
      "Programmed and assessed the circuit of a stopwatch and digital lock using Assembly language on MPLabX. Utilized various electrical components to produce a user-friendly product. Adapted to coronavirus restriction and developed the design of an electronic self-driving car that would follow a 20KHz signal along a taped wire. Simulated the circuit and reformed the model accordingly.",
    ],
  },
  {
    id: "54642209-cb40-43b0-ab38-e6f956e5e0cb",
    startTime: 2017,
    endTime: 2019,
    timePeriod: "2017 - 2019",
    type: "education",
    position: "A-Levels",
    company: {
      name: "University Technical College Norfolk",
      href: "https://www.utcn.org.uk/",
    },
    repos: [],
    languages: [],
    description: [
      "Designed a computer case on Fusion 360 based on the NZXTs H700i case. Adapted to new CAD software and dedicated time researching case standards, cooling methods, and component dimensions which involved first-hand measurements.",
    ],
  },
  {
    id: "3fd010c5-c790-478c-bd5e-99dce2e96bd6",
    startTime: 2018,
    endTime: 2018,
    timePeriod: "2018 - 2018",
    type: "work",
    position: "Intern",
    company: {
      name: "East Coast Energy Internship",
      href: "https://www.ogdentrust.com/funding/coastal-energy/",
    },
    repos: [
      {
        name: "Vattenfall",
        href: "https://www.vattenfall.co.uk/",
      },
    ],
    languages: [],
    description: [
      "I Spearheaded the research, design, and manufacture of an electronic careers event stand. Corporate with four engineering firms to deliberate the final design, amend issues, and begin manufacturing. I Innovated the circuit board design by minimizing the number of components, learning different solutions, and cultivating new techniques.",
    ],
  },
  {
    id: "c31b9830-d0b0-44e3-806c-5771dfa41a36",
    startTime: 2017,
    endTime: 2017,
    timePeriod: "2017 - 2017",
    type: "education",
    position: "Team Manager",
    company: { name: "F1 in Schools", href: "https://www.f1inschools.co.uk/" },
    repos: [
      {
        name: "Sprowston Community Academy",
        href: "https://sprowstoncommunityacademy.co.uk/",
      },
    ],
    languages: [],
    description: [
      "I collaborated in designing and manufacturing a Formula One car. This car successfully placed my team first in the East Anglia Regional competition 2017. We acquired the best research and development trophies and ‘best car.’ We proceeded to the National Finals at Silverstone. Reached eighth place and won the best team design award whilst positively representing the school.",
    ],
  },
  {
    id: "96f32e27-bdc2-42e5-8d18-12ada3778892",
    startTime: 2018,
    endTime: 2018,
    timePeriod: "2018 - 2018",
    type: "work",
    position: "Researcher",
    company: {
      name: "Nuffield Foundation",
      href: "https://www.nuffieldfoundation.org/",
    },
    repos: [
      {
        name: "UEA",
        href: "https://www.uea.ac.uk/",
      },
    ],
    languages: [],
    description: [
      "Supported the reach and design of a 3D implantable device to aid in tendon repair. Conducted simulations on seven different scaffold designs using the custom-made material. I created an optimal model by evaluating each design with the specification until. Engaged with biology PhD students and doctorates and, through them, adjusted to the unfamiliar subjects.",
    ],
  },
  {
    id: "580edca2-e2ba-4a74-9e0c-a10b29cbc422",
    startTime: 2021,
    endTime: 2022,
    timePeriod: "2021 - 2022",
    type: "personal",
    position: "Full-Stack Web Developer",
    company: { name: "Independent", href: "/projects" },
    repos: [
      {
        name: "Past Paper Answer Website",
        href: "https://github.com/George-Madeley/UoB-Past-Paper-Answer-Website",
      },
      {
        name: "Ravenous",
        href: "https://github.com/George-Madeley/Ravenous",
      },
      {
        name: "Jamming",
        href: "https://github.com/George-Madeley/Jammming",
      },
      {
        name: "My Portfolio",
        href: "https://github.com/George-Madeley/my-portfolio",
      },
    ],
    languages: [
      "TypeScript",
      "JavaScript",
      "React",
      "Redux",
      "Express.js",
      "Node.js",
      "Vue.js",
      "JQuery",
      "HTML",
      "CSS",
      "Sass",
      "SQL",
    ],
    description: [
      "After completing a series of Codecademy courses in full-stack web development, I gained a solid foundation in various technologies and frameworks. These courses covered topics such as HTML, CSS, JavaScript, React, Redux, Express.js, Node.js, and SQL. Armed with these skills, I was ready to apply my knowledge in real-world scenarios.",
      "At BT, I had the opportunity to work on web app development projects. Leveraging my full-stack web development skills, I contributed to the creation of user-friendly and responsive web applications. I collaborated with a team of developers and designers to implement features, enhance functionality, and ensure seamless user experiences. By applying the principles and techniques I learned from Codecademy, I was able to contribute effectively to the development process.",
      "Additionally, I had the privilege of working with Biodevices Without Borders, where I utilized my full-stack web development skills to create web apps that supported their mission of improving healthcare in undeserved communities. I worked closely with the organization's team to understand their requirements and translate them into functional and intuitive web applications. By leveraging my knowledge of React, Redux, and other technologies, I was able to develop robust and scalable solutions that addressed their specific needs.",
      "Furthermore, I applied my full-stack web development skills to create my own website. Using the technologies and frameworks I learned from Codecademy, I developed a personal portfolio website that showcased my projects, skills, and experiences. This website served as a platform to demonstrate my capabilities as a full-stack web developer and allowed me to showcase my work to potential clients and employers.",
      "Overall, undertaking Codecademy courses in full-stack web development provided me with the necessary skills and knowledge to excel in web app development. I successfully applied these skills in professional settings at BT and Biodevices Without Borders, as well as in creating my own website.",
    ],
  },
  {
    id: "04c45380-6436-43b1-a383-01850f6e5c1d",
    startTime: 2023,
    endTime: 2023,
    timePeriod: "2023 - 2023",
    type: "personal",
    position: "Machine Learning Engineer",
    company: { name: "Independent", href: "/projects" },
    repos: [
      {
        name: "Wordle Solver",
        href: "https://github.com/George-Madeley/AI-Wordle-Solver",
      },
      {
        name: "2048",
        href: "https://github.com/George-Madeley/AI-2048",
      },
      {
        name: "EEG Spike Classification",
        href: "https://github.com/George-Madeley/EE40094-EEG-Spike-Classification-Coursework",
      },
      {
        name: "Genetic Algorithms",
        href: "https://github.com/George-Madeley/EE40094-Genetic-Algorithms-Coursework",
      },
      {
        name: "Neural Networks",
        href: "https://github.com/George-Madeley/EE40094-Neural-Networks-Coursework",
      },
    ],
    languages: [
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Scikit-Learn",
      "TensorFlow",
      "Keras",
    ],
    description: [
      "I undertook a series of Codecademy courses in machine learning to develop my skills in this field. These courses covered topics such as Python, Pandas, NumPy, SciPy, Matplotlib, Scikit-Learn, TensorFlow, and Keras. I also completed a series of projects that allowed me to apply my knowledge in real-world scenarios.",
      "Additionally, I had the privilege of working with Biodevices Without Borders, where I utilized my machine learning skills to develop solutions that supported their mission of improving healthcare in undeserved communities. I worked closely with the organization's team to understand their requirements and translate them into functional and intuitive solutions. By leveraging my knowledge of Python, Pandas, NumPy, SciPy, Matplotlib, Scikit-Learn, TensorFlow, and Keras, I was able to develop robust and scalable solutions that addressed their specific needs.",
      "Furthermore, I applied my machine learning skills to create my own projects. Using the technologies and frameworks I learned from Codecademy, I developed solutions that solved various problems. I developed AI solutions for Wordle and 2048, leveraging my machine learning skills and the knowledge I gained from Codecademy courses. These projects showcased my capabilities as a machine learning engineer and demonstrated my ability to solve complex problems using AI techniques.These projects served as a platform to demonstrate my capabilities as a machine learning engineer and allowed me to showcase my work to potential clients and employers.",
      "Overall, undertaking Codecademy courses in machine learning provided me with the necessary skills and knowledge to excel in this field. I successfully applied these skills in professional settings at BT and Biodevices Without Borders, as well as in creating my own projects.",
    ],
  },
];

export default content;

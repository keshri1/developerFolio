/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sunny Keshri",
  title: "Hi 👋, I'm Sunny Keshri",
  subTitle: emoji(
    "Senior Software Engineer with 8+ years of experience building scalable, data-intensive platforms. Expert in React, Next.js, Node.js, Kafka, and event-driven architectures. Leading frontend initiatives at Wipro for UnitedHealth Group, processing millions of clinical records. Specialized in designing intuitive data-driven UIs and high-performance web applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12o_6i9AnACAnlm-pohpARMtuGVBWP9a5/view?usp=share_link",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/keshri1",
  linkedin: "https://www.linkedin.com/in/keshri1/",
  gmail: "mailtokeshri1@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Can Do",
  subTitle: "SENIOR FULL STACK ENGINEER BUILDING DATA-INTENSIVE PLATFORMS WITH REAL-TIME PROCESSING",
  skills: [
    emoji(
      "⚡ Design & build scalable frontend systems for healthcare and fintech platforms processing millions of records"
    ),
    emoji("⚡ Architect event-driven systems using Kafka, Airflow, and real-time data pipelines with GraphQL"),
    emoji(
      "⚡ Lead frontend teams on global platforms serving UnitedHealth Group, American Express, and PayPal"
    ),
    emoji("⚡ Implement data-driven UIs with TypeScript, React, Next.js, and modern architectural patterns")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fab fa-nextjs"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-arrows-alt"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AKS",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-cog"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-flask"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Siddaganga Institute of Technology, Tumkur, Karnataka, India",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Engineering (B.E.) - Information Science Engineering",
      duration: "August 2014 - June 2018",
      desc: "Aggregate - 8.3/10, First Class with Distinction",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "D.A.V. Public School, Bokaro, Jharkhand, India",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Senior Secondary (XII) - Science",
      duration: "March 2012 - March 2014",
      desc: "Aggregate - 88%, First Class with Distinction",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Bishop Westcott Boys School, Ranchi, Jharkhand, India",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Secondary (X)",
      duration: "March 2011 - March 2012",
      desc: "Aggregate - 85%, First Class with Distinction",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend & UI Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Platforms & Real-time Systems",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Lead",
      company: "Wipro (Client: UnitedHealth Group)",
      // companylogo: require("./assets/images/wriproLogo.png"),
      date: "Feb 2025 - Present",
      desc: "Leading frontend development for ECDH (External Clinical Data Hub), an Optum Data Exchange Platform processing millions of clinical records in real-time.",
      descBullets: [
        "Designed and built a rule-based visual engine for Kafka-driven data routing pipelines, reducing manual cohort identification from 40 minutes to near real-time",
        "Architected a no-code clinical data discovery UI enabling non-technical users to query complex healthcare datasets with FHIR abstractions",
        "Integrated Airflow pipelines with Snowflake data warehouses for automated data processing across enterprise systems",
        "Collaborated with backend and data teams on REST APIs for rule execution and event-driven workflows"
      ]
    },
    {
      role: "Senior Associate (Frontend)",
      company: "Cognizant (Client: American Express)",
      // companylogo: require("./assets/images/cognizantLogo.png"),
      date: "Jan 2022 - Feb 2025",
      desc: "Developed scalable frontend systems for global credit card application platforms across multiple regions.",
      descBullets: [
        "Built reusable UI components and frameworks adopted across international markets",
        "Improved customer onboarding experience, contributing to 20% increase in new registrations",
        "Integrated analytics tools (Adobe Analytics, ContentSquare) for behavioral tracking and UX optimization",
        "Implemented A/B testing strategies to improve conversion rates and user retention",
        "Established Selenium and Cucumber automation frameworks integrated with Jenkins CI/CD pipelines"
      ]
    },
    {
      role: "Programmer Analyst",
      company: "Tata Consultancy Services (Client: PayPal)",
      // companylogo: require("./assets/images/tcsLogo.png"),
      date: "Oct 2020 - Jan 2022",
      desc: "Developed UI for PayPal's internal virtual credit card platform using design system frameworks.",
      descBullets: [
        "Improved application security by identifying and fixing vulnerabilities",
        "Contributed to automation testing and cross-team debugging initiatives",
        "Implemented responsive UI components for multi-region support"
      ]
    },
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      // companylogo: require("./assets/images/tcsLogo.png"),
      date: "Oct 2018 - Jan 2020",
      desc: "Worked on enterprise applications for financial services clients.",
      descBullets: [
        "Contributed to frontend development using React and modern JavaScript frameworks",
        "Participated in automation testing and quality assurance initiatives",
        "Collaborated on building scalable financial applications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8951575173",
  email_address: "mailtokeshri1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

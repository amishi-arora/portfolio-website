import ConnectQuestImage from "./assets/ProjectPhotos/ConnectQuest.png"
import DoAndDoneImage from "./assets/ProjectPhotos/DoAndDone.png"
import HabitHatcheryImage from "./assets/ProjectPhotos/HabitHatchery.png"
import HabitTrackerImage from "./assets/ProjectPhotos/HabitTracker.png"
import MathGamesImage from "./assets/ProjectPhotos/MathGames.png"
import RecipeManagementImage from "./assets/ProjectPhotos/RecipeManagement.png"

export const aboutDescription = [
    "Hi, I'm Amishi! I'm a third-year Computer Science student at the University of British Columbia, passionate about building creative solutions that make a real-world impact.",
    "I am currently interning as a QA Engineer at the BCMEA, where I have gained hands-on experience with tools like Selenium, Playwright, and NUnit. I previously interned as a Software Developer at TeejLab, where I helped enhance the company’s user interface using HTML, CSS, and JavaScript.",
    "My experience across both software development and software testing allows me to deliver reliable, well-tested code.",
    "Outside of work and academics, I enjoy baking, reading, and spending time with my family and friends.",
]

export const projectDescriptions = [
    {
        "title": "Recipe Management System",
        "description": "For my Relational Databases course, I worked with two of my classmates to create a full-stack Recipe Management System. This application allows users to upload, favourite, and review various recipes. Recipes contain details like ingredients, equipment, steps, and tags. Additionally, chefs can host courses to demonstrate specific recipes, which other users can sign up for.",
        "image": RecipeManagementImage,
        "tags": ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "SQL", "Oracle"],
        "gitHubLink": "https://github.com/amishi-arora/Recipe-Management-System",
        "demoLink": null
    },
    {
        "title": "Connect Quest",
        "description": "For a 24-hour hackathon, I collaborated with three other participants to create Connect Quest. Connect Quest is a full-stack application that provides users with daily self-help challenges they can complete to earn points. The project aims to promote self-care through a fun, gamified way. We implemented the frontend with React, the backend with Node.js, and stored our challenges in a MongoDB database. For many of us, including myself, this was our first experience with these technologies, so we learned and adapted as we went. ",
        "image": ConnectQuestImage,
        "tags": ["React", "Node.js", "MongoDB", "Defang.io"],
        "gitHubLink": "https://github.com/amishi-arora/nwHacks-Project",
        "demoLink": "https://devpost.com/software/connect-quest"
    },
    {
        "title": "Habit Hatchery",
        "description": "I created Habit Hatchery with two team members during a 12-hour hackathon. The application allows users to name a fish tank after their habit and populate it with a moving animal or plant for each day they complete the habit. By turning habit tracking into a playful, visual experience, the app encourages users to stay consistent and see their progress grow over time. ",
        "image": HabitHatcheryImage,
        "tags": ["HTML", "CSS", "JavaScript", "Figma"],
        "gitHubLink": "https://github.com/amishi-arora/Habit-Hatchery",
        "demoLink": "https://devpost.com/software/habit-hatchery"
    },
    {
        "title": "Habit Tracker",
        "description": "This habit tracker application was developed in Java using object-oriented programming. It allows users to add and delete habits and check them off daily. I implemented a unit test suite with JUnit, achieving 98% code coverage, and developed a graphical user interface using JavaFX. To allow users to track their progress across multiple sessions, I included a save and load functionality using JSON. ",
        "image": HabitTrackerImage,
        "tags": ["Java", "JUnit", "JavaFX", "JSON", "Test Driven Design", "OOP"],
        "gitHubLink": "https://github.com/amishi-arora/Habit-Tracker-CPSC-210",
        "demoLink": null
    },
    {
        "title": "Do and Done",
        "description": "I developed Do and Done for my Grade 12 capstone project. Inspired by my personal use of to-do list applications, I decided to create my own. Do and Done is a Kanban-style task management system that allows users to add and delete tasks and move them to different sections based on their status. I leveraged libraries such as dragula.js and particles.js to enhance the user experience and implemented user authentication with Firebase. ",
        "image": DoAndDoneImage,
        "tags": ["HTML", "CSS", "JavaScript", "Firebase", "Dragula.js", "Particles.js"],
        "gitHubLink": "https://github.com/amishi-arora/Do-and-Done",
        "demoLink": "https://doanddone23.netlify.app/"
    },
    {
        "title": "Math Games",
        "description": "After taking a programming class in Grade 10, I was inspired to create my very first technical project: a Math Games website. The site allows users to practice addition, subtraction, multiplication, or division by answering as many questions as they can within 30 seconds. At the end of each session, users can view a summary of their correct and incorrect answers. This project sparked my passion for software development, motivating me to pursue it further in university. ",
        "image": MathGamesImage,
        "tags": ["HTML", "CSS", "JavaScript"],
        "gitHubLink": "https://github.com/amishi-arora/Math-Website",
        "demoLink": "https://mathgamesamishi.netlify.app/"
    }
]

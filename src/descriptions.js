import ConnectQuestImage from "./assets/ProjectPhotos/ConnectQuest.png"
import DoAndDoneImage from "./assets/ProjectPhotos/DoAndDone.png"
import HabitHatcheryImage from "./assets/ProjectPhotos/HabitHatchery.png"
import HabitTrackerImage from "./assets/ProjectPhotos/HabitTracker.png"
import MathGamesImage from "./assets/ProjectPhotos/MathGames.png"
import RecipeManagementImage from "./assets/ProjectPhotos/RecipeManagement.png"
import ExamGeneratorImage from "./assets/ProjectPhotos/ExamGenerator.png"

export const aboutDescription = [
    "Hi, I'm Amishi! I'm a third-year Computer Science student at the University of British Columbia, passionate about building creative solutions that make a real-world impact.",
    "I am currently interning as a Software Developer at the BCMEA. Previously, I worked there as a QA Engineer, where I gained experience in software testing and quality assurance. I've also interned as a Software Developer at TeejLab.",
    "My experience across both software development and software testing allows me to deliver reliable, well-tested code.",
    "Outside of tech, I enjoy baking, reading, and spending time with my family and friends.",
]

export const projectDescriptions = [
    {
        "title": "AI Powered Study Tool",
        "description": "This project is a full-stack web application that allows students to upload their study material and generate AI-powered practice exams. Users can customize the exam difficulty, question types, and number of questions, as well as include additional instructions and focus topics. After completing the exam, multiple-choice questions are graded automatically, while short-answer questions are evaluated by AI, with detailed feedback provided for each answer.",
        "image": ExamGeneratorImage,
        "tags": ["React", "Node.js", "Express.js", "AWS DynamoDB", "Gemini AI", "Tailwind CSS"],
        "gitHubLink": "https://github.com/amishi-arora/ai-practice-exam-generator",
        "demoLink": null
    },
    {
        "title": "Connect Quest",
        "description": "Connect Quest is a full-stack web application designed to help university students connect with their campus community through challenges, daily activities, points, and streaks. Users can complete community-focused challenges and submit text or photo evidence, which is validated against challenge requirements in real time using a multimodal AI pipeline.",
        "image": ConnectQuestImage,
        "tags": ["React", "Modular CSS", "Node.js", "AWS", "DynamoDB", "S3", "Cognito", "Bedrock", "Amplify", "Lambda", "API Gateway"],
        "gitHubLink": "https://github.com/amishi-arora/nwHacks-Project",
        "demoLink": "https://devpost.com/software/connect-quest"
    },
    {
        "title": "Recipe Management System",
        "description": "This full-stack recipe management system allows users to upload, favourite, and review various recipes. Recipes contain details like ingredients, equipment, step-by-step instructions, and category tags. Additionally, chefs can host courses to demonstrate specific recipes. Other users can browse available courses and register for them.",
        "image": RecipeManagementImage,
        "tags": ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "SQL", "Oracle"],
        "gitHubLink": "https://github.com/amishi-arora/Recipe-Management-System",
        "demoLink": null
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
        "description": "Inspired by my personal use of to-do list applications, I decided to create my own. Do and Done is a Kanban-style task management system that allows users to add and delete tasks and move them to different sections based on their status. I leveraged libraries such as dragula.js and particles.js to enhance the user experience and implemented user authentication with Firebase. ",
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

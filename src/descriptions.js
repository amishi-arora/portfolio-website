import ConnectQuestImage from "./assets/ProjectPhotos/ConnectQuest.png"
import DoAndDoneImage from "./assets/ProjectPhotos/DoAndDone.png"
import HabitHatcheryImage from "./assets/ProjectPhotos/HabitHatchery.png"
import HabitTrackerImage from "./assets/ProjectPhotos/HabitTracker.png"
import MathGamesImage from "./assets/ProjectPhotos/MathGames.png"
import RecipeManagementImage from "./assets/ProjectPhotos/RecipeManagement.png"
import Examify from "./assets/ProjectPhotos/Examify.png"

export const aboutDescription = [
    "Hi, I'm Amishi! I'm a third-year Computer Science student at the University of British Columbia, passionate about building creative solutions that make a real-world impact.",
    "I've previously interned as a Software Developer and Software Quality Assurance Engineer at the BCMEA, and as a Software Developer at TeejLab. Through these roles, I've gained hands-on experience building software, developing APIs, and creating automated tests and testing frameworks.",
    "My experience across software development and quality assurance allows me to build reliable, well-tested solutions with a strong focus on quality and user experience.",
    "Outside of tech, I enjoy baking, reading, and spending time with my family and friends.",
]

export const projectDescriptions = [
    {
        "title": "Examify - AI Study Tool",
        "description": "Examify is a full-stack AI study tool that helps students turn their study materials into personalized practice exams. Users can upload multiple documents, customize exam difficulty, question types, and time limits, and receive AI-generated feedback on each question. The application provides AI-powered insights that identify students’ strong and weak topics, allowing them to regenerate targeted practice exams focused on their weak topics using a RAG pipeline with document chunking, embeddings, and topic-based vector retrieval.",
        "image": Examify,
        "tags": ["React", "Node.js", "AWS", "DynamoDB", "S3", "Elastic Beanstalk", "Gemini AI", "Gemini Embeddings", "Pinecone", "Tailwind CSS"],
        "gitHubLink": "https://github.com/amishi-arora/ai-practice-exam-generator",
        "demoLink": "http://examify.us-east-2.elasticbeanstalk.com/"
    },
    {
        "title": "Connect Quest",
        "description": "Connect Quest is a full-stack web application designed to help university students connect with their campus community through challenges, daily activities, points, and streaks. Users can complete community-focused challenges and submit text or photo evidence, which is validated against challenge requirements in real time using a multimodal AI pipeline.",
        "image": ConnectQuestImage,
        "tags": ["React", "Modular CSS", "Node.js", "AWS", "DynamoDB", "S3", "Cognito", "Bedrock", "Amplify", "Lambda", "API Gateway"],
        "gitHubLink": "https://github.com/amishi-arora/Connect-Quest",
        "demoLink": "https://main.dx8ly1r352j1q.amplifyapp.com/"
    },
    {
        "title": "Recipe Management System",
        "description": "This full-stack recipe management system allows users to upload, favourite, review, and browse recipes containing ingredients, equipment, step-by-step instructions, and category tags. The application also includes a course management system where chefs can create courses to demonstrate specific recipes, while users can browse available courses and register for them.",
        "image": RecipeManagementImage,
        "tags": ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "SQL", "Oracle"],
        "gitHubLink": "https://github.com/amishi-arora/Recipe-Management-System",
        "demoLink": null
    },
    {
        "title": "Habit Hatchery",
        "description": "Habit Hatchery was created with two other team members during a 12-hour hackathon. The application allows users to name a fish tank after a habit and populate it with a moving animal or plant for each day they complete the habit. By turning habit tracking into a playful, visual experience, the app encourages users to stay consistent and see their progress grow over time.",
        "image": HabitHatcheryImage,
        "tags": ["HTML", "CSS", "JavaScript", "Figma"],
        "gitHubLink": "https://github.com/amishi-arora/Habit-Hatchery",
        "demoLink": "https://devpost.com/software/habit-hatchery"
    },
    {
        "title": "Habit Tracker",
        "description": "This habit tracker application was developed in Java using object-oriented programming. Users can add, delete, and track habits across multiple days. I implemented a JUnit unit test suite, achieving 98% code coverage and developed a graphical user interface using JavaFX. To persist user progress across sessions, I implemented save and load functionality using JSON.",
        "image": HabitTrackerImage,
        "tags": ["Java", "JUnit", "JavaFX", "JSON", "Test-Driven Development", "OOP"],
        "gitHubLink": "https://github.com/amishi-arora/Habit-Tracker-CPSC-210",
        "demoLink": null
    },
    {
        "title": "Do and Done",
        "description": "Do and Done is a Kanban-style task management system that allows users to add, delete, and organize tasks by moving them between sections based on their status. I implemented user authentication with Firebase and leveraged libraries such as Dragula.js for drag-and-drop functionality and Particles.js to enhance the user interface.",
        "image": DoAndDoneImage,
        "tags": ["HTML", "CSS", "JavaScript", "Firebase", "Dragula.js", "Particles.js"],
        "gitHubLink": "https://github.com/amishi-arora/Do-and-Done",
        "demoLink": "https://doanddone23.netlify.app/"
    },
    {
        "title": "Math Games",
        "description": "After taking a programming class in Grade 10, I was inspired to create my first technical project: a Math Games website. The site allows users to practice addition, subtraction, multiplication, or division by answering as many questions as possible within 30 seconds. At the end of each session, users can view a summary of their correct and incorrect answers. This project sparked my passion for software development and motivated me to pursue it further in university.",
        "image": MathGamesImage,
        "tags": ["HTML", "CSS", "JavaScript"],
        "gitHubLink": "https://github.com/amishi-arora/Math-Website",
        "demoLink": "https://mathgamesamishi.netlify.app/"
    }
]

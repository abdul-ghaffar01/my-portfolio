const projectsData = [{
    title: "Personal AI Chatbot with Admin Panel",
    desc: "A fully functional personal AI chatbot integrated into my portfolio website. Built with Node.js and MongoDB for backend training data management and fuzzy matching logic. It features an admin panel for managing intents, responses, and training data, with future plans to integrate OpenAI APIs for improved conversational capabilities.",
    img: "/projects/chatbot.png",
    tools: ["Node.js", "MongoDB", "WebSockets", "React"],
    link: "https://iabdulghaffar.com/chat",
    isCompleted: true
}, {
    title: "Full-stack Portfolio with Dockerized Microservices & DevOps Automation",
    desc: "A fully containerized, microservices-based portfolio website deployed using Docker and automated via CI/CD pipelines and webhooks.\nThis project demonstrates my skills in DevOps, Docker, and automated deployments for scalable web applications. It integrates multiple services (frontend, backend API, chatbot, and Nginx reverse proxy) orchestrated in a production environment.",
    img: "/projects/deployment/architecture.png",
    tools: ["Docker", "Nginx", "GitHub Webhooks", "Ubuntu"],
    link: "/static-projects/portfolio-deployment",
    btnTxt: "Read more",
    isCompleted: true
}, {
    title: "Authentication system",
    desc: "A secure and scalable authentication system built using Golang and Next.js. It features JWT-based user login and registration, role-based access control, and protected API routes. Designed with modularity and performance in mind, this system serves as a robust foundation for modern full-stack web applications.",
    img: "/projects/auth.png",
    tools: ["NextJs", "Golang"],
    link: "https://auth.iabdulghaffar.com",
    isCompleted: false
}, {
    title: "Database management system first semester",
    desc: "Aughr is a console-based database management system (DBMS) designed to handle structured data operations efficiently. It supports basic CRUD (Create, Read, Update, Delete) functionalities, allowing users to store, query, and manage data through a command-line interface. Built with C++, Aughr focuses on simplicity, performance, and a structured approach to data handling.",
    img: "/projects/dbms.png",
    tools: ["C++"],
    link: "/static-projects/console/dbms",
    isCompleted: true
},
{
    title: "Console based E-commerce store",
    desc: "My Console-Based E-Commerce Store was my second-semester project, built entirely using pure Object-Oriented Programming (OOP) principles. It featured a modular design with classes for users, products, and carts, along with file handling for data persistence. The system allowed users to browse products, add them to the cart, and proceed with purchases, ensuring an interactive shopping experience within a terminal environment.",
    img: "/projects/console-ecom.png",
    tools: ["C++"],
    link: "/static-projects/console/cbes",
    isCompleted: true
},{
    title: "Instagram home page clone",
    desc: "I built an Instagram home page clone using Tailwind CSS, designed specifically for laptop screens. While it isn’t fully responsive, the layout is pixel-perfect, closely mirroring Instagram’s design with a clean and structured UI. The project showcases my ability to replicate modern interfaces with precision and attention to detail",
    img: "/projects/instaclone.png",
    tools: ["TailwindCss", "Html5"],
    link: "/static-projects/insta-clone-using-tailwindcss",
    isCompleted: true
}, {
    title: "Facebook home page clone",
    desc: "A static recreation of Facebook’s homepage built using Tailwind CSS. This clone replicates the classic Facebook layout, including the navbar, sidebar, news feed, and story section. While visually similar, it lacks responsiveness, meaning it works well on larger screens but does not adapt to smaller devices like phones or tablets. Ideal for exploring Tailwind styling and component structuring! 🚀",
    img: "/projects/facebookclone.png",
    tools: ["TailwindCss", "Html5"],
    link: "/static-projects/facebook-clone-using-tailwindcss",
    isCompleted: true
}]

export default projectsData;

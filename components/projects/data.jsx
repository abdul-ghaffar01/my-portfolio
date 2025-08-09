const projectsData = [
    {
        id: "p1",
        title: "Personal AI Chatbot with Admin Panel",
        short: "A portfolio-integrated AI chatbot with an admin panel for managing intents and responses.",
        img: "/projects/chatbot.png",
        featured: true,
        status: "completed",
        tags: ["Node.js", "MongoDB", "WebSockets", "React"],
        date: "2024-05-10",
        github: null,
        demo: "https://iabdulghaffar.com/chat",
        docs: {
            summary:
                "A fully functional AI chatbot built with Node.js and MongoDB for backend training data management and fuzzy matching logic.",
            how: [
                "Integrated chatbot into portfolio website.",
                "Built admin panel for managing intents, responses, and training data.",
                "Planned future integration with OpenAI APIs."
            ],
            architecture: [
                "Frontend: React + WebSockets",
                "Backend: Node.js + MongoDB",
                "Training: Custom fuzzy matching logic"
            ],
            images: ["/projects/chatbot.png"],
            long: `## Why I built this\nI wanted a personal assistant integrated into my portfolio...`
        }
    },
    {
        id: "p2",
        title: "Full-stack Portfolio with Dockerized Microservices & DevOps Automation",
        short: "Containerized microservices portfolio deployed with CI/CD and Docker.",
        img: "/projects/deployment/architecture.png",
        featured: true,
        status: "completed",
        tags: [
            "Docker", "Nginx", "GitHub Webhooks", "Ubuntu",
            "Docker Compose", "Certbot (SSL)", "Shell Scripting", "Node.js", "Next.js"
        ],
        date: "2024-03-22",
        github: null,
        demo: "/static-projects/portfolio-deployment",
        docs: {
            summary: "This project showcases the end-to-end deployment of my microservices-based portfolio website using a full DevOps pipeline. It includes multiple services (frontend, backend API, and chatbot) containerized with Docker and deployed on an Ubuntu VPS. Automated deployments are handled via GitHub Webhooks to ensure zero downtime.",
            how: [
                "Containerized frontend, backend API, and chatbot services.",
                "Configured Nginx reverse proxy with SSL using Certbot.",
                "Deployed services on Ubuntu VPS using Docker Compose.",
                "Automated deployment using GitHub Webhooks and shell scripts.",
                "Ensured zero downtime with health checks and rolling restarts."
            ],
            architecture: [
                "Frontend: React / Next.js",
                "Backend: Node.js API",
                "Reverse Proxy: Nginx with SSL",
                "Deployment: Docker + Docker Compose on Ubuntu",
                "Automation: GitHub Webhooks + Shell Scripting"
            ],
            challenges: [
                {
                    title: "Container Networking Issues",
                    solution: "Created a dedicated Docker network and used container service names instead of localhost to enable communication."
                },
                {
                    title: "SSL & Nginx Configuration",
                    solution: "Automated SSL setup using Certbot and configured Nginx for proxy forwarding and WebSocket support."
                },
                {
                    title: "Automated Deployment",
                    solution: "Used GitHub Webhooks and a server-side Node.js script to rebuild and restart containers on every push."
                },
                {
                    title: "Downtime During Rebuilds",
                    solution: "Implemented zero-downtime deployments by spinning up new containers before removing the old ones."
                }
            ],
            images: [
                "/projects/deployment/architecture.png",
                "/projects/deployment/docker-containers.png",
                "/projects/deployment/nginx-config.png"
            ],
            long: `## Why I built this
                    I wanted to deepen my understanding of DevOps workflows, CI/CD pipelines, and scalable microservices deployments.  
                    This project allowed me to integrate multiple services, automate deployments, and ensure high availability, all while running on my own VPS.`
        }
    },
    {
        id: "p3",
        title: "Authentication System",
        short: "JWT-based authentication system with role-based access control.",
        img: "/projects/auth.png",
        featured: false,
        status: "ongoing",
        tags: ["Next.js", "Golang", "Authentication", "JWT"],
        date: "2024-06-15",
        github: null,
        demo: "https://auth.iabdulghaffar.com",
        docs: {
            summary:
                "A secure authentication system with modular design for scalability.",
            how: [
                "Implemented JWT authentication for login and registration.",
                "Added role-based access control.",
                "Secured API routes using middleware."
            ],
            architecture: [
                "Frontend: Next.js",
                "Backend: Golang API",
                "Auth: JWT + RBAC"
            ],
            images: ["/projects/auth.png"],
            long: `## Why I built this\nTo create a reusable authentication boilerplate for modern apps...`
        }
    },
    {
        id: "p4",
        title: "Aughr — Custom DBMS",
        short: "A console-based database management system for structured data operations.",
        img: "/projects/dbms.png",
        featured: true,
        status: "completed",
        tags: ["C++", "DBMS", "CLI"],
        date: "2023-12-01",
        github: null,
        demo: "/static-projects/console/dbms",
        docs: {
            summary:
                "A simple DBMS supporting CRUD operations through a CLI interface.",
            how: [
                "Implemented CRUD functionality.",
                "Designed structured data storage system.",
                "Optimized performance for console-based interaction."
            ],
            architecture: [
                "Frontend: CLI",
                "Backend: C++ data structures"
            ],
            images: ["/projects/dbms.png"],
            long: `## Why I built this\nTo learn DBMS internals during my first semester...`
        }
    },
    {
        id: "p5",
        title: "Console Based E-commerce Store",
        short: "A terminal-based OOP e-commerce system with file persistence.",
        img: "/projects/console-ecom.png",
        featured: false,
        status: "completed",
        tags: ["C++", "OOP", "File Handling"],
        date: "2024-01-20",
        github: null,
        demo: "/static-projects/console/cbes",
        docs: {
            summary:
                "An OOP-based e-commerce store with product browsing, cart, and purchase flow.",
            how: [
                "Designed modular OOP classes for products, users, and carts.",
                "Implemented file handling for data storage.",
                "Enabled interactive CLI shopping experience."
            ],
            architecture: [
                "Frontend: CLI",
                "Backend: C++ with file storage"
            ],
            images: ["/projects/console-ecom.png"],
            long: `## Why I built this\nTo strengthen OOP and file handling skills in C++...`
        }
    },
    {
        id: "p6",
        title: "Instagram Home Page Clone",
        short: "Static clone of Instagram's homepage built with Tailwind CSS.",
        img: "/projects/instaclone.png",
        featured: false,
        status: "completed",
        tags: ["Tailwind CSS", "HTML5", "UI Clone"],
        date: "2023-09-14",
        github: null,
        demo: "/static-projects/insta-clone-using-tailwindcss",
        docs: {
            summary:
                "A pixel-perfect Instagram homepage UI for laptop screens.",
            how: [
                "Used Tailwind CSS for styling.",
                "Replicated Instagram's layout precisely.",
                "Designed for static, non-responsive display."
            ],
            architecture: [
                "Frontend: HTML + Tailwind CSS"
            ],
            images: ["/projects/instaclone.png"],
            long: `## Why I built this\nTo practice replicating modern UI designs with Tailwind CSS...`
        }
    },
    {
        id: "p7",
        title: "Facebook Home Page Clone",
        short: "Static Facebook UI clone made with Tailwind CSS.",
        img: "/projects/facebookclone.png",
        featured: false,
        status: "archived",
        tags: ["Tailwind CSS", "HTML5", "UI Clone"],
        date: "2023-08-25",
        github: null,
        demo: "/static-projects/facebook-clone-using-tailwindcss",
        docs: {
            summary:
                "A visual clone of Facebook's homepage for desktop layouts.",
            how: [
                "Styled with Tailwind CSS.",
                "Recreated navbar, sidebar, feed, and stories section.",
                "Built for static, large-screen display."
            ],
            architecture: [
                "Frontend: HTML + Tailwind CSS"
            ],
            images: ["/projects/facebookclone.png"],
            long: `## Why I built this\nTo improve UI layout skills with Tailwind CSS...`
        }
    }
];

export default projectsData;


// const projectsData = [{
//     title: "Personal AI Chatbot with Admin Panel",
//     desc: "A fully functional personal AI chatbot integrated into my portfolio website. Built with Node.js and MongoDB for backend training data management and fuzzy matching logic. It features an admin panel for managing intents, responses, and training data, with future plans to integrate OpenAI APIs for improved conversational capabilities.",
//     img: "/projects/chatbot.png",
//     tools: ["Node.js", "MongoDB", "WebSockets", "React"],
//     link: "https://iabdulghaffar.com/chat",
//     isCompleted: true
// }, {
//     title: "Full-stack Portfolio with Dockerized Microservices & DevOps Automation",
//     desc: "A fully containerized, microservices-based portfolio website deployed using Docker and automated via CI/CD pipelines and webhooks.\nThis project demonstrates my skills in DevOps, Docker, and automated deployments for scalable web applications. It integrates multiple services (frontend, backend API, chatbot, and Nginx reverse proxy) orchestrated in a production environment.",
//     img: "/projects/deployment/architecture.png",
//     tools: ["Docker", "Nginx", "GitHub Webhooks", "Ubuntu"],
//     link: "/static-projects/portfolio-deployment",
//     btnTxt: "Read more",
//     isCompleted: true
// }, {
//     title: "Authentication system",
//     desc: "A secure and scalable authentication system built using Golang and Next.js. It features JWT-based user login and registration, role-based access control, and protected API routes. Designed with modularity and performance in mind, this system serves as a robust foundation for modern full-stack web applications.",
//     img: "/projects/auth.png",
//     tools: ["NextJs", "Golang"],
//     link: "https://auth.iabdulghaffar.com",
//     isCompleted: false
// }, {
//     title: "Database management system first semester",
//     desc: "Aughr is a console-based database management system (DBMS) designed to handle structured data operations efficiently. It supports basic CRUD (Create, Read, Update, Delete) functionalities, allowing users to store, query, and manage data through a command-line interface. Built with C++, Aughr focuses on simplicity, performance, and a structured approach to data handling.",
//     img: "/projects/dbms.png",
//     tools: ["C++"],
//     link: "/static-projects/console/dbms",
//     isCompleted: true
// },
// {
//     title: "Console based E-commerce store",
//     desc: "My Console-Based E-Commerce Store was my second-semester project, built entirely using pure Object-Oriented Programming (OOP) principles. It featured a modular design with classes for users, products, and carts, along with file handling for data persistence. The system allowed users to browse products, add them to the cart, and proceed with purchases, ensuring an interactive shopping experience within a terminal environment.",
//     img: "/projects/console-ecom.png",
//     tools: ["C++"],
//     link: "/static-projects/console/cbes",
//     isCompleted: true
// },{
//     title: "Instagram home page clone",
//     desc: "I built an Instagram home page clone using Tailwind CSS, designed specifically for laptop screens. While it isn’t fully responsive, the layout is pixel-perfect, closely mirroring Instagram’s design with a clean and structured UI. The project showcases my ability to replicate modern interfaces with precision and attention to detail",
//     img: "/projects/instaclone.png",
//     tools: ["TailwindCss", "Html5"],
//     link: "/static-projects/insta-clone-using-tailwindcss",
//     isCompleted: true
// }, {
//     title: "Facebook home page clone",
//     desc: "A static recreation of Facebook’s homepage built using Tailwind CSS. This clone replicates the classic Facebook layout, including the navbar, sidebar, news feed, and story section. While visually similar, it lacks responsiveness, meaning it works well on larger screens but does not adapt to smaller devices like phones or tablets. Ideal for exploring Tailwind styling and component structuring! 🚀",
//     img: "/projects/facebookclone.png",
//     tools: ["TailwindCss", "Html5"],
//     link: "/static-projects/facebook-clone-using-tailwindcss",
//     isCompleted: true
// }]

// export default projectsData;

const projectsData = [
    {
        id: "p8",
        title: "Modern Blog System with Admin Dashboard",
        short: "A feature-rich blogging platform with categories, featured posts, modern UI, and automated deployments.",
        img: "/projects/blogs.png",
        featured: true,
        status: "ongoing",
        tags: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
        date: "2025-08-13",
        github: "https://github.com/abdul-ghaffar01/blog-system",
        demo: "https://blogs.iabdulghaffar.com",
        docs: {
            summary:
                "A modern blog platform built with Next.js and Node.js, featuring category-based browsing, featured blog carousel, and secure admin dashboard for content management.",
            how: [
                "Built responsive UI with TailwindCSS and theme variables for light/dark mode.",
                "Developed admin panel for adding, editing, and deleting blogs and categories.",
                "Integrated GitHub webhooks for automated deployments.",
                "Implemented modern blog details page using unique slugs."
            ],
            architecture: [
                "Frontend: Next.js + TailwindCSS",
                "Backend: Node.js + Express + MongoDB",
                "Deployment: Nginx reverse proxy + PM2 + GitHub Webhooks"
            ],
            images: ["/projects/blogs.png"]
        }
    }, {
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
            images: [
                "/projects/deployment/architecture.png",
                "/projects/deployment/docker-containers.png",
                "/projects/deployment/nginx-config.png"
            ],


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

        }
    },
    {
        id: "p6",
        title: "Instagram Home Page Clone",
        short: "Static clone of Instagram's homepage built with Tailwind CSS.",
        img: "/projects/instaclone.png",
        featured: false,
        status: "arvhieved",
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

        }
    }
];

export default projectsData;


"use client"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import { ArrowDown, ArrowDownNarrowWide, ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";


export default function WebDevelopment() {

    const collapsibleData = [
        {
            title: "🌱 1. Understanding the Web (Basics of How the Internet Works)",
            description:
                "Before diving into coding, it's crucial to understand how the web works and how browsers interpret web pages.",
            keyConcepts: [
                "What is the Internet and how it works (HTTP, HTTPS, DNS, Hosting, IP, Domain)",
                "How browsers render web pages (Rendering Engines: Chrome’s Blink, Firefox’s Gecko)",
                "What is a Client-Server Model?",
                "How does a website load? (Requests, Responses, and the Role of Servers)",
                "Difference between Frontend vs Backend vs Full-Stack Development",
            ],
            resources: [
                { text: "How the Internet Works – MDN Web Docs", link: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work" }
            ],
        },
        {
            title: "📜 2. HTML – The Structure of a Webpage",
            description:
                "HTML (HyperText Markup Language) is the skeleton of any web page. Mastering it will help you build a strong foundation for web development.",
            keyConcepts: [
                "Basic HTML Elements: <html>, <head>, <title>, <body>",
                "Headings, Paragraphs, Line Breaks: <h1>-<h6>, <p>, <br>",
                "Lists & Tables: <ul>, <ol>, <li>, <table>, <tr>, <td>, <th>",
                "Forms & Inputs: <form>, <input> types, <textarea>, <select>",
                "Semantic HTML: <header>, <nav>, <section>, <article>, <footer>",
                "Hyperlinks & Images: <a>, <img>",
                "HTML5 Features: <video>, <audio>, <canvas>, <iframe>",
            ],
            resources: [
                { text: "HTML Basics – W3Schools", link: "https://www.w3schools.com/html/" },
                { text: "MDN Web Docs – HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" }
            ],
        },
        {
            title: "🎨 3. CSS – Styling the Web",
            description:
                "CSS (Cascading Style Sheets) adds design to your HTML structure, making web pages visually appealing.",
            keyConcepts: [
                "CSS Selectors & Properties: color, background, margin, padding, font-size, text-align",
                "Box Model: content, padding, border, margin, box-sizing",
                "Flexbox & Grid for Layout Design",
                "Positioning & Z-index: static, relative, absolute, fixed, sticky",
                "Responsive Design with Media Queries",
                "CSS Animations & Transitions",
            ],
            resources: [
                { text: "CSS Basics – CSS Tricks", link: "https://css-tricks.com/" },
                { text: "Flexbox Froggy (Game to Learn Flexbox)", link: "https://flexboxfroggy.com/" },
                { text: "Grid Garden (Learn CSS Grid)", link: "https://cssgridgarden.com/" }
            ],
        },
        {
            title: "⚡ 4. JavaScript – Making Web Pages Interactive",
            description:
                "JavaScript is the brain of a webpage, making it dynamic and interactive.",
            keyConcepts: [
                "JavaScript Basics: var, let, const, console.log(), data types",
                "Operators & Conditionals: if, else, switch, === vs ==",
                "Loops & Functions: for, while, do-while, arrow functions",
                "DOM Manipulation: document.getElementById(), querySelector()",
                "ES6 Features: Destructuring, Spread & Rest Operators",
            ],
            resources: [
                { text: "JavaScript Basics – MDN", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                { text: "Eloquent JavaScript (Book)", link: "https://eloquentjavascript.net/" }
            ],
        },
        {
            title: "🛠 5. Developer Tools & Git/GitHub",
            description:
                "A good developer knows how to debug and collaborate effectively using developer tools and version control.",
            keyConcepts: [
                "Chrome DevTools: Inspect Elements, Debugging, Network Analysis",
                "Git Basics: git init, git add, git commit, git push",
                "GitHub Repositories & Hosting Projects",
                "Code Editors: VS Code, Extensions (Prettier, Live Server, GitLens)",
            ],
            resources: [
                { text: "GitHub Learning Lab", link: "https://lab.github.com/" },
                { text: "Git & GitHub Crash Course – YouTube", link: "https://www.youtube.com/watch?v=SWYqp7iY_Tc" }
            ],
        }
    ];

    const frontendDevelopmentRoadmap = [
        {
            title: "🎨 1. CSS Frameworks & Preprocessors",
            description:
                "Mastering CSS frameworks and preprocessors will help you style web applications efficiently.",
            keyConcepts: [
                "Tailwind CSS 🔥 (Popular in 2025)",
                "SCSS/SASS (Preprocessors for better styling management)",
            ],
            resources: [
                { text: "Tailwind CSS Docs", link: "https://tailwindcss.com/docs" },
                { text: "SCSS/SASS Guide", link: "https://sass-lang.com/guide" }
            ],
        },
        {
            title: "⚡ 2. JavaScript Deep Dive",
            description:
                "Enhance your JavaScript skills to handle complex functionalities and asynchronous operations.",
            keyConcepts: [
                "Asynchronous JS (Promises, Async/Await)",
                "Fetch API / Axios (for HTTP requests)",
                "Modules & Webpack/Vite (Module bundlers for optimized performance)",
            ],
            resources: [
                { text: "JavaScript Promises – MDN", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" },
                { text: "Fetch API Guide", link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
                { text: "Webpack Documentation", link: "https://webpack.js.org/" }
            ],
        },
        {
            title: "🚀 3. Frontend Frameworks/Libraries",
            description:
                "Learn React.js and Next.js to build dynamic, scalable frontend applications.",
            keyConcepts: [
                "React.js (Most in demand)",
                "Hooks (useState, useEffect, useContext)",
                "React Router, State Management (Zustand, Redux)",
                "Server Components & Suspense (Latest in 2025)",
                "Next.js (For full-stack capabilities)",
                "Server Actions, Edge Functions",
            ],
            resources: [
                { text: "React Documentation", link: "https://react.dev/" },
                { text: "Next.js Docs", link: "https://nextjs.org/docs" },
                { text: "Redux Guide", link: "https://redux.js.org/" }
            ],
        }
    ];

    const backendDevelopmentRoadmap = [
        {
            title: "🚀 1. Node.js & Express.js – Building the Server",
            description:
                "Node.js allows JavaScript to run on the server, and Express.js is a minimal framework that simplifies API development.",
            keyConcepts: [
                "Understanding Node.js runtime and event-driven architecture",
                "Setting up an Express.js server",
                "Creating RESTful APIs",
                "Middleware functions (Logging, Error Handling, Authentication)",
                "Handling Requests & Responses",
                "WebSockets for real-time communication",
                "File uploads with Multer",
            ],
            resources: [
                { text: "Node.js Documentation", link: "https://nodejs.org/en/docs/" },
                { text: "Express.js Guide", link: "https://expressjs.com/en/guide/routing.html" }
            ],
        },
        {
            title: "🗄️ 2. Databases – Storing and Managing Data",
            description:
                "Choosing the right database is crucial for efficient data storage and retrieval. Learn SQL for relational databases and NoSQL for flexible document-based storage.",
            keyConcepts: [
                "SQL (PostgreSQL, MySQL): Tables, Relationships, Joins, Indexing",
                "NoSQL (MongoDB, Firebase): Collections, Documents, Schema Design",
                "ORMs & ODMs: Prisma for SQL, Mongoose for MongoDB",
                "Database Optimization and Indexing",
                "Connecting Express.js to a Database",
                "CRUD Operations (Create, Read, Update, Delete)",
            ],
            resources: [
                { text: "PostgreSQL Documentation", link: "https://www.postgresql.org/docs/" },
                { text: "MongoDB University", link: "https://university.mongodb.com/" }
            ],
        },
        {
            title: "🔒 3. Authentication & Security – Securing Your Backend",
            description:
                "Securing your backend ensures user data protection and prevents unauthorized access.",
            keyConcepts: [
                "JWT Authentication (JSON Web Tokens)",
                "OAuth Authentication (Google, Facebook, GitHub Login)",
                "Password Hashing with bcrypt",
                "CORS (Cross-Origin Resource Sharing) and Security Headers",
                "Rate Limiting & Preventing API Abuse",
                "Input Validation and SQL Injection Prevention",
            ],
            resources: [
                { text: "JWT Guide", link: "https://jwt.io/introduction/" },
                { text: "OAuth 2.0 Overview", link: "https://oauth.net/2/" }
            ],
        },
        {
            title: "🔗 4. Full-Stack Integration – Connecting Frontend & Backend",
            description:
                "Once the backend is built, integrating it with a frontend (React, Next.js) completes the full-stack workflow.",
            keyConcepts: [
                "Connecting React/Next.js with Express.js API",
                "Fetching Data using Fetch API & Axios",
                "Server Actions & API Routes in Next.js",
                "State Management for API Calls (Zustand, Redux, React Query)",
                "Authentication Flow: Login, Logout, Protecting Routes",
            ],
            resources: [
                { text: "Next.js API Routes Guide", link: "https://nextjs.org/docs/api-routes/introduction" },
                { text: "Axios HTTP Requests", link: "https://axios-http.com/docs/intro" }
            ],
        }
    ];

    const advancedDevOpsRoadmap = [
        {
            title: "🚀 1. GraphQL – Efficient Data Fetching (Optional but Powerful)",
            description:
                "GraphQL provides a flexible and efficient alternative to REST APIs, allowing clients to request only the data they need.",
            keyConcepts: [
                "Understanding GraphQL vs REST",
                "Setting up a GraphQL Server",
                "Writing Queries and Mutations",
                "Using Apollo Client for Frontend Integration",
                "Optimizing GraphQL Requests for Performance",
            ],
            resources: [
                { text: "GraphQL Official Docs", link: "https://graphql.org/learn/" },
                { text: "Apollo Client Guide", link: "https://www.apollographql.com/docs/react/" }
            ],
        },
        {
            title: "📦 2. State Management – Handling Large Applications",
            description:
                "For large-scale applications, efficient state management is crucial to maintain performance and maintainability.",
            keyConcepts: [
                "Redux: State Management with Actions & Reducers",
                "Zustand: Lightweight and Simpler Alternative to Redux",
                "React Query (TanStack Query): Optimized API Data Fetching & Caching",
                "When to Use State Management Libraries vs Native React State",
            ],
            resources: [
                { text: "Redux Toolkit Guide", link: "https://redux-toolkit.js.org/" },
                { text: "Zustand Docs", link: "https://zustand-demo.pmnd.rs/" }
            ],
        },
        {
            title: "🛠️ 3. Microservices & Serverless – Scalable Architecture",
            description:
                "Microservices architecture helps in breaking applications into smaller, independent services, while serverless functions enable cost-efficient, scalable computing.",
            keyConcepts: [
                "Understanding Microservices Architecture",
                "Containerization with Docker & Orchestration with Kubernetes (Optional but Future-Proof)",
                "Serverless Computing: AWS Lambda, Vercel Functions, Netlify Functions",
                "Deploying & Managing Serverless APIs",
            ],
            resources: [
                { text: "Docker Introduction", link: "https://docs.docker.com/get-started/" },
                { text: "AWS Lambda Guide", link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" }
            ],
        },
        {
            title: "✅ 4. CI/CD & Testing – Automating & Ensuring Quality",
            description:
                "Continuous Integration and Deployment (CI/CD) automates the testing and deployment process, ensuring reliability and efficiency.",
            keyConcepts: [
                "Unit & Integration Testing with Jest & Mocha",
                "End-to-End Testing with Cypress",
                "Setting up GitHub Actions for Automated CI/CD Pipelines",
                "Linting & Formatting (ESLint, Prettier)",
            ],
            resources: [
                { text: "Jest Testing Guide", link: "https://jestjs.io/docs/getting-started" },
                { text: "GitHub Actions Docs", link: "https://docs.github.com/en/actions" }
            ],
        },
        {
            title: "⚡ 5. Web Performance Optimization – Speed & Efficiency",
            description:
                "Optimizing web performance enhances user experience, improves SEO rankings, and reduces load times.",
            keyConcepts: [
                "Lazy Loading Images & Components",
                "Code Splitting & Bundle Optimization",
                "Using CDNs like Cloudflare for Faster Asset Delivery",
                "Server-Side Caching with Redis & Client-Side Caching Strategies",
            ],
            resources: [
                { text: "Web Performance Optimization Guide", link: "https://web.dev/performance/" },
                { text: "Cloudflare CDN Docs", link: "https://developers.cloudflare.com/cdn/" }
            ],
        },

    ];

    const projectsAndPortfolioRoadmap = [
        {
            title: "📝 1. Blog CMS (MERN or Next.js + Prisma)",
            description:
                "A full-fledged Content Management System where users can create, edit, and manage blog posts with authentication and SEO optimization.",
            keyConcepts: [
                "User Authentication (JWT, OAuth)",
                "Rich Text Editor Integration",
                "SEO Optimization & Meta Tags",
                "Image Uploads & Storage (Cloudinary, Firebase Storage)",
                "Database Management (MongoDB + Mongoose or Prisma + PostgreSQL)"
            ],
            resources: [
                { text: "Next.js SEO Guide", link: "https://nextjs.org/docs/api-reference/next-seo" },
                { text: "Prisma ORM Guide", link: "https://www.prisma.io/docs/" }
            ],
        },
        {
            title: "🤖 2. AI-Powered Chatbot (OpenAI API + Next.js)",
            description:
                "A chatbot that uses AI models (like GPT-4) to generate responses based on user inputs, with custom fine-tuning options.",
            keyConcepts: [
                "Integrating OpenAI API",
                "Streaming API Responses",
                "Chat History Persistence (LocalStorage/Database)",
                "Frontend UI with TailwindCSS & React",
                "Fine-tuning AI responses based on context"
            ],
            resources: [
                { text: "OpenAI API Docs", link: "https://platform.openai.com/docs/" },
                { text: "Next.js Server Actions", link: "https://nextjs.org/docs/app/api-reference/functions/server-actions" }
            ],
        },
        {
            title: "🛒 3. E-commerce Store (Stripe Payment Integration)",
            description:
                "A fully functional online store with product listings, shopping cart, and secure payment processing using Stripe.",
            keyConcepts: [
                "Product Management (CRUD Operations)",
                "Cart & Checkout Functionality",
                "Payment Integration with Stripe",
                "Order Management & Database Storage",
                "Optimizing Performance & Security"
            ],
            resources: [
                { text: "Stripe Payment Docs", link: "https://stripe.com/docs/payments" },
                { text: "Next.js API Routes for Payments", link: "https://nextjs.org/docs/api-routes/introduction" }
            ],
        },
        {
            title: "💬 4. Real-time Chat App (WebSockets)",
            description:
                "A real-time chat application where users can send messages instantly using WebSockets.",
            keyConcepts: [
                "WebSockets & Socket.IO",
                "Real-time Messaging & Notifications",
                "User Authentication & Private Chats",
                "Database Storage (MongoDB, Firebase, PostgreSQL)",
                "Optimized UI/UX for Chat Experience"
            ],
            resources: [
                { text: "Socket.IO Docs", link: "https://socket.io/docs/v4/" },
                { text: "Building Real-time Apps with WebSockets", link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" }
            ],
        },
        {
            title: "📊 5. SaaS Dashboard (Charts, Authentication, Data Visualization)",
            description:
                "A data-driven SaaS dashboard for visualizing statistics, user analytics, and authentication with protected routes.",
            keyConcepts: [
                "Data Visualization with Chart.js / Recharts",
                "User Authentication & Role-based Access Control",
                "Database Storage & Fetching Data Efficiently",
                "State Management (Redux, Zustand, React Query)",
                "Optimizing Performance & UI Design"
            ],
            resources: [
                { text: "Chart.js Docs", link: "https://www.chartjs.org/docs/latest/" },
                { text: "Building SaaS Apps with Next.js", link: "https://nextjs.org/docs" }
            ],
        }
    ];








    const data = [
        {
            title: "Foundation",
            content: (
                <div>
                    {collapsibleData.map((section, index) => (
                        <Collapsible key={index}>
                            <CollapsibleTrigger className="text-xl p-3 mt-2 rounded bg-[#0C0C0D]">
                                {section.title} <ArrowDown className="inline" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <p className='text-xl text-left relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>
                                    {section.description}
                                </p>
                                <TextGenerateEffect className='text-4xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500' words="Key Concepts" />
                                <ul>
                                    {section.keyConcepts.map((concept, i) => (
                                        <li key={i} className="text-xl text-left relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
                                            <ChevronsRight className="inline text-white" /> {concept}
                                        </li>
                                    ))}
                                </ul>
                                <TextGenerateEffect className='text-4xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500' words="🎯 Resources to Learn:" />
                                <ul>
                                    {section.resources.map((resource, i) => (
                                        <li key={i}>
                                            <a href={resource.link}>{resource.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}

                </div>
            ),
        },
        {
            title: "Frontend Development",
            content: (
                <div>
                    {frontendDevelopmentRoadmap.map((section, index) => (
                        <Collapsible key={index}>
                            <CollapsibleTrigger className="text-xl p-3 mt-2 rounded bg-[#0C0C0D]">
                                {section.title} <ArrowDown className="inline" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <p className='text-xl text-left relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>
                                    {section.description}
                                </p>
                                <TextGenerateEffect className='text-4xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500' words="Key Concepts" />
                                <ul>
                                    {section.keyConcepts.map((concept, i) => (
                                        <li key={i} className="text-xl text-left relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
                                            <ChevronsRight className="inline text-white" /> {concept}
                                        </li>
                                    ))}
                                </ul>
                                <TextGenerateEffect className='text-4xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500' words="🎯 Resources to Learn:" />
                                <ul>
                                    {section.resources.map((resource, i) => (
                                        <li key={i}>
                                            <a href={resource.link}>{resource.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}

                </div>
            ),
        },
        {
            title: "Backend Development",
            content: (
                <div>
                    {backendDevelopmentRoadmap.map((section, index) => (
                        <Collapsible key={index}>
                            <CollapsibleTrigger className="text-xl p-3 mt-2 rounded bg-[#0C0C0D]">
                                {section.title} <ArrowDown className="inline" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <p className='text-xl text-left relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>
                                    {section.description}
                                </p>
                                <TextGenerateEffect className='text-4xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500' words="Key Concepts" />
                                <ul>
                                    {section.keyConcepts.map((concept, i) => (
                                        <li key={i} className="text-xl text-left relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
                                            <ChevronsRight className="inline text-white" /> {concept}
                                        </li>
                                    ))}
                                </ul>
                                <TextGenerateEffect className='text-4xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500' words="🎯 Resources to Learn:" />
                                <ul>
                                    {section.resources.map((resource, i) => (
                                        <li key={i}>
                                            <a href={resource.link}>{resource.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}

                </div>
            ),
        },
        {
            title: "Advance DevOps",
            content: (
                <div>
                    {advancedDevOpsRoadmap.map((section, index) => (
                        <Collapsible key={index}>
                            <CollapsibleTrigger className="text-xl p-3 mt-2 rounded bg-[#0C0C0D]">
                                {section.title} <ArrowDown className="inline" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <p className='text-xl text-left relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>
                                    {section.description}
                                </p>
                                <TextGenerateEffect className='text-4xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500' words="Key Concepts" />
                                <ul>
                                    {section.keyConcepts.map((concept, i) => (
                                        <li key={i} className="text-xl text-left relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
                                            <ChevronsRight className="inline text-white" /> {concept}
                                        </li>
                                    ))}
                                </ul>
                                <TextGenerateEffect className='text-4xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500' words="🎯 Resources to Learn:" />
                                <ul>
                                    {section.resources.map((resource, i) => (
                                        <li key={i}>
                                            <a href={resource.link}>{resource.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}

                </div>
            ),
        },
        {
            title: "Projects",
            content: (
                <div>
                    {projectsAndPortfolioRoadmap.map((section, index) => (
                        <Collapsible key={index}>
                            <CollapsibleTrigger className="text-xl p-3 mt-2 rounded bg-[#0C0C0D]">
                                {section.title} <ArrowDown className="inline" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <p className='text-xl text-left relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2'>
                                    {section.description}
                                </p>
                                <TextGenerateEffect className='text-4xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500' words="Key Concepts" />
                                <ul>
                                    {section.keyConcepts.map((concept, i) => (
                                        <li key={i} className="text-xl text-left relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
                                            <ChevronsRight className="inline text-white" /> {concept}
                                        </li>
                                    ))}
                                </ul>
                                <TextGenerateEffect className='text-4xl text-left font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500' words="🎯 Resources to Learn:" />
                                <ul>
                                    {section.resources.map((resource, i) => (
                                        <li key={i}>
                                            <a href={resource.link}>{resource.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}

                </div>
            ),
        },
    ];
    return (
        (<div className="dark w-full bg-black">
            <Timeline className="bg-black" data={data} />
        </div>)
    );
}

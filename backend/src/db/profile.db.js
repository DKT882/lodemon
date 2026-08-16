const profileData = {
    "portfolio": {
        "personal": {
            "name": "Dharmender Kumar",
            "role": "Full Stack Developer & UI Engineer",
            "headline": "I build modern, fast, and user-focused digital experiences.",
            "bio": "I'm Dharmender Kumar, a passionate developer focused on building clean, scalable, and engaging web experiences. I enjoy turning ideas into polished digital products with thoughtful interfaces, reliable functionality, and maintainable code.",
            "location": "India",
            "email": "dharmender@example.com",
            "phone": "+91 98765 43210",
            "availability": "Available for freelance and full-time opportunities",
            "avatar": "https://media.licdn.com/dms/image/v2/D5635AQExipBgpg3e0w/profile-framedphoto-shrink_800_800/B56ZUGzOjXGQAg-/0/1739575847492?e=1787500800&v=beta&t=l5RamVZep7o3ELIfgsGuykctm29sOJ2nInySq2OAlzw",
            "resume": "/assets/dharmender-kumar-resume.pdf"
        },

        "socials": {
            "github": "https://github.com/dkt882",
            "linkedin": "https://linkedin.com/in/dkt882",
            "twitter": "https://twitter.com/dharmenderdev",
            "instagram": "https://instagram.com/dharmender.dev"
        },

        "skills": [
            {
                "name": "TypeScript",
                "level": 85,
                "category": "Frontend"
            },
            {
                "name": "React",
                "level": 92,
                "category": "Frontend"
            },
            {
                "name": "Node.js",
                "level": 86,
                "category": "Backend"
            },
            {
                "name": "Express.js",
                "level": 84,
                "category": "Backend"
            },
            {
                "name": "MongoDB",
                "level": 82,
                "category": "Database"
            }
        ],

        "services": [
            {
                "id": 1,
                "title": "Web Development",
                "description": "Building responsive, scalable, and high-performance websites and web applications.",
                "icon": "code"
            },
            {
                "id": 2,
                "title": "UI Development",
                "description": "Turning designs and ideas into polished, accessible, and responsive user interfaces.",
                "icon": "layout"
            },
            {
                "id": 3,
                "title": "Full Stack Development",
                "description": "Developing complete web applications with modern frontend, backend, database, and API architecture.",
                "icon": "layers"
            },
            {
                "id": 4,
                "title": "Landing Pages",
                "description": "Creating conversion-focused landing pages for products, startups, portfolios, and businesses.",
                "icon": "monitor"
            }
        ],

        "projects": [
            {
                "id": 1,
                "slug": "shopverse",
                "title": "ShopVerse",
                "description": "A modern e-commerce platform with product discovery, filtering, cart management, checkout, and responsive UI.",
                "longDescription": "ShopVerse is a complete e-commerce experience designed to make online shopping simple and intuitive. The project includes product browsing, category filtering, product details, cart management, responsive layouts, and a streamlined checkout experience.",
                "image": "https://picsum.photos/seed/shopverse/1200/800",
                "category": "Web Application",
                "technologies": [
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Node.js",
                    "MongoDB"
                ],
                "features": [
                    "Responsive product catalog",
                    "Advanced product filtering",
                    "Shopping cart",
                    "Product search",
                    "Wishlist",
                    "Checkout flow",
                    "Admin product management"
                ],
                "github": "https://github.com/dharmenderkumar/shopverse",
                "live": "https://shopverse-demo.example.com",
                "featured": true
            },
            {
                "id": 2,
                "slug": "taskflow",
                "title": "TaskFlow",
                "description": "A collaborative project management application for organizing teams, tasks, deadlines, and project progress.",
                "longDescription": "TaskFlow helps teams organize projects without unnecessary complexity. Users can create projects, assign tasks, track progress, and collaborate through a clean dashboard interface.",
                "image": "https://picsum.photos/seed/taskflow/1200/800",
                "category": "SaaS",
                "technologies": [
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Node.js",
                    "PostgreSQL"
                ],
                "features": [
                    "Project dashboards",
                    "Task management",
                    "Team collaboration",
                    "Task assignments",
                    "Status tracking",
                    "Due dates",
                    "Analytics dashboard"
                ],
                "github": "https://github.com/dharmenderkumar/taskflow",
                "live": "https://taskflow-demo.example.com",
                "featured": true
            },
            {
                "id": 3,
                "slug": "fintrack",
                "title": "FinTrack",
                "description": "A personal finance dashboard for tracking income, expenses, budgets, and financial goals.",
                "longDescription": "FinTrack provides a simple visual overview of personal finances. Users can track transactions, organize spending into categories, create budgets, and monitor their progress toward financial goals.",
                "image": "https://picsum.photos/seed/fintrack/1200/800",
                "category": "Dashboard",
                "technologies": [
                    "React",
                    "JavaScript",
                    "Chart.js",
                    "Node.js",
                    "MongoDB"
                ],
                "features": [
                    "Expense tracking",
                    "Income management",
                    "Budget planning",
                    "Financial charts",
                    "Category analytics",
                    "Monthly reports"
                ],
                "github": "https://github.com/dharmenderkumar/fintrack",
                "live": "https://fintrack-demo.example.com",
                "featured": false
            }
        ],

        "experience": [
            {
                "id": 1,
                "company": "TechNova Solutions",
                "role": "Full Stack Developer",
                "location": "India",
                "startDate": "2024-01",
                "endDate": "Present",
                "description": "Developing modern web applications and reusable frontend systems while collaborating with designers, backend engineers, and product teams.",
                "responsibilities": [
                    "Build responsive React and Next.js applications",
                    "Develop reusable UI components",
                    "Integrate REST APIs",
                    "Optimize frontend performance",
                    "Work with databases and backend services",
                    "Review code and maintain development standards"
                ]
            },
            {
                "id": 2,
                "company": "Creative Web Studio",
                "role": "Frontend Developer",
                "location": "India",
                "startDate": "2022-06",
                "endDate": "2023-12",
                "description": "Worked on responsive websites, landing pages, dashboards, and custom web interfaces for startups and small businesses.",
                "responsibilities": [
                    "Convert Figma designs into responsive interfaces",
                    "Build reusable components",
                    "Improve website accessibility",
                    "Optimize page loading performance",
                    "Collaborate with designers and clients"
                ]
            }
        ],

        "education": [
            {
                "id": 1,
                "institution": "Bachelor of Technology",
                "degree": "Computer Science & Engineering",
                "location": "India",
                "startYear": "2018",
                "endYear": "2022",
                "description": "Studied software engineering, data structures, algorithms, databases, computer networks, and web technologies."
            }
        ],

        "certifications": [
            {
                "id": 1,
                "title": "JavaScript Algorithms and Data Structures",
                "issuer": "freeCodeCamp",
                "year": 2023
            },
            {
                "id": 2,
                "title": "Responsive Web Design",
                "issuer": "freeCodeCamp",
                "year": 2022
            },
            {
                "id": 3,
                "title": "React Development",
                "issuer": "Meta",
                "year": 2024
            }
        ],

        "about": {
            "title": "A little bit about me",
            "paragraphs": [
                "I'm a developer who enjoys turning complex problems into simple and useful digital experiences. My work sits at the intersection of engineering, design, and product thinking.",
                "I started my journey by experimenting with simple websites and gradually moved into building full-scale web applications. Along the way, I developed a strong interest in frontend architecture, interaction design, and performance.",
                "Today, I work primarily with JavaScript, React, Next.js, Node.js, and modern CSS technologies. I enjoy learning new tools, experimenting with new ideas, and building products that people genuinely enjoy using."
            ]
        },


        "contact": {
            "title": "Let's build something great together.",
            "description": "Have an idea, a project, or simply want to talk about technology and development? I'd love to hear from you.",
            "email": "dharmender@example.com",
            "location": "India",
            "availability": "Open to freelance projects and exciting opportunities",
            "cta": "Start a conversation"
        }
    }
}



export default profileData;
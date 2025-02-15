"use client"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import { ArrowDown, ArrowDownNarrowWide, ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";


export default function AndroidDevelopment() {

    const androidDevelopmentRoadmap = [
        {
            title: "🚀 1. Kotlin – The Language",
            description:
                "Kotlin is the primary language for Android development, offering modern, concise, and safe programming features.",
            keyConcepts: [
                "Kotlin Syntax & Basics (Variables, Functions, Loops, Conditionals)",
                "Object-Oriented Programming (Classes, Objects, Inheritance, Interfaces)",
                "Functional Programming (Higher-Order Functions, Lambda Expressions)",
                "Coroutines for Asynchronous Programming",
                "Collections & Data Structures (Lists, Sets, Maps)",
                "Extension Functions & Null Safety",
            ],
            resources: [
                { text: "Kotlin Docs", link: "https://kotlinlang.org/docs/home.html" },
                { text: "JetBrains Kotlin Tutorial", link: "https://play.kotlinlang.org/" }
            ],
        },
        {
            title: "🛠️ 2. Android Studio – The IDE",
            description:
                "Android Studio is the official development environment for Android, packed with powerful tools for app development.",
            keyConcepts: [
                "Installing & Setting up Android Studio",
                "Understanding Project Structure & Gradle",
                "Emulator & Real Device Testing",
                "Debugging & Logcat",
                "XML Layouts & Views (TextView, ImageView, RecyclerView)",
                "Activity & Fragment Lifecycle",
            ],
            resources: [
                { text: "Android Studio Setup Guide", link: "https://developer.android.com/studio/install" },
                { text: "Android Debugging", link: "https://developer.android.com/studio/debug" }
            ],
        },
        {
            title: "📦 3. Jetpack – Modern Android Components",
            description:
                "Jetpack is a suite of libraries helping Android developers build robust, maintainable apps.",
            keyConcepts: [
                "Jetpack Navigation (Fragments & Navigation Component)",
                "ViewModel & LiveData for State Management",
                "Room Database for Local Storage",
                "WorkManager for Background Tasks",
                "Paging Library for Large Data Sets",
                "Hilt for Dependency Injection",
            ],
            resources: [
                { text: "Android Jetpack Overview", link: "https://developer.android.com/jetpack" },
                { text: "Jetpack Navigation Guide", link: "https://developer.android.com/guide/navigation" }
            ],
        }
    ];

    const androidUIandNavigation = [
        {
            title: "🎨 1. Material Design – Crafting Beautiful UIs",
            description:
                "Material Design provides guidelines and components to create visually appealing and consistent Android apps.",
            keyConcepts: [
                "UI Components: Buttons, Cards, Lists, TextFields, AppBars",
                "Theming: Colors, Typography, Shapes",
                "Dark Mode Implementation",
                "Material Design Guidelines for Consistency",
            ],
            resources: [
                { text: "Material Design Guidelines", link: "https://m3.material.io/" },
                { text: "Material Components for Android", link: "https://developer.android.com/develop/ui/views/theming/material-components" }
            ],
        },
        {
            title: "🧭 2. Navigation & UI Architecture – Seamless User Flow",
            description:
                "Handling screen transitions and organizing app structure with Jetpack's Navigation Component.",
            keyConcepts: [
                "Navigation Component (SafeArgs, Fragments, NavHost)",
                "Bottom Navigation and ViewPager (Swipeable Tabs)",
                "Dialogs, Snackbars, and Toasts for Notifications",
                "Best Practices for UI Architecture (MVVM, MVI)",
            ],
            resources: [
                { text: "Navigation Component Guide", link: "https://developer.android.com/guide/navigation" },
                { text: "Bottom Navigation & Tabs", link: "https://developer.android.com/jetpack/androidx/releases/navigation" }
            ],
        },
        {
            title: "💾 3. Data Storage – Managing App Data Efficiently",
            description:
                "Learn how to store user preferences and local app data using SharedPreferences and Room Database.",
            keyConcepts: [
                "SharedPreferences for Small Data (User Preferences, Settings)",
                "Room Database (SQLite Wrapper for Structured Data)",
                "LiveData & Flow for Reactive Data Updates",
                "Data Persistence Best Practices",
            ],
            resources: [
                { text: "SharedPreferences API", link: "https://developer.android.com/reference/android/content/SharedPreferences" },
                { text: "Room Database Guide", link: "https://developer.android.com/training/data-storage/room" }
            ],
        }
    ];

    const networkingAndAPIs = [
        {
            title: "3️⃣ Networking & APIs – 2-3 Months",
            description: "Learn how to handle network operations and API calls efficiently in Android applications.",
            keyConcepts: [
                "Networking in Android",
                "Retrofit (Most used for API Calls)",
                "OkHttp, Coroutines with API calls",
            ],
            resources: [
                { text: "Retrofit Official Docs", link: "https://square.github.io/retrofit/" },
                { text: "OkHttp Guide", link: "https://square.github.io/okhttp/" }
            ],
        },
        {
            title: "✅ Working with JSON",
            description: "Understand how to parse and handle JSON data in Android applications.",
            keyConcepts: [
                "Gson, Moshi (Parsing API responses)",
                "API Authentication (JWT, OAuth)",
            ],
            resources: [
                { text: "Gson Guide", link: "https://github.com/google/gson" },
                { text: "Moshi Documentation", link: "https://square.github.io/moshi/" },
                { text: "OAuth and JWT Authentication", link: "https://developer.android.com/training/id-auth/authenticate" }
            ],
        },
        {
            title: "✅ Dependency Injection",
            description: "Implement Dependency Injection for better code modularity and testability.",
            keyConcepts: [
                "Understanding Dependency Injection",
                "Using Dagger & Hilt in Android",
                "Service Locators vs Dependency Injection",
            ],
            resources: [
                { text: "Dagger for Android", link: "https://dagger.dev/dev-guide/" },
                { text: "Hilt Official Docs", link: "https://developer.android.com/training/dependency-injection/hilt-android" }
            ],
        }
    ];

    const advancedTopics = [
        {
            title: "4️⃣ Advanced Topics – 2-3 Months",
            description: "Master advanced Android development concepts to build scalable and high-performance applications.",
            keyConcepts: [
                "State Management & Performance",
                "WorkManager for Background Tasks",
                "Paging 3 for Large Lists",
                "Coroutines & Flow (Async Programming)",
            ],
            resources: [
                { text: "WorkManager Guide", link: "https://developer.android.com/topic/libraries/architecture/workmanager" },
                { text: "Paging 3 Documentation", link: "https://developer.android.com/topic/libraries/architecture/paging/v3-overview" }
            ],
        },
        {
            title: "✅ Firebase & Cloud Integration",
            description: "Integrate cloud services and real-time database features into your Android apps.",
            keyConcepts: [
                "Firebase Firestore (Real-time Database)",
                "Firebase Authentication (Google, Email/Password)",
                "Firebase Cloud Messaging (Push Notifications)",
            ],
            resources: [
                { text: "Firestore Documentation", link: "https://firebase.google.com/docs/firestore" },
                { text: "Firebase Authentication", link: "https://firebase.google.com/docs/auth" }
            ],
        },
        {
            title: "✅ Jetpack Libraries",
            description: "Leverage Jetpack libraries to simplify app development and improve efficiency.",
            keyConcepts: [
                "ViewModel, LiveData, Lifecycle Components",
                "CameraX (For Camera Apps)",
                "ML Kit (For AI Features)",
            ],
            resources: [
                { text: "Jetpack ViewModel & LiveData", link: "https://developer.android.com/topic/libraries/architecture/viewmodel" },
                { text: "CameraX Overview", link: "https://developer.android.com/training/camerax" }
            ],
        },
        {
            title: "✅ DevOps & Testing",
            description: "Implement DevOps and testing strategies to ensure code reliability and automation.",
            keyConcepts: [
                "Unit Testing (JUnit, Mockito)",
                "UI Testing (Espresso)",
                "CI/CD with GitHub Actions",
            ],
            resources: [
                { text: "JUnit & Mockito Guide", link: "https://developer.android.com/training/testing/unit-testing" },
                { text: "Espresso Testing", link: "https://developer.android.com/training/testing/espresso" }
            ],
        }
    ];


    const buildProjectsAndPortfolio = [

        {
            title: "✅ Expense Tracker App",
            description: "A personal finance management app that helps users track expenses and manage budgets.",
            keyConcepts: [
                "Uses Room Database for storing transactions.",
                "Jetpack Compose for UI.",
                "Charts & Graphs for analytics.",
            ],
            resources: []
        },
        {
            title: "✅ Weather App",
            description: "A real-time weather application that fetches data from an API and presents it beautifully.",
            keyConcepts: [
                "Integrates OpenWeather API for real-time updates.",
                "Uses Jetpack Compose for modern UI.",
                "Dark & Light theme support.",
            ],
            resources: []
        },
        {
            title: "✅ AI-Powered Chatbot",
            description: "A chatbot powered by OpenAI API that provides automated responses to user queries.",
            keyConcepts: [
                "Uses OpenAI API for chatbot responses.",
                "Implements Natural Language Processing (NLP).",
                "Provides a seamless chat experience.",
            ],
            resources: []
        },
        {
            title: "✅ E-commerce App",
            description: "An online shopping app with Firebase backend and secure payment integration.",
            keyConcepts: [
                "Firebase Firestore for real-time data.",
                "Payment Gateway integration.",
                "User Authentication (Google, Email/Password).",
            ],
            resources: []
        },
        {
            title: "✅ Social Media Clone",
            description: "A social media app featuring authentication, real-time posts, and messaging.",
            keyConcepts: [
                "Authentication using Firebase.",
                "Real-time database for posts and comments.",
                "Push notifications for new interactions.",
            ],
            resources: []
        },

    ];








    const data = [
        {
            title: "Foundation",
            content: (
                <div className="text-white">
                    {androidDevelopmentRoadmap.map((section, index) => (
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
            title: "UI & Navigation",
            content: (
                <div className="text-white">
                    {androidUIandNavigation.map((section, index) => (
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
            title: "Networking",
            content: (
                <div className="text-white">
                    {networkingAndAPIs.map((section, index) => (
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
            title: "Advance Topics",
            content: (
                <div className="text-white">
                    {advancedTopics.map((section, index) => (
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
                <div className="text-white">
                    {buildProjectsAndPortfolio.map((section, index) => (
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
        (
            <div className="dark bg-grid-white/[0.1] w-full bg-black">
                <Timeline className="bg-black"
                    title="Android Development Raodmap"
                    description="Master Android development with structured learning paths covering UI, networking, databases, Jetpack libraries, and advanced topics like performance optimization and DevOps."

                    data={data} />
            </div>)
    );
}

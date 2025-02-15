"use client"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import { ArrowDown, ArrowDownNarrowWide, ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";


export default function DSA() {

    const Basics = [
        {
            title: "1️⃣ Choose a Programming Language",
            description: "Select a programming language to get started with competitive programming.",
            keyConcepts: [
                "C++ (preferred for CP), Java, or Python",
                "Learn syntax, OOPs concepts, STL (C++) / Collections (Java)",
            ],
            resources: [
                { text: "C++ STL Documentation", link: "https://cplusplus.com/reference/stl/" },
                { text: "Java Collections Framework", link: "https://docs.oracle.com/javase/tutorial/collections/" },
                { text: "Python Official Documentation", link: "https://docs.python.org/3/" }
            ],
        },
        {
            title: "2️⃣ Learn Time and Space Complexity",
            description: "Understand the fundamentals of algorithm complexity analysis.",
            keyConcepts: [
                "Big O, Ω, and Θ Notations",
                "Best, Average, and Worst-case Analysis",
                "Common Complexities: O(1), O(logN), O(N), O(NlogN), O(N²), O(2^N), O(N!)",
                "Mastering the art of breaking down problems using complexity analysis",
            ],
            resources: [
                { text: "Big O Notation Guide", link: "https://www.bigocheatsheet.com/" },
                { text: "Time Complexity Analysis", link: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/" }
            ],
        },
        {
            title: "3️⃣ Recursion and Backtracking",
            description: "Deep dive into recursion, backtracking, and classic problems.",
            keyConcepts: [
                "Base case and recursive case",
                "Tail recursion",
                "Recursion vs Iteration",
                "Classic recursion problems: Factorial, Fibonacci, Power of a Number, Subset Sum, Permutations, N-Queens Problem, Tower of Hanoi",
            ],
            resources: [
                { text: "Recursion in Programming", link: "https://www.geeksforgeeks.org/recursion/" },
                { text: "Backtracking Algorithms", link: "https://www.geeksforgeeks.org/backtracking-introduction/" }
            ],
        }
    ];


    const coreDataStructures = [
        {
            title: "1️⃣ Arrays & Strings",
            description: "Understanding array and string manipulations, efficient algorithms, and important problems.",
            keyConcepts: [
                "Basics (Insertion, Deletion, Traversal)",
                "Two-pointer technique",
                "Sliding window approach",
                "Prefix sum, Kadane’s Algorithm",
            ],
            resources: []
        },
        {
            title: "2️⃣ Linked Lists",
            description: "Deep dive into linked lists and their operations.",
            keyConcepts: [
                "Singly, Doubly, Circular Linked Lists",
                "Operations: Insertion, Deletion, Reverse",
                "Floyd’s Cycle Detection Algorithm",
                "Merge Sort on Linked List",
            ],
            resources: []

        },
        {
            title: "3️⃣ Stacks and Queues",
            description: "Implementation and problem-solving with stacks and queues.",
            keyConcepts: [
                "Stack (LIFO) & Queue (FIFO) Basics",
                "Implementation using Arrays and Linked Lists",
                "Monotonic Stack & Monotonic Queue",
                "Deque and Priority Queue",
            ],
            resources: []

        },
        {
            title: "4️⃣ Hashing and HashMaps",
            description: "Understanding hash tables, collision handling, and efficient searching techniques.",
            keyConcepts: [
                "Hash Tables & Hash Maps",
                "Collision Handling Techniques",
                "Unordered vs Ordered Maps",
            ],
            resources: []

        },
        {
            title: "5️⃣ Trees and Binary Search Trees (BST)",
            description: "Learning tree traversal techniques, BST operations, and solving tree-based problems.",
            keyConcepts: [
                "Binary Tree Basics",
                "Tree Traversals: Inorder, Preorder, Postorder",
                "Depth-First Search (DFS) and Breadth-First Search (BFS)",
                "BST Operations: Insert, Delete, Search",
                "Lowest Common Ancestor (LCA)",
            ],
            resources: []

        },
        {
            title: "6️⃣ Heaps and Priority Queues",
            description: "Understanding heaps and their applications in problem-solving.",
            keyConcepts: [
                "Min Heap, Max Heap",
                "Heapify Algorithm",
                "Priority Queue and its applications",
            ],
            resources: []

        },
        {
            title: "7️⃣ Graphs (BFS, DFS, Dijkstra, MST)",
            description: "Graph theory fundamentals, traversal algorithms, and shortest path techniques.",
            keyConcepts: [
                "Graph Representations (Adjacency Matrix, List)",
                "DFS & BFS",
                "Dijkstra’s Algorithm",
                "Bellman-Ford Algorithm",
                "Floyd-Warshall Algorithm",
                "Kruskal’s and Prim’s Algorithm (MST)",
                "Topological Sorting (Kahn’s Algorithm)",
            ],
            resources: []

        },
        {
            title: "🔥 Important Problems",
            description: "A collection of must-solve problems across all topics.",
            keyConcepts: [
                "Two Sum",
                "Longest Substring Without Repeating Characters",
                "Maximum Subarray Sum (Kadane's Algorithm)",
                "Trapping Rain Water",
                "Longest Palindromic Substring",
                "Reverse a Linked List",
                "Detect and Remove a Cycle in Linked List",
                "Intersection of Two Linked Lists",
                "Merge Two Sorted Linked Lists",
                "Next Greater Element",
                "LRU Cache Implementation",
                "Largest Rectangle in Histogram",
                "Sliding Window Maximum",
                "Two Sum using HashMap",
                "Longest Consecutive Sequence",
                "Group Anagrams",
                "Diameter of a Binary Tree",
                "Convert Sorted Array to BST",
                "Kth Smallest Element in BST",
                "Maximum Path Sum in Binary Tree",
                "Kth Largest Element in an Array",
                "Merge K Sorted Lists",
                "Top K Frequent Elements",
                "Number of Islands",
                "Shortest Path in Weighted Graph",
                "Detect Cycle in Directed & Undirected Graph",
            ],
            resources: []

        }
    ];

    const algorithmsProblemSolving = [

        {
            title: "1️⃣ Sorting Algorithms",
            description: "Sorting techniques for organizing data efficiently.",
            keyConcepts: [
                "Bubble Sort, Selection Sort, Insertion Sort",
                "Merge Sort and Quick Sort (Divide & Conquer)",
                "Counting Sort, Radix Sort",
                "Bucket Sort",
            ],
            resources: []

        },
        {
            title: "2️⃣ Searching Algorithms",
            description: "Efficient searching strategies and advanced search problems.",
            keyConcepts: [
                "Binary Search and its Variants",
                "Search in Rotated Sorted Array",
                "Find First and Last Position of Element",
            ],
            resources: []

        },
        {
            title: "3️⃣ Greedy Algorithms",
            description: "Greedy strategies for optimization problems.",
            keyConcepts: [
                "Activity Selection Problem",
                "Huffman Encoding",
                "Fractional Knapsack",
                "Job Scheduling",
            ],
            resources: []

        },
        {
            title: "4️⃣ Dynmic Programming (DP)",
            description: "Solving problems using optimal substructure and overlapping subproblems.",
            keyConcepts: [
                "Bottom-up vs Top-down Approach",
                "DP on Arrays: Fibonacci, Climbing Stairs, House Robber, Jump Game",
                "DP on Strings: Longest Common Subsequence (LCS), Edit Distance",
                "DP on Trees: Diameter of a Binary Tree, Maximum Path Sum",
            ],
            resources: []

        },
        {
            title: "5️⃣ Bit Manipulation",
            description: "Techniques for efficient bitwise operations.",
            keyConcepts: [
                "XOR Tricks",
                "Count Set Bits",
                "Single Number Problems",
            ],
            resources: []

        }
    ];

    const advancedTopicsAndCompetitiveProgramming = [
        {
            title: "Advanced Data Structures",
            description: "Explore complex data structures that optimize problem-solving in competitive programming.",
            keyConcepts: [
                "Segment Tree: Range queries and updates efficiently",
                "Fenwick Tree (Binary Indexed Tree): Alternative to Segment Tree",
                "Trie (Prefix Tree): String-based data structure for fast retrieval",
                "Disjoint Set Union (DSU): Union-Find for connected components",
            ],
            resources: [
                { text: "Segment Tree Explanation", link: "https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/" },
                { text: "Trie Data Structure", link: "https://www.geeksforgeeks.org/trie-insert-and-search/" },
                { text: "Disjoint Set Union Guide", link: "https://www.geeksforgeeks.org/union-find-algorithm-set-2-union-by-rank/" }
            ]
        },
        {
            title: "String Algorithms",
            description: "Learn efficient algorithms to perform pattern matching and text search.",
            keyConcepts: [
                "Rabin-Karp Algorithm: Hashing-based pattern matching",
                "KMP Algorithm (Knuth-Morris-Pratt): Prefix function optimization",
                "Z-Algorithm: Pattern matching in linear time",
            ],
            resources: [
                { text: "Rabin-Karp Algorithm", link: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/" },
                { text: "KMP Algorithm Guide", link: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/" },
                { text: "Z-Algorithm Explanation", link: "https://cp-algorithms.com/string/z-function.html" }
            ]
        },
        {
            title: "Competitive Programming & Coding Contests",
            description: "Improve problem-solving skills and excel in coding contests.",
            keyConcepts: [
                "Solve 150+ problems on LeetCode, CodeForces, CodeChef",
                "Learn Contest Strategies",
                "Participate in contests (Google Kickstart, Codeforces, AtCoder)",
            ],
            resources: [
                { text: "Competitive Programming Guide", link: "https://codeforces.com/blog/entry/55274" },
                { text: "LeetCode Problem Solving", link: "https://leetcode.com/" },
                { text: "CodeChef Learning", link: "https://www.codechef.com/certification/data-structures-and-algorithms/prepare" }
            ]
        },
        {
            title: "System Design (For Interviews & Scalable Applications)",
            description: "Learn fundamental principles to design scalable and efficient systems.",
            keyConcepts: [
                "Basics of System Design",
                "CAP Theorem, Load Balancing",
                "Distributed Caching, Rate Limiting",
                "Designing Scalable Applications",
            ],
            resources: [
                { text: "System Design Basics", link: "https://github.com/donnemartin/system-design-primer" },
                { text: "Scalability Principles", link: "https://www.geeksforgeeks.org/scalability-in-system-design/" },
                { text: "Load Balancing Techniques", link: "https://www.nginx.com/resources/glossary/load-balancing/" }
            ]
        }
    ];


    const buildProjects = [

        {
            title: "Final Step: Mock Interviews & Practice",
            description: "Prepare for real-world interviews and refine problem-solving skills.",
            keyConcepts: [
                "Mock Interviews (Leetcode, Pramp, InterviewBit)",
                "Revise Mistakes & Edge Cases",
                "Work on Real-World Projects to strengthen problem-solving",
            ],
            resources: [
                { text: "LeetCode Interview Guide", link: "https://leetcode.com/discuss/interview-question-guide" },
                { text: "Pramp - Mock Interviews", link: "https://www.pramp.com/" },
                { text: "InterviewBit Practice", link: "https://www.interviewbit.com/" }
            ]
        }
    ];








    const data = [
        {
            title: "Basics",
            content: (
                <div className="text-white">
                    {Basics.map((section, index) => (
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
            title: "Core DSA",
            content: (
                <div className="text-white">
                    {coreDataStructures.map((section, index) => (
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
            title: "Algorithms",
            content: (
                <div className="text-white">
                    {algorithmsProblemSolving.map((section, index) => (
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
                    {advancedTopicsAndCompetitiveProgramming.map((section, index) => (
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
            title: "Mock Interview",
            content: (
                <div className="text-white">
                    {buildProjects.map((section, index) => (
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
                <Timeline
                    className="bg-black"
                    title="Data Structures & Algorithms (DSA) Roadmap"
                    description="Strengthen problem-solving skills with a deep dive into arrays, linked lists, trees, graphs, dynamic programming, and competitive programming techniques."
                    data={data} />
            </div>)
    );
}

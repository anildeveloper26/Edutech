export interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: string
  topics: string[]
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Data Structures and Algorithms",
    description: "Master fundamental DSA concepts with practical implementations",
    duration: "12 weeks",
    level: "Intermediate",
    topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"]
  },
  {
    id: "2",
    title: "Web Development Fundamentals",
    description: "Learn modern web development from ground up",
    duration: "16 weeks",
    level: "Beginner",
    topics: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
  },
  {
    id: "3",
    title: "Database Management Systems",
    description: "Comprehensive guide to database design and implementation",
    duration: "10 weeks",
    level: "Intermediate",
    topics: ["SQL", "Normalization", "Indexing", "Transactions", "NoSQL"]
  }
]
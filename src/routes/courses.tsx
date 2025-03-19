import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Database,
  Brain,
  Cloud,
  Shield,
  GitBranch,
  Lock,
  Server,
  Cpu,
  CircuitBoard,
  Network,
  Layers,
  Building2,
  BrickWall,
  Mountain,
  Hammer,
  Droplet,
  Wrench,
  Bot,
  Plug,
  Zap,
  Signal,
  Radio,
  Beaker,
} from "lucide-react";
import { motion } from "framer-motion";

// Define Course type and data
type Course = {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: number;
  image: string;
  branch: string;
  icon: React.ComponentType<{ className?: string }>;
};

const courses: Course[] = [
  // IT/Computer Science Engineering
  {
    title: "Computer Science Fundamentals",
    description: "Master core CS concepts",
    duration: "12 weeks",
    level: "Beginner",
    price: 299,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    branch: "IT",
    icon: Code2,
  },
  {
    title: "Advanced Data Structures",
    description: "Deep dive into complex data structures",
    duration: "10 weeks",
    level: "Intermediate",
    price: 399,
    image: "https://images.unsplash.com/photo-1508317469940-3626b3c92486",
    branch: "IT",
    icon: Layers,
  },
  {
    title: "Machine Learning Basics",
    description: "Introduction to ML concepts",
    duration: "14 weeks",
    level: "Intermediate",
    price: 499,
    image: "https://images.unsplash.com/photo-1551288049-b5f3c2e205e9",
    branch: "IT",
    icon: Brain,
  },
  {
    title: "Database Systems",
    description: "Learn database design and implementation",
    duration: "8 weeks",
    level: "Beginner",
    price: 249,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    branch: "IT",
    icon: Database,
  },
  {
    title: "Full Stack Web Development",
    description: "Build modern web applications",
    duration: "16 weeks",
    level: "Intermediate",
    price: 599,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    branch: "IT",
    icon: Server,
  },
  {
    title: "Cloud Computing with AWS",
    description: "Master cloud architecture",
    duration: "12 weeks",
    level: "Intermediate",
    price: 549,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    branch: "IT",
    icon: Cloud,
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Learn security principles",
    duration: "10 weeks",
    level: "Beginner",
    price: 349,
    image: "https://images.unsplash.com/photo-1563986768494-89798b0c84c0",
    branch: "IT",
    icon: Shield,
  },
  {
    title: "DevOps Essentials",
    description: "Implement CI/CD pipelines",
    duration: "12 weeks",
    level: "Intermediate",
    price: 449,
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6",
    branch: "IT",
    icon: GitBranch,
  },
  {
    title: "Blockchain Basics",
    description: "Understand blockchain technology",
    duration: "8 weeks",
    level: "Beginner",
    price: 299,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f2a26ba",
    branch: "IT",
    icon: Lock,
  },
  {
    title: "AI and Deep Learning",
    description: "Advanced neural network concepts",
    duration: "16 weeks",
    level: "Advanced",
    price: 699,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    branch: "IT",
    icon: Brain,
  },

  // Embedded Systems Engineering
  {
    title: "Embedded Systems Design",
    description: "Learn embedded hardware design",
    duration: "12 weeks",
    level: "Intermediate",
    price: 399,
    image: "https://images.unsplash.com/photo-1635070041078-e363dfa24dca",
    branch: "Embedded",
    icon: Cpu,
  },
  {
    title: "Microcontroller Programming",
    description: "Program Arduino and Raspberry Pi",
    duration: "10 weeks",
    level: "Beginner",
    price: 299,
    image: "https://images.unsplash.com/photo-1590917779346-928db4181b69",
    branch: "Embedded",
    icon: CircuitBoard,
  },
  {
    title: "RTOS Fundamentals",
    description: "Real-time operating systems",
    duration: "14 weeks",
    level: "Intermediate",
    price: 449,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    branch: "Embedded",
    icon: Server,
  },
  {
    title: "IoT Development",
    description: "Build Internet of Things solutions",
    duration: "12 weeks",
    level: "Intermediate",
    price: 499,
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    branch: "Embedded",
    icon: Network,
  },
  {
    title: "FPGA Programming",
    description: "Master FPGA design",
    duration: "16 weeks",
    level: "Advanced",
    price: 599,
    image: "https://images.unsplash.com/photo-1635070041078-e363dfa24dca",
    branch: "Embedded",
    icon: Cpu,
  },
  {
    title: "Embedded Linux",
    description: "Linux for embedded systems",
    duration: "14 weeks",
    level: "Intermediate",
    price: 499,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    branch: "Embedded",
    icon: Server,
  },
  {
    title: "Sensor Interfacing",
    description: "Work with sensors in embedded systems",
    duration: "8 weeks",
    level: "Beginner",
    price: 249,
    image: "https://images.unsplash.com/photo-1590917779346-928db4181b69",
    branch: "Embedded",
    icon: Signal,
  },

  // Civil Engineering
  {
    title: "Structural Analysis",
    description: "Analyze building structures",
    duration: "12 weeks",
    level: "Intermediate",
    price: 399,
    image: "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d",
    branch: "Civil",
    icon: Building2,
  },
  {
    title: "Concrete Technology",
    description: "Learn concrete design and testing",
    duration: "10 weeks",
    level: "Beginner",
    price: 299,
    image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
    branch: "Civil",
    icon: BrickWall,
  },
  {
    title: "Geotechnical Engineering",
    description: "Study soil mechanics",
    duration: "14 weeks",
    level: "Intermediate",
    price: 449,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    branch: "Civil",
    icon: Mountain,
  },
  {
    title: "Construction Management",
    description: "Manage construction projects",
    duration: "12 weeks",
    level: "Intermediate",
    price: 399,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    branch: "Civil",
    icon: Hammer,
  },
  {
    title: "Hydraulics Engineering",
    description: "Master water flow systems",
    duration: "10 weeks",
    level: "Beginner",
    price: 349,
    image: "https://images.unsplash.com/photo-1503428593589-fcc32c6165d5",
    branch: "Civil",
    icon: Droplet,
  },
  {
    title: "Bridge Design",
    description: "Design safe bridge structures",
    duration: "16 weeks",
    level: "Advanced",
    price: 599,
    image: "https://images.unsplash.com/photo-1505761671935-5d5e1dfcf4ae",
    branch: "Civil",
    icon: Building2,
  },

  // Mechanical Engineering
  {
    title: "Thermodynamics",
    description: "Understand heat and energy",
    duration: "12 weeks",
    level: "Intermediate",
    price: 399,
    image: "https://images.unsplash.com/photo-1581093458791-3b937e8f2e68",
    branch: "Mechanical",
    icon: Wrench,
  },
  {
    title: "Fluid Mechanics",
    description: "Study fluid dynamics",
    duration: "10 weeks",
    level: "Beginner",
    price: 299,
    image: "https://images.unsplash.com/photo-1503428593589-fcc32c6165d5",
    branch: "Mechanical",
    icon: Droplet,
  },
  {
    title: "Machine Design",
    description: "Design mechanical systems",
    duration: "14 weeks",
    level: "Intermediate",
    price: 449,
    image: "https://images.unsplash.com/photo-1581093450021-4a7363e9a6b7",
    branch: "Mechanical",
    icon: Wrench,
  },
  {
    title: "Robotics Basics",
    description: "Introduction to robotics",
    duration: "12 weeks",
    level: "Intermediate",
    price: 499,
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    branch: "Mechanical",
    icon: Bot,
  },

  // Electrical Engineering
  {
    title: "Circuit Analysis",
    description: "Master electrical circuits",
    duration: "10 weeks",
    level: "Beginner",
    price: 299,
    image: "https://images.unsplash.com/photo-1635070041078-e363dfa24dca",
    branch: "Electrical",
    icon: Zap,
  },
  {
    title: "Power Systems",
    description: "Learn power generation",
    duration: "12 weeks",
    level: "Intermediate",
    price: 399,
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    branch: "Electrical",
    icon: Plug,
  },
  {
    title: "Control Systems",
    description: "Study system controls",
    duration: "14 weeks",
    level: "Intermediate",
    price: 449,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    branch: "Electrical",
    icon: Signal,
  },

  // Electronics Engineering
  {
    title: "Analog Electronics",
    description: "Learn analog circuit design",
    duration: "12 weeks",
    level: "Intermediate",
    price: 399,
    image: "https://images.unsplash.com/photo-1635070041078-e363dfa24dca",
    branch: "Electronics",
    icon: CircuitBoard,
  },
  {
    title: "Digital Signal Processing",
    description: "Master signal processing",
    duration: "14 weeks",
    level: "Intermediate",
    price: 499,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    branch: "Electronics",
    icon: Radio,
  },
  {
    title: "VLSI Design",
    description: "Design integrated circuits",
    duration: "16 weeks",
    level: "Advanced",
    price: 599,
    image: "https://images.unsplash.com/photo-1635070041078-e363dfa24dca",
    branch: "Electronics",
    icon: Cpu,
  },

  // Chemical Engineering
  {
    title: "Chemical Process Engineering",
    description: "Learn process design",
    duration: "12 weeks",
    level: "Intermediate",
    price: 399,
    image: "https://images.unsplash.com/photo-1581093458791-3b937e8f2e68",
    branch: "Chemical",
    icon: Beaker,
  },
  {
    title: "Petroleum Refining",
    description: "Understand refining processes",
    duration: "14 weeks",
    level: "Intermediate",
    price: 449,
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    branch: "Chemical",
    icon: Beaker,
  },
];

// Define the route
export const Route = createFileRoute("/courses")({
  component: CoursesPage,
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function CoursesPage() {
  const { data: coursesData } = useQuery({
    queryKey: ["courses"],
    queryFn: () => Promise.resolve(courses),
    initialData: courses,
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Engineering Courses for Every Branch
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore our comprehensive range of B.Tech coaching courses
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {coursesData.map((course: Course) => (
            <motion.div key={course.title} variants={fadeInUp}>
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={`${course.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={course.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </div>
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                    {course.branch}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <course.icon className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {course.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-700">
                      <span className="font-medium">Duration:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span className="font-medium">Price:</span>
                      <span className="font-bold text-blue-600">
                        ${course.price}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full group bg-blue-600 hover:bg-blue-700 transition-all duration-300">
                    Enroll Now
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default CoursesPage;

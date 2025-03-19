import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Code2,
  GraduationCap,
  Users,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: HomePage,
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section with Education Image */}
      <section className="relative h-[70dvh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80')`,
            opacity: 0.9, // Slightly increased opacity for vibrancy
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/30" />{" "}
        {/* Enhanced overlay */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-lg"
            variants={fadeInUp}
          >
            Elevate Your Tech Journey
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto font-light drop-shadow-md"
            variants={fadeInUp}
          >
            Unlock your potential with world-class, live instructor-led tech
            courses
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-full hover:bg-blue-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Begin Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-2 border-white/90 font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-full hover:bg-white/20 hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Discover Courses
            </Button>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            What Sets Us Apart
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: BookOpen,
                title: "Expert-Led Live Sessions",
                desc: "Learn from industry pioneers in real-time",
              },
              {
                icon: Code2,
                title: "Hands-On Mastery",
                desc: "Build real projects with expert guidance",
              },
              {
                icon: Users,
                title: "Round-the-Clock Support",
                desc: "Mentors & community always by your side",
              },
              {
                icon: GraduationCap,
                title: "Elite Certification",
                desc: "Earn credentials that open doors",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex justify-center"
              >
                <Card className="w-full max-w-[300px] sm:max-w-[350px] border-none bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
                  <CardHeader className="text-center p-6 sm:p-8">
                    <feature.icon className="h-12 w-12 sm:h-14 sm:w-14 text-blue-600 mx-auto mb-4 sm:mb-6 animate-pulse transition-transform duration-300 hover:scale-110" />
                    <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3 leading-relaxed">
                      {feature.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-extrabold text-center mb-20 text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Discover Top B.Tech Programs
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Full Stack Web Development",
                desc: "Build modern web apps with MERN stack expertise.",
                price: 599,
                img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
                fallbackImg: "/fallback/web-dev.jpg", // Local fallback image
              },
              {
                title: "Data Science & AI",
                desc: "Master Python, Machine Learning, and AI analytics.",
                price: 699,
                img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
                fallbackImg: "/fallback/data-science.jpg",
              },
              {
                title: "Cloud Computing",
                desc: "Excel in AWS, Azure, and cloud architecture.",
                price: 549,
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
                fallbackImg: "/fallback/cloud-computing.jpg",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white border border-gray-200">
                  <div className="relative overflow-hidden">
                    <img
                      src={`${course.img}?auto=format&fit=crop&w=800&q=80`}
                      alt={course.title}
                      className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-700"
                      loading="lazy" // Improve performance
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                      B.Tech Certified
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-2xl font-bold text-gray-900">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="mb-5 text-gray-700 text-base leading-relaxed">
                      {course.desc}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full shadow-sm">
                        ${course.price}
                      </span>
                      <Button className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full px-6 py-3 font-medium transition-all duration-300 shadow-md">
                        Enroll Now
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-500 text-blue-500 font-semibold px-10 py-6 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore All Programs
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-16 bg-gradient-to-t from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300 text-lg">
            © 2025 TechEdu. Empowering the next generation of tech leaders.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Code2, GraduationCap, Users, Star } from "lucide-react";
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
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden ">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="text-center md:text-left md:w-1/2 z-10"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight"
              variants={fadeInUp}
            >
              Achieve Your Summit with SummitEdge Academy
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-6 "
              variants={fadeInUp}
            >
              Gain the edge to excel in GATE, ESE, PSUs, and more with expert guidance.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-blue-800 text-white font-semibold px-8 py-4 rounded-md hover:bg-blue-900 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Begin Your Ascent
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-8 md:mt-0 md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
              alt="Engineering Student Studying"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg relative z-10"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <motion.img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Engineering Excellence"
                className="w-3/4 max-w-xs rounded-lg shadow-md opacity-20 transform -translate-x-20 translate-y-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.2, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Tech Innovation"
                className="w-3/4 max-w-xs rounded-lg shadow-md opacity-20 transform translate-x-20 -translate-y-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.2, x: 0 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50 z-0" />
      </section>

      {/* Features Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-5 text-blue-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why SummitEdge Academy?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: BookOpen,
                title: "Expert Pioneers",
                desc: "Learn from leaders who redefine engineering.",
              },
              {
                icon: Code2,
                title: "Cutting-Edge Tools",
                desc: "Master exams with the best resources.",
              },
              {
                icon: Users,
                title: "Tailored Mentorship",
                desc: "Your path to success, uniquely crafted.",
              },
              {
                icon: GraduationCap,
                title: "Proven Excellence",
                desc: "Soar to the top with our track record.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-lg mx-auto max-w-xs sm:max-w-none h-full flex flex-col">
                  <CardHeader className="text-center p-4 sm:p-6 flex flex-col items-center flex-grow">
                    <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-800 mx-auto mb-3 sm:mb-4" />
                    <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3 flex-grow">
                      {feature.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Elevate Your Career with Our Courses
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "GATE Edge",
                desc: "Outpace the competition with elite GATE prep.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "ESE Summit",
                desc: "Climb to success in Engineering Services.",
                img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "PSU Peak",
                desc: "Reach your PSU goals with precision training.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <Card className="shadow-md hover:shadow-lg transition-all duration-300 rounded-lg">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardContent className="p-4">
                    <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-4">
                      {course.desc}
                    </CardDescription>
                    <Button className="bg-blue-800 text-white rounded-md px-4 py-2 hover:bg-blue-900 transition-all duration-300">
                      Start Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Summit Achievers Speak
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Arjun Mehta",
                quote: "SummitEdge Academy gave me the edge to hit AIR 4 in GATE!",
                role: "GATE Topper",
              },
              {
                name: "Sneha Gupta",
                quote: "ESE felt out of reach—until SummitEdge lifted me up.",
                role: "ESE Qualifier",
              },
              {
                name: "Rohan Desai",
                quote: "PSU success was mine, thanks to SummitEdge’s precision.",
                role: "PSU Engineer",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="shadow-md hover:shadow-lg transition-all duration-300 rounded-lg p-6">
                  <CardContent>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-gray-800 font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
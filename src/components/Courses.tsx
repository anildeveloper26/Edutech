import { useQuery } from "@tanstack/react-query";
import {  Clock, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    description:
      "Master fundamental DSA concepts with practical implementations",
    duration: "12 weeks",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Full-stack web development with modern technologies",
    duration: "16 weeks",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Machine Learning",
    description: "Introduction to ML algorithms and practical applications",
    duration: "14 weeks",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80",
  },
];

const Courses = () => {
  const { data: coursesData } = useQuery({
    queryKey: ["courses"],
    queryFn: () => Promise.resolve(courses),
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Courses</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData?.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-5 w-5 mr-1" />
                  <span>{course.rating}</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

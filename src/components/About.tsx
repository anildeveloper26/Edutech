import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          About TechEdu Hub
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are dedicated to helping B.Tech students excel in their academic
          journey through quality education and personalized guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">5000+</h3>
          <p className="text-gray-600">Students Trained</p>
        </div>
        <div className="text-center">
          <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">95%</h3>
          <p className="text-gray-600">Success Rate</p>
        </div>
        <div className="text-center">
          <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">50+</h3>
          <p className="text-gray-600">Expert Mentors</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
              alt="Team"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              At TechEdu Hub, we believe in empowering students with the
              knowledge and skills they need to succeed in their B.Tech journey
              and beyond. Our comprehensive curriculum, experienced faculty, and
              innovative teaching methods ensure that every student reaches
              their full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

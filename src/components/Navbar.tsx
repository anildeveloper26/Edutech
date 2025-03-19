import { Link } from "react-router-dom";
import { GraduationCap, Book, Home, Info } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">TechEdu Hub</span>
          </Link>
          <div className="flex space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 hover:text-indigo-200"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/courses"
              className="flex items-center space-x-1 hover:text-indigo-200"
            >
              <Book className="h-5 w-5" />
              <span>Courses</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-1 hover:text-indigo-200"
            >
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

interface NavigationProps {
  currentPage?: string;
}

const Navigation = ({ currentPage }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-amber-600 font-montserrat"
          >
            МедоДом
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                currentPage === "home"
                  ? "text-amber-600 font-medium"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/products"
              className={`transition-colors ${
                currentPage === "products"
                  ? "text-amber-600 font-medium"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              Товары
            </Link>
            <Link
              to="/instructions"
              className={`transition-colors ${
                currentPage === "instructions"
                  ? "text-amber-600 font-medium"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              Инструкция
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

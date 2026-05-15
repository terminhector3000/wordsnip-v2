import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-gray-700">
          Page not found
        </h2>

        <p className="mt-2 text-gray-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="
              inline-block
              rounded-lg
              bg-blue-600
              px-5 py-3
              text-white
              font-medium
              hover:bg-blue-700
              transition-colors
            "
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

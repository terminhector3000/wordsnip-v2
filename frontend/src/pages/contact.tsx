import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w">
        <h1 className="text-4xl font-bold text-gray-800">
          This Page is Under Construction
        </h1>

        <h2 className="mt-4 text-xl font-semibold text-gray-700">
          We are working on this page at the moment
        </h2>

        <p className="mt-2 text-gray-500">
          In the meantime you can contact us here:{" "}
          <span className="mt-4 text-xl font-semibold text-gray-800">
            contact@wordsnip.com
          </span>
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

export default Contact;

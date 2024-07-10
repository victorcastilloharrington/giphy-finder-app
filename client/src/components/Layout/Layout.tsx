import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  return (
    <div className="w-full">
      <div className="flex font-extrabold gap-4 py-4  px-8 justify-between items-center bg-yellow-400">
        <h1 className="text-2xl ">Giphy Finder</h1>
        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className={`block text-lg font-medium ${
              location.pathname === "/" ? "text-gray-800" : "text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link
            to="/history"
            className={`block  text-lg font-medium ${
              location.pathname === "/history"
                ? "text-gray-800"
                : "text-gray-600"
            }`}
          >
            History
          </Link>
        </div>
      </div>
      <div className="px-4 py-8">{children}</div>
    </div>
  );
};

export default Layout;

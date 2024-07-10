import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  return (
    <div className="w-full">
      <div className="flex  gap-4 p-4 justify-end items-center bg-slate-100">
        <Link
          to="/"
          className={`block text-lg ${
            location.pathname === "/" ? "text-blue-900" : "text-slate-500"
          }`}
        >
          Home
        </Link>
        <Link
          to="/history"
          className={`block  text-lg ${
            location.pathname === "/history"
              ? "text-blue-900"
              : "text-slate-500"
          }`}
        >
          History
        </Link>
      </div>
      <div className="px-4 py-8">{children}</div>
    </div>
  );
};

export default Layout;

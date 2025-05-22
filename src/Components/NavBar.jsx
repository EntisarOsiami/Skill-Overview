import { useState } from "react";
import { Link } from "react-router";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", label: "الرئيسية" },
    { path: "/aws", label: "أمازون ويب " },
    { path: "/azure", label: "أزور" },
    { path: "/gcp", label: "جوجل كلاود" },
    { path: "/alibaba", label: "علي بابا " },
  ];
  return (
    <nav className="bg-gray-800 p-4 w-full z-50 fixed top-0 shadow-md">
      <div
        className="container mx-auto flex justify-between items-center"
        dir="rtl"
      >
        <div className="text-white font-bold text-xl">مهارات السحابة</div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className="hidden md:flex space-x-reverse space-x-4">
          {navItems.map((item) => (
            <Link
              to={item.path}
              className="px-3 py-2 rounded text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>{" "}
      {isMenuOpen && (
        <div className="md:hidden" dir="rtl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                to={item.path}
                className="block px-3 py-2 rounded text-gray-300 hover:bg-gray-700 hover:text-white transition-colors text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

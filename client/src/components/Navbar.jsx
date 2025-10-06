// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
//       <div className="font-bold text-xl">Student-Teacher Connect</div>
//       <div className="space-x-4">
//         {user ? (
//           <>
//             <span>Hi, {user.name}</span>
//             <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="hover:underline">Login</Link>
//             <Link to="/register" className="hover:underline">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-blue-600 cursor-pointer"
      >
        Student–Teacher Connect
      </div>

      {/* Middle Nav links (always visible) */}
      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
          Contact
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            {user.role === "teacher" && (
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Post Assignment
              </button>
            )}

            <div className="relative group">
              <div className="cursor-pointer text-gray-700 font-semibold">
                {user.name}
              </div>
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md hidden group-hover:block w-44">
                <div className="px-4 py-2 text-gray-700 text-sm border-b">
                  {user.role.toUpperCase()}
                </div>
                <div className="px-4 py-2 text-gray-600 text-sm">
                  {user.email}
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

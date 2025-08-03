import { NavLink } from "react-router"; // corrected 
import toast from "react-hot-toast";
import UseAuth from "./authentication/UseAuth";

const NavBar = () => {
  const { user, logout } = UseAuth();

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary text-xl font-bold" : "text-xl font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary text-xl font-bold" : "text-xl font-semibold"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-primary text-xl font-bold" : "text-xl font-semibold"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary text-xl font-bold" : "text-xl font-semibold"
          }
        >
          Contact
        </NavLink>
      </li>

     
        <li>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive ? "text-primary text-xl font-bold" : "text-xl font-semibold"
            }
          >
            My Dashboard
          </NavLink>
        </li>
     
    </>
  );

  const handleLogOut = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error.message);
      toast.error("Failed to logout.");
    }
  };

  return (
    <div className="navbar bg-white max-w-7.5xl mx-auto shadow-md px-4">
      {/* Logo / Brand */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile dropdown button */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          {/* Mobile dropdown items */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <NavLink to="/" className="text-xl font-bold text-primary">
          MyPortfolio
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navItems}</ul>
      </div>

      {/* Right side: Login or Logout */}
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <span className="hidden md:inline text-sm font-semibold">{user.displayName}</span>
            <button onClick={handleLogOut} className="btn btn-sm btn-error">
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/sign-in" className="btn btn-sm btn-primary">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;

import { Navigate, Outlet, Link, useLocation } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes, FaInfoCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import UseAuth from "../pages/authentication/UseAuth";
import useUserRole from "../pages/authentication/hooks/useUserRole";
import DeveloperModal from "./home/DeveloperModal";


const DashboardLayout = () => {
  const { user, loading: authLoading } = UseAuth();
  const { role, loading: roleLoading } = useUserRole(user?.email);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  if (authLoading || roleLoading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/sign-in" />;

  const navItems = (
    <>
    
      {role === "admin" && (
        <>
          <li><Link to="/dashboard/users">All Users</Link></li>
          <li><Link to="/dashboard/articles">All Articles</Link></li>
          <li><Link to="/dashboard/messages">Messages</Link></li>
          <li><Link to="/dashboard/manageproject">Manage Projects</Link></li>
        </>
      )}
      {role === "user" && (
        <>
          <h1>this Page only for the developer</h1>
        </>
      )}
    </>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-purple-200 dark:bg-gray-800 p-6 z-40"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Dashboard</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="space-y-4">{navItems}</ul>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-purple-200 dark:bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">{navItems}</ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar */}
        <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md md:ml-0">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden">
            <FaBars size={24} />
          </button>
          <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
          <div>
            <span className="text-sm mr-4">{user.displayName}</span>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      {/* Floating Developer Info Button (Admin only) */}
      {role === "admin" && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-6 right-6 bg-primary hover:bg-secondary text-white p-4 rounded-full shadow-lg z-50"
        >
          <FaInfoCircle size={24} />
        </button>
      )}

      {/* Developer Modal */}
      <DeveloperModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default DashboardLayout;

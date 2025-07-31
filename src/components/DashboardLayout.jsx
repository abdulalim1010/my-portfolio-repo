// components/DashboardLayout.jsx
import { Navigate, Outlet } from "react-router";


import UseAuth from "../pages/authentication/UseAuth";
import useUserRole from "../pages/authentication/hooks/useUserRole";

const DashboardLayout = () => {
  const { user, loading: authLoading } = UseAuth()
  const { role, loading: roleLoading } = useUserRole(user?.email);

  if (authLoading || roleLoading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/sign-in" />;

  return (
    <div className="flex">
      <aside className="w-64 bg-purple-200 p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li><a href="/dashboard/profile">Profile</a></li>
          {role === "admin" && (
            <>
              <li><a href="/dashboard/users">All Users</a></li>
              <li><a href="/dashboard/articles">All Articles</a></li>
            </>
          )}
          {role === "user" && (
            <>
              <li><a href="/dashboard/my-articles">My Articles</a></li>
              <li><a href="/dashboard/submit">Submit New</a></li>
            </>
          )}
        </ul>
      </aside>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

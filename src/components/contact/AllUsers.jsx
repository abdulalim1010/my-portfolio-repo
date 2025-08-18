import React, { useEffect, useState } from "react";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://my-portfolio-server-theta-ivory.vercel.app/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">👥 All Registered Users</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-base-200">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name || "N/A"}</td>
                <td>{user.email}</td>
                <td>{user.role || "user"}</td>
                <td>
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

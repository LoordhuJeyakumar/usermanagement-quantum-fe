import React from "react";
import UserTable from "../components/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="bg-white h-screen">
      {/* Navbar with welcome message and logout button */}
      <div className="bg-[#1d2c4f] text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
        <div className="flex items-center">
          <span className="mr-2">{user?.name}</span>
          <img
            src="https://i.pravatar.cc/300
"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
      {/* Welcome message  */}
      <div>
        <h1 className="text-2xl font-bold text-center mt-4">
          Welcome {user?.name}
        </h1>
      </div>
      {/* User table component */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <UserTable />
      </div>
    </div>
  );
}

export default Dashboard;

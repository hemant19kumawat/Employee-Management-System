import React from "react";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  UserCircle,
  LogOut
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

function SideBar() {

  const navigate = useNavigate();

  const logout = () => {

    // BACKEND: clear JWT/cookie here when authentication is connected

    navigate("/login");
  };

  return (
    <aside className="w-60 min-h-screen bg-slate-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        EMS
      </h1>

      <p className="text-xs text-gray-400 mb-3">
        EMPLOYEE MANAGEMENT
      </p>

      <div className="space-y-2">

        <Link
          to="/dashboard"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-600"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>


        <Link
          to="/employees"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-600"
        >
          <Users size={18} />
          Employees
        </Link>


        <Link
          to="/employees/add"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-600"
        >
          <UserPlus size={18} />
          Add Employee
        </Link>


        <Link
          to="/profile"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-600"
        >
          <UserCircle size={18} />
          Profile
        </Link>


        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default SideBar;
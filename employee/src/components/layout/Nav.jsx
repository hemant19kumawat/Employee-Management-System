import React from "react";
import { Bell, User } from "lucide-react";

function Nav() {

  return (
    <nav className="h-16 bg-white border-b flex items-center justify-between px-6">

      <input
        type="text"
        placeholder="Search here..."
        className="w-80 px-4 py-2 bg-gray-100 rounded-lg outline-none"
      />

      <div className="flex items-center gap-5">

        <Bell size={20} />

        <div className="flex items-center gap-2">

          <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center">
            <User size={18} />
          </div>

          <div>
            <p className="text-sm font-semibold">
              Admin
            </p>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>

        </div>

      </div>

    </nav>
  );
}

export default Nav;
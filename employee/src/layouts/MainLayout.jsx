import React from "react";
import Nav from "../components/layout/Nav";
import SideBar from "../components/layout/SideBar";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <SideBar />

      <div className="flex-1">

        <Nav />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;
// import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-26rem-auto grid-rows-auto-1fr h-screen">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <main className="bg-gray-50 overflow-scroll">
        {/* Content Container */}
        <div className="space-y-8">
          {/* Outlet for nested routes */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;

import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
      <Toaster></Toaster>
    </div>
  );
};

export default Root;

import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";
import LoadingPage from "../Components/LoadingPage";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="px-4 py-6">
        {state == "loading" ? <LoadingPage /> : <Outlet />}
      </main>
      <Footer />
      <Toaster></Toaster>
    </div>
  );
};

export default Root;

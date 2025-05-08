import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Subscription from "../Components/Subscription";

const MySubscription = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="pt-20 flex-1">
        <Subscription />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MySubscription;

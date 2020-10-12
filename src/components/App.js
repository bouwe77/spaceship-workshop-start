import React from "react";
import Spaceship from "./Spaceship";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Spaceship />
      <div style={{ height: "400px" }}></div>
      <Footer />
    </div>
  );
}

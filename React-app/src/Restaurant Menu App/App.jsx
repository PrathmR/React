import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./index.css";
function App() {
  // make your changes here
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        {/* pass "items" imported above here as items prop */}
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;

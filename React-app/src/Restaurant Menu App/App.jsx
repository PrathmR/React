import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./index.css"; // Assuming you have some styles in App.css

function App() {
  const [menuItems, setMenuItems] = useState(items);

  // Filter based on category
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items); // show all items
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

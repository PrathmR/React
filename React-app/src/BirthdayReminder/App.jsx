import React, { useState } from "react";
import data from "./BirthdayReminder/data";
import List from "./BirthdayReminder/List";
function App() {
  const [people, setPeople] = useState(data);

  function clearAllRecords() {
    setPeople([]);
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={clearAllRecords} className="active:scale-90">
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;

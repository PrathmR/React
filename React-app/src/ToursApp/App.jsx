import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <div>
      {tours.map((tour) => (
        <h2 key={tour.id}>{tour.name}</h2>
      ))}
    </div>
  );
}

export default App;

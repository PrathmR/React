import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./App.css"; // Assuming you have some styles in App.css
const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTours() {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log("Fetched tours:", data);
      setTours(data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTours() {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setTours(data);
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
      {/* ✅ pass fetched tours */}
      <Tours tours={tours} />
    </main>
  );
}

export default App;

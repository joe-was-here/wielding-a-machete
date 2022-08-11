import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");

  const getGreeting = async () => {
    const response = await axios.get("http://localhost:5555/greeting", {
      params: { name },
    });
    setGreeting(response.data);
  };

  useEffect(() => {
    getGreeting();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getGreeting();
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <h1>{greeting}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

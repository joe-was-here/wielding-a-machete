import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    console.log("App rendered");
    axios.get("http://localhost:5555/greeting").then((res) => {
      console.log(res.data);
      setGreeting(res.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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

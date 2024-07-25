// import { H1 } from "./App.styled";

import { Routes, Route } from "react-router";
import Home from "./Home";
import NoMatch from "./NoMatch";

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

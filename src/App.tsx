import { useState } from "react";
import "./App.css";
import CustomScroller from "./components/CustomScroller";
import Card from "./components/Card";

function App() {
  const [titles] = useState([
    "Html",
    "Css",
    "Javascript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "PostgreSQL",
  ]);
  const cardComponents = titles.map((title, index) => (
    <Card key={index} title={title} />
  ));
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <h1 className="text-3xl font-bold underline">
          Inifite Scroll Animation
        </h1>
        <CustomScroller PropContent={cardComponents} />
      </div>
    </>
  );
}

export default App;

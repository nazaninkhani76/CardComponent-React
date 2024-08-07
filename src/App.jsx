// src/App.jsx
import React from "react";
import Card from "./components/Card";
import carimage from "./assets/car.jpg";

function App() {
  const buttons = [
    { label: "SHARE", onClick: () => alert("SHARE!") },
    { label: "LEARN MORE!", onClick: () => alert("LEARN MORE!") },
  ];

  return (
    <div className="App">
      <div className="card-container">
        <Card
          carimage={carimage}
          title="LIZARD"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
          buttons={buttons}
        />
      </div>
    </div>
  );
}

export default App;

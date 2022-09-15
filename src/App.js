import "./App.css";
import { useState } from "react";
import clothing from "./data";

// When Grabbing Something Random...
// Math.floor(<yourArray>.length * Math.random())

function App() {
  const [dressCode, setDressCode] = useState({ dressCode: "casual" });
  // console.log("DressCode: ", dressCode);

  const findItem = (type) => {
    const filteredItems = clothing.filter(
      (clothingItem) =>
        clothingItem.type === type &&
        clothingItem.dressCode === dressCode.dressCode
    );
    return filteredItems[Math.floor(Math.random() * filteredItems.length)];
  };

  const resetState = () => {
    return setDressCode("");
  };

  return (
    <div className="App-container">
      <div className="App">
        <h1>Outfit Planner App</h1>
        <h2>Find What To Wear</h2>

        <div id="button-container">
          <button
            className="button"
            id="casual-button"
            onClick={() => {
              resetState();
              setDressCode({ dressCode: "casual" });
            }}
          >
            Casual
          </button>
          <button
            className="button"
            id="sport-button"
            onClick={() => setDressCode({ dressCode: "sport" })}
          >
            Sport
          </button>
          <button
            className="button"
            id="formal-button"
            onClick={() => setDressCode({ dressCode: "formal" })}
          >
            Formal
          </button>
        </div>

        <br />

        <div id="outfit-container">
          <label>Top</label>
          <div id="top">
            <img
              src={findItem("top").imageUrl}
              style={{ width: "125px", height: "125px", objectFit: "cover" }}
              alt="top item"
            />
          </div>
          <label>Bottom</label>
          <div id="bottom">
            <img
              src={findItem("bottom").imageUrl}
              style={{ width: "125px", height: "125px", objectFit: "cover" }}
              alt="Bottom item"
            ></img>
          </div>
          <label>Shoes</label>
          <div id="shoes">
            {" "}
            <img
              src={findItem("shoes").imageUrl}
              style={{ width: "125px", height: "125px", objectFit: "cover" }}
              alt="shoes item"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// const findTop = () => {
//   const filteredItems = clothing.filter(
//     (clothingItem) =>
//       clothingItem.type === "top" && clothingItem.dressCode === dressCode
//   );
//   return filteredItems[Math.floor(Math.random() * filteredItems.length)];
// };

//   const findBottom = () => {
//     const filteredItems = clothing.filter(
//       (clothingItem) =>
//         clothingItem.type === "bottom" && clothingItem.dressCode === dressCode
//     );
//     return filteredItems[Math.floor(Math.random() * filteredItems.length)];
//   };

// const findShoes = () => {
//   const filteredItems = clothing.filter(
//     (clothingItem) =>
//       clothingItem.type === "shoes" && clothingItem.dressCode === dressCode
//   );
//   return filteredItems[Math.floor(Math.random() * filteredItems.length)];
// };

export default App;

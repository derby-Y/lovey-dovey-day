import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Reallyyy sure?",
  "Plz dont break my kiddo heart",
  "Scara kitty :(",
];
function App() {
  const [noCount, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setCount(noCount + 1);
  }
  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img alt="cat with hearts" src="https://tenor.com/bySXn.gif" />
          <div className="text">Yayyyyy!!!!!</div>
        </>
      ) : (
        <>
          <img alt="cat crying" src="https://tenor.com/bhFXP.gif" />
          <div>Will you be my Sun to my Moon?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;

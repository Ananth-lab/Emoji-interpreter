import "./styles.css";
import React, { useState } from "react";
const emojiDictionary = {
  "ð": "Grinning Face",
  "ð": "Winking Face",
  "ðĪŠ": "Zany Face",
  "ðĪ": "Hugging Face",
  "ð": "Neutral Face",
  "ð": "annoyance",
  "ðŠ": "sleepy Face",
  "ðĨĩ": "Hot Face",
  "ðĨī": "Woozy Face",
  "ðĩ": "Dizzy Face",
  "ðŊ": "Hushed Face",
  "ðģ": "Flushed Face"
};
const emojis = Object.keys(emojiDictionary);
export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Your answer will be displayed here");
  function onChangeHandler(emoji) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("We dont have this emoji here");
    }
  }
  function onClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }
  return (
    <div className="App">
      <h1 style={{ color: "blue", paddingTop: "1rem" }}>Emoji Interpretter</h1>
      <input
        onChange={onChangeHandler}
        placeHolder={"You need to insert your emoji here"}
        style={{
          background: "rgb(216, 213, 213)",
          padding: "1rem",
          margin: "2rem",
          width: "90%",
          height: "5vh"
        }}
        value={emoji}
      />
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => onClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "1.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
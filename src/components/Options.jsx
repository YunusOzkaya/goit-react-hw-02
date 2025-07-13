function Options({ handleChange }) {
  return (
    <>
      <div>
        <button onClick={() => handleChange("good")}>Good</button>
        <button onClick={() => handleChange("neutral")}>Neutral</button>
        <button onClick={() => handleChange("bad")}>Bad</button>
        <button onClick={() => handleChange("reset")}>Reset</button>
      </div>
    </>
  );
}

export default Options;

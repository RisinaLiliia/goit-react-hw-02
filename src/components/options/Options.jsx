import styles from "./options.module.css";

function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={styles.resetButton}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;

import styles from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.feedback}>
      {" "}
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>
        <strong>Total feedback:</strong> {total}
      </p>
      <p>
        <strong>Positive feedback:</strong> {positivePercentage}%
      </p>
    </div>
  );
}

export default Feedback;

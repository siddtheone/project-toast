import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("asfd");
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [showToast, setShowToast] = useState(false);
  const onPopToast = () => setShowToast(true);
  const closeToast = () => setShowToast(false);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast message={message} variant={variant} onClose={closeToast} />
      )}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((opt) => (
              <label htmlFor={`variant-${opt}`} key={opt}>
                <input
                  id={`variant-${opt}`}
                  type="radio"
                  name="variant"
                  value={opt}
                  onChange={(e) => setVariant(e.target.value)}
                  checked={opt === variant}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={onPopToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;

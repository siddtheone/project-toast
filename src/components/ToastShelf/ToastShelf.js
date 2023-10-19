import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import VisuallyHidden from "../VisuallyHidden";

function ToastShelf({ messages, onDelete }) {
  if (!messages.length) {
    return null;
  }

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {messages.map(({ id, message, variant }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} onClose={() => onDelete(id)}>
            <VisuallyHidden>{variant} - </VisuallyHidden>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

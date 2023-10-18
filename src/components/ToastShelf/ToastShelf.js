import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ messages, onDelete }) {
  if (!messages.length) {
    return null;
  }

  return (
    <ol className={styles.wrapper}>
      {messages.map(({ id, message, variant }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} onClose={() => onDelete(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

import React, { useState } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const onToastSubmit = React.useCallback((message, variant) => {
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  }, []);

  const onDelete = React.useCallback((idToDelete) => {
    setMessages((currentMessages) =>
      currentMessages.filter(({ id }) => id !== idToDelete)
    );
  }, []);

  const contextValue = React.useMemo(() => {
    return { messages, onToastSubmit, onDelete };
  }, [messages, onDelete, onToastSubmit]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

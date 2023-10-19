import { useEffect } from "react";

export function useEscapeKey(cb) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.code === "Escape" && typeof cb === "function") {
        cb();
      }
    }

    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  }, [cb]);
}

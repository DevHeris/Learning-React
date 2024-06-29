import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const modalRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) handler();
    }

    // Note that both true's below are necessary arguments that has to do with event bubbling and capturing
    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return { modalRef };
}

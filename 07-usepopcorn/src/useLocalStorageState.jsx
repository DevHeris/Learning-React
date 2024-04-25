import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, keyName) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(keyName);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [value, keyName]);

  return [value, setValue];
}

import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {

  // set function of useLocalStorage
  const [value, setValue] = useState(() => {// usig setValue trigger if vvalue changes by setValue
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue) // if key no present, add defaulValue
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  // apply side effects
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
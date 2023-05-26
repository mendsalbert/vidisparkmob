import { useEffect, useState } from "react";

const moodhook = () => {
  const [mood, setMood] = useState(false);
  useEffect(() => {
    setMood(localStorage.getItem("mood"));
  }, []);
  return mood;
};
export default moodhook;

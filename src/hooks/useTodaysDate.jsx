import { useState, useEffect } from "react";

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }); // e.g., July
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const useTodayDate = () => {
  const [today, setToday] = useState(formatDate(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(formatDate(new Date()));
    }, 60 * 1000); // updates every minute

    return () => clearInterval(timer);
  }, []);

  return today;
};

export default useTodayDate;

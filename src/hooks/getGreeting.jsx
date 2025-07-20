import { useEffect, useState } from "react";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 20) return "Good Evening";
  return "Good Night";
};

const useGreeting = () => {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60 * 1000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return greeting;
};

export default useGreeting;

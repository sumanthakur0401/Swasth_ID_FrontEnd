"use client";

import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/lottie/loading.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden">
      {animationData && (
        <Lottie
          loop
          animationData={animationData}
          play
          className="w-[80vw] h-[80vh] max-w-[500px] max-h-[500px] object-contain"
        />
      )}
    </div>
  );
}

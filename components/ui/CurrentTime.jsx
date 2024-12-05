"use client";

import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const isAM = hours < 12;

      hours = hours % 12;
      if (hours === 0) hours = 12; // For midnight, set to 12 instead of 0

      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      const period = isAM ? "AM" : "PM";

      setTime(`${hours}:${formattedMinutes} ${period}`);
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return <p className="font-montreal text-xs text-gray-200">{time}</p>;
};

export default CurrentTime;

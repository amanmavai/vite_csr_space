import {cn} from "@/lib/utils";
import React from "react";

export function Component() {
  const [light, setLight] = React.useState("red");

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLight((currentLight) => {
        switch (currentLight) {
          case "red":
            return "green";
          case "green":
            return "yellow";
          case "yellow":
            return "red";
          default:
            return "red";
        }
      });
    }, 300); // Change the light every 3 seconds

    return () => clearInterval(timer);
  }, []);

  let lightClass = "h-32 w-32 rounded-full";

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className={cn(lightClass, light === "red" ? "bg-red-400" : "bg-gray-200")} />
      <div className={cn(lightClass, light === "green" ? "bg-green-400" : "bg-gray-200")} />
      <div className={cn(lightClass, light === "yellow" ? "bg-yellow-400" : "bg-gray-200")} />
    </div>
  );
}

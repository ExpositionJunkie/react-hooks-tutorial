import React, { useEffect } from "react";

export const Hello = () => {
  useEffect(() => {
    console.log("Mounted Hello");

    return () => {
      console.log("Unmounted Hello");
    };
  }, []);

  return <div>Hello!</div>;
};

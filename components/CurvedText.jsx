import React, { useEffect } from "react";
import CircleType from "circletype";
import { HeartIcon } from "@heroicons/react/solid";

const CurvedText = ({ children }) => {
  useEffect(() => {
    new CircleType(document.getElementById("text")).radius(384);
    return () => {};
  }, []);
  return (
    <div className="flex justify-between">
      <HeartIcon className="w-6 text-primary rotate-[-45deg]" />
      <div id="text" className="text-5xl text-primary font-bold">
        {children}
      </div>
      <HeartIcon className="w-6 text-primary rotate-[45deg]" />
    </div>
  );
};

export default CurvedText;

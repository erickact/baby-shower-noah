import React, { useState } from "react";
import { DuplicateIcon } from "@heroicons/react/solid";

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const handleMouseLeave = () => {
    setCopied(false);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative group"
      onMouseLeave={handleMouseLeave}
    >
      <DuplicateIcon className="w-5 h-5 text-gray-300" />
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 bg-brown text-white rounded p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
};

export default CopyToClipboard;


"use client";
import React from "react";

const HeadLine = () => {
  const text = " VIEW COLLECTIONS - CREATE WALLET - ";
  // Duplicate the text multiple times to ensure smooth looping
  const repeatedText = `${text} ${text} ${text} ${text} ${text} ${text}`;

  return (
    <div className="relative w-full overflow-hidden border-y border-black  py-4">
      <div className="flex w-full">
        <div className="marquee-scroll flex whitespace-nowrap min-w-full">
          <span className="mx-4  text-md">{repeatedText}</span>
        </div>
        <div className="marquee-scroll flex whitespace-nowrap min-w-full">
          <span className="mx-4 text-md">{repeatedText}</span>
        </div>
      </div>
    </div>
  );
};

export default HeadLine;

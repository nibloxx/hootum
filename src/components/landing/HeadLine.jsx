"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const HeadLine = () => {
  const text = " VIEW COLLECTIONS - CREATE WALLET - ";
  const repeatedText = `${text} ${text} ${text} ${text} ${text} ${text}`;

  return (
    <div className="relative w-full overflow-hidden border-y border-black py-4">
      {/* Container for marquee */}

      <Marquee>
        {" "}
        <div className="flex whitespace-nowrap">
          <span className="mx-4 text-md">{repeatedText}</span>
        </div>
      </Marquee>
    </div>
  );
};

export default HeadLine;

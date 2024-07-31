"use client";

import { Typewriter as ReactTypewriter } from "react-simple-typewriter";

interface TypeWriterProps {
  words: string[];
}

export function TypeWriter({ words }: TypeWriterProps) {
  return (
    <p className="mb-3 text-app-blue-400 text-sm">
      <ReactTypewriter
        words={words}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </p>
  );
}

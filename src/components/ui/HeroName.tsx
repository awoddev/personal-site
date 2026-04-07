"use client";

import { useState, useCallback, useRef } from "react";

const CHARS = "abcdefghijklmnopqrstuvwxyz";
const TICK_MS = 40;
const SCRAMBLE_ROUNDS = 10;

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function HeroName() {
  const [suffix, setSuffix] = useState<[string, string]>(["e", "x"]);
  const [showBy, setShowBy] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrambleTo = useCallback(
    (target: [string, string], onDone?: () => void) => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      let tick = 0;
      intervalRef.current = setInterval(() => {
        tick++;

        const first = tick >= SCRAMBLE_ROUNDS - 2 ? target[0] : randomChar();
        const second = tick >= SCRAMBLE_ROUNDS ? target[1] : randomChar();

        setSuffix([first, second]);

        if (tick >= SCRAMBLE_ROUNDS) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          onDone?.();
        }
      }, TICK_MS);
    },
    []
  );

  function handleEnter() {
    scrambleTo(["a", "d"], () => setShowBy(true));
  }

  function handleLeave() {
    setShowBy(false);
    scrambleTo(["e", "x"]);
  }

  return (
    <h1
      className="hero-name"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className={`hero-by${showBy ? " visible" : ""}`}>by </span>
      Imd
      <span className="hero-suffix">{suffix[0]}{suffix[1]}</span>
      <span className="hero-dot">.</span>
    </h1>
  );
}

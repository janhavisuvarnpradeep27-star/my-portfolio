import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 75,
  deletingSpeed = 38,
  pauseMs = 2200
) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];

    if (!deleting && charIdx === word.length) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setCharIdx((i) => i + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  useEffect(() => {
    setText(words[wordIdx % words.length].slice(0, charIdx));
  }, [charIdx, wordIdx, words]);

  return text;
}

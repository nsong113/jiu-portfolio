import { useEffect, useState } from "react";

const useTypeword = (completeWords: string, delay: number) => {
  const [words, setWords] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typeWords = setInterval(() => {
      if (words.length === completeWords.length) {
        return;
      }

      setWords((prevWord) => {
        let nextWord = prevWord ? prevWord + completeWords[count] : completeWords[0];

        setCount(count + 1);

        return nextWord;
      });
    }, delay);

    return () => {
      clearInterval(typeWords);
    };
  });

  return words;
};

export default useTypeword;

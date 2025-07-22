import { useState, useEffect } from "react";

export function useTypingEffect(fullTitle: string, fullSubtitle: string) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    setTitle('');
    setSubtitle('');

    const titleInterval = setInterval(() => {
      setTitle(prev => {
        if (prev.length < fullTitle.length) {
          return fullTitle.slice(0, prev.length + 1);
        } else {
          clearInterval(titleInterval);
          return prev;
        }
      });
    }, 50);

    const subtitleDelay = fullTitle.length * 50 + 300;
    const subtitleTimeout = setTimeout(() => {
      const subtitleInterval = setInterval(() => {
        setSubtitle(prev => {
          if (prev.length < fullSubtitle.length) {
            return fullSubtitle.slice(0, prev.length + 1);
          } else {
            clearInterval(subtitleInterval);
            return prev;
          }
        });
      }, 25);
    }, subtitleDelay);

    return () => {
      clearInterval(titleInterval);
      clearTimeout(subtitleTimeout);
    };
  }, [fullTitle, fullSubtitle]);

  return { title, subtitle };
}
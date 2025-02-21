import React, { useEffect, useState } from 'react';

const CodingAnimation = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [blinkCursor, setBlinkCursor] = useState(true);

  const codeLines = [
    'const developer = {',
    '  name: "Avi Srivastava",',
    '  passion: "Web Development",',
    '  skills: ["MERN", "Next.js"],',
    '  status: "Learning & Growing",',
    '};',
    '',
    'while (alive) {',
    '  code();',
    '  learn();',
    '  grow();',
    '}'
  ];

  const [displayedLines, setDisplayedLines] = useState(Array(codeLines.length).fill(''));

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayedLines(prev => {
        const newLines = [...prev];
        if (currentLine < codeLines.length) {
          const currentLineText = codeLines[currentLine];
          if (currentChar < currentLineText.length) {
            newLines[currentLine] = currentLineText.slice(0, currentChar + 1);
            setCurrentChar(prev => prev + 1);
          } else {
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
          }
        } else {
          clearInterval(typingInterval);
        }
        return newLines;
      });
    }, 50);

    const cursorInterval = setInterval(() => {
      setBlinkCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [currentLine, currentChar]);

  return (
    <div className="w-full mt-10 h-full bg-[#1E1E1E] rounded-xl border border-purple-600/30 p-6 font-mono text-sm overflow-hidden">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-1">
        {displayedLines.map((line, index) => (
          <div key={index} className="flex">
            <span className="mr-4 text-gray-500">{(index + 1).toString().padStart(2, '0')}</span>
            <span className="text-purple-300">
              {line}
              {index === currentLine && blinkCursor && '|'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingAnimation;
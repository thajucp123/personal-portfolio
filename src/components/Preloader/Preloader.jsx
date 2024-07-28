import { useState, useEffect } from 'react';
import './loader-styles.css';

const emojis = ["🐵", "🙈", "🙉", "🙊", "🐒", "🐵", "🙈", "🙉", "🙊", "🐵", "🐵"];

function Preloader() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prevProgress) => {
        const newProgress = Math.min(prevProgress + 1, 100);
        if (newProgress < 100 && newProgress % 10 === 0) {
          setActive(true);
          setTimeout(() => {
            setActive(false);
          }, 500);
        }
        return newProgress;
      });
    };

    if (progress < 100) {
      const interval = setInterval(updateProgress, 38); // Adjust the interval for slower progress
      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <div className="scene">
      <div id="loader" className={active ? 'loaderactive' : ''}>
        <div id="emoji">{emojis[Math.floor(progress / 10)]}</div>
        <span>Loading</span>
        <div id="progress">{progress}%</div>
      </div>
    </div>
  );
}

export default Preloader;

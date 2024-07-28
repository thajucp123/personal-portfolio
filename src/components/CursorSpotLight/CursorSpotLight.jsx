import { useEffect } from 'react';
import './cursor-style.css';

export const CursorSpotLight = () => {

  useEffect(() => {
    const spotlight = document.querySelector('.spotlight');
    const links = document.querySelectorAll('a');
    let MouseNoMove;

    const spotlightW = spotlight.offsetWidth;
    const spotlightH = spotlight.offsetHeight;

    // When link hovered
    links.forEach(link => {
      link.addEventListener('mouseenter', event => {
        spotlight.classList.add("spotlight-hover");
        spotlightEnter(event.target);
      });
      link.addEventListener('mouseleave', event => {
        spotlight.classList.remove("spotlight-hover");
        spotlightLeave(event.target);
      });
    });

    // When mouse moves
    window.addEventListener('mousemove', event => {
      spotlightFollow(event);
      spotlight.classList.add("spotlight-move");

      // No move
      clearTimeout(MouseNoMove);
      MouseNoMove = setTimeout(() => {
        spotlight.classList.remove("spotlight-move");
      }, 1000);
    });

    // Spotlight position: position of the mouse based on the window
    const spotlightFollow = (e) => {
      const mousePosX = e.clientX;
      const mousePosY = e.clientY;

      if (!spotlight.classList.contains('spotlight-hover')) {
        const x = mousePosX - spotlightW / 2;
        const y = mousePosY - spotlightH / 2;
        spotlight.style.setProperty('--x', `${x}px`);
        spotlight.style.setProperty('--y', `${y}px`);
      }
    };

    // Spotlight position and scale based on the link hovered
    const spotlightEnter = (target) => {
      const rect = target.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - spotlightW / 2;
      const y = rect.top + rect.height / 2 - spotlightH / 2;
      spotlight.style.setProperty('--x', `${x}px`);
      spotlight.style.setProperty('--y', `${y}px`);

      // Scale of the link
      const linkScale = Math.max(rect.width, rect.height);
      const spotlightScale = 30;
      const coeff = 0.8;
      const MaxScale = 10;
      const scale = Math.min(linkScale / (spotlightScale * coeff), MaxScale);
      spotlight.style.setProperty('--scale', scale);
    };

    // Spotlight position and scale reset
    const spotlightLeave = () => {
      spotlight.classList.remove('spotlight-hover');
    };
  }, []);

  return (
    <div className="spotlight">
      <div className="spotlight-inner"></div>
    </div>
  );
};

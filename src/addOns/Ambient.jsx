import React, { useEffect, useRef, useState } from "react";

function Ambient({ muteAll }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  const TARGET_VOLUME = 0.1;
  const FADE_STEP = 0.01;
  const FADE_SPEED = 30; // ms

  const clearFade = () => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
  };

  const fadeOut = (callback) => {
    clearFade();
    fadeIntervalRef.current = setInterval(() => {
      if (audioRef.current.volume > FADE_STEP) {
        audioRef.current.volume -= FADE_STEP;
      } else {
        audioRef.current.volume = 0;
        audioRef.current.pause();
        clearFade();
        if (callback) callback();
      }
    }, FADE_SPEED);
  };

  const fadeIn = () => {
    clearFade();
    audioRef.current.play();
    fadeIntervalRef.current = setInterval(() => {
      if (audioRef.current.volume < TARGET_VOLUME - FADE_STEP) {
        audioRef.current.volume += FADE_STEP;
      } else {
        audioRef.current.volume = TARGET_VOLUME;
        clearFade();
      }
    }, FADE_SPEED);
  };

  const toggle = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      fadeOut(() => setIsPlaying(false));
    } else {
      setIsPlaying(true);
      fadeIn();
    }
  };

  // Mute All logic with smooth fade
  useEffect(() => {
    if (muteAll && isPlaying) {
      fadeOut(() => setIsPlaying(false));
    }
  }, [muteAll]);

  useEffect(() => {
    // Initial setup
    audioRef.current.volume = 0;

    const handleFirstInteraction = () => {
      if (audioRef.current.paused && !isPlaying) {
        setIsPlaying(true);
        fadeIn();
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      clearFade();
    };
  }, []);

  return (
    <div
      onClick={toggle}
      // Responsive: Bigger on mobile for easier tap (h-10), standard on desktop (md:h-9)
      className="fixed z-50 cursor-pointer bottom-6 right-6 md:bottom-12 md:right-10 bg-black h-10 w-10 md:h-9 md:w-9 rounded-full transition-all flex items-center justify-center gap-[3px] shadow-lg border border-white/10"
    >
      {[1, 2, 3, 4].map((i) => (
        <div 
          key={i} 
          className={`music-bar ${isPlaying ? "animating" : "bar-paused"}`} 
          style={{
            width: '2px',
            backgroundColor: 'white',
            height: isPlaying ? '12px' : '4px',
            transition: 'height 0.3s ease'
          }}
        />
      ))}

      <audio ref={audioRef} src="/sound/ambient-piano.mp3" loop />
    </div>
  );
}

export default Ambient;
import React, { useEffect, useRef, useState } from "react";

function Ambient({muteAll}) {
  // String compare karne ki jagah Boolean use karna better hai
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggle = (e) => {
    // Event bubbling roko taaki global click trigger na ho
    e.stopPropagation();

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (muteAll) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  }, [muteAll]);

  useEffect(() => {
    // Volume set karo
    audioRef.current.volume = 0.1;

    // Browser policy bypass karne ke liye 'First Interaction' pe play
    const handleFirstInteraction = () => {
      if (audioRef.current.paused && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => console.log("Autoplay blocked", err));
      }
    };

    // { once: true } ka use karein taaki ye sirf PEHLI baar chale
    window.addEventListener("click", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
    };
  }, []);

  return (
    <div
      onClick={toggle}
      className="fixed z-50 cursor-pointer bottom-12 right-5 bg-black h-9 w-9  rounded-full  transition-all flex items-center justify-center gap-1 "
    >
      {/* 4 Music Bars Loop */}
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={`music-bar ${isPlaying ? "" : "bar-paused"}`} />
      ))}

      <audio ref={audioRef} src="/sound/ambient-piano.mp3" loop />
    </div>
  );
}

export default Ambient;

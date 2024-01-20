import useSound from "use-sound";
import boopSfx from "../../../../public/sounds/countdownSoundEfffect.mp3";
import { useEffect } from "react";

const AlertPlayer = ({ announceAlert, isRunning }) => {
  const [play, { stop }] = useSound(boopSfx);

  useEffect(() => {
    if (announceAlert && isRunning) {
      play();
    } else {
      // If the timer is paused or reset, stop the sound
      stop();
    }
  }, [announceAlert, isRunning, play, stop]);

  return null; // You can return null as AlertPlayer doesn't render anything
};

export default AlertPlayer;

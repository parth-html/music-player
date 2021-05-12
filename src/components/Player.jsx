import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import ToggleButton from "@material-ui/lab/ToggleButton";
import darubadnam from "../songs/Give Me Some Sunshine.mp3";
import musicImg from "../images/music.jpg";
const Player = () => {
  // playPause

  const playPause = () => {
    let audio = document.getElementById("audio_id");

    if (icon.type.type.render.displayName === "PlayArrowIcon") {
      audio.play();
      seticon(<PauseIcon style={{ fontSize: 80 }} />);
    } else {
      seticon(<PlayArrowIcon style={{ fontSize: 80 }} />);
      audio.pause();
    }
  };
  // playPause end

  // music duration check
  const durationCheck = (e) => {
    let { duration } = e.nativeEvent.srcElement;
    let minit = Math.floor(duration / 60);
    let second = Math.floor(duration % 60);
    if (minit < 10) {
      minit = `0${minit}`;
    }
    if (second < 10) {
      second = `0${second}`;
    }
    setmusicDuration(`${minit}:${second}`);
  };

  // music duration check end

  // music time update

  const timeUpdate = (e) => {
    let { currentTime, duration } = e.nativeEvent.srcElement;
    let width = (currentTime / duration) * 100;
    let progress = document.getElementById("progress");
    progress.style.width = width + "%";
    let minit = Math.floor(currentTime / 60);
    let second = Math.floor(currentTime % 60);
    if (minit < 10) {
      minit = `0${minit}`;
    }
    if (second < 10) {
      second = `0${second}`;
    }
    setmusiccurrenttime(`${minit}:${second}`);
  };

  // music time update end

  // music fast Forward

  useEffect(() => {
    const music_path = document.getElementById("progrss_path");
    music_path.onclick = (e) => {
      const clientWidth = music_path.offsetWidth;
      const { offsetX } = e;
      document.getElementById("progress").style.width =
        (offsetX / clientWidth) * 100 + "%";
      let audio = document.getElementById("audio_id");
      const { duration } = audio;
      audio.currentTime = (offsetX / clientWidth) * duration;
    };
  }, []);

  // music fast Forward end

  const [musiccurrenttime, setmusiccurrenttime] = useState("00:00");
  const [musicDuration, setmusicDuration] = useState("00:00");
  const [selected, setSelected] = React.useState(false);
  const [secondSelect, setsecondSelect] = useState(false);
  const [icon, seticon] = useState(<PlayArrowIcon style={{ fontSize: 80 }} />);

  return (
    <div className="bg-gray-100 w-full h-screen flex items-center">
      <div
        className="w-1/2 h-96
       rounded-lg shadow-2xl bg-red-100 mx-auto"
      >
        <div className="h-3/4 flex">
          <div className="w-1/3 h-full bg-gray-100 rounded-tl-lg">
            <img
              src={musicImg}
              className="object-cover h-full w-64"
              alt="Music img"
            />
          </div>
          <div className="w-2/3 h-full">
            <div className="w-full h-1/3 bg-white flex items-center">
              <div className="mx-auto">
                <h1 className="text-3xl text-gray-800 font-light">
                  give me some sunshine
                </h1>
                <strong className="text-gray-400 text-lg font-extralight">
                  3 idiots
                </strong>
              </div>
              <div className="mx-auto">
                <FavoriteBorderIcon
                  className="text-gray-400 cursor-pointer"
                  fontSize="large"
                  onClick={(e) =>
                    (e.target.style.color = "rgba(248, 113, 113)")
                  }
                />
              </div>
            </div>
            <div className=" h-2/3 bg-white grid place-items-center">
              <div className="w-3/4 flex items-center h-full">
                <ToggleButton
                  value="check"
                  className="focus:outline-none"
                  style={{ border: 0 }}
                  selected={selected}
                  onChange={() => {
                    setSelected(!selected);
                  }}
                >
                  <ShuffleIcon style={{ fontSize: 40 }} />
                </ToggleButton>
                <button className="mx-auto">
                  <SkipPreviousIcon style={{ fontSize: 40 }} />
                </button>

                <button className="focus:outline-none" onClick={playPause}>
                  <div className="w-28 h-28 rounded-full shadow-lg items-center grid place-items-center bg-yellow-500 ">
                    <audio
                      src={darubadnam}
                      id="audio_id"
                      onTimeUpdate={timeUpdate}
                      onCanPlay={durationCheck}
                    ></audio>
                    {icon}
                  </div>
                </button>
                <button className="mx-auto">
                  <SkipNextIcon style={{ fontSize: 40 }} />
                </button>
                <ToggleButton
                  value="check"
                  className="focus:outline-none"
                  style={{ border: 0 }}
                  selected={secondSelect}
                  onChange={() => {
                    setsecondSelect(!secondSelect);
                  }}
                >
                  <RepeatIcon style={{ fontSize: 40 }} />
                </ToggleButton>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5 w-full flex justify-between">
            <span className="pl-5">
              <strong>{musiccurrenttime}</strong>
            </span>
            <span className="pr-5">
              <strong>{musicDuration}</strong>
            </span>
          </div>
          <div className="mt-2">
            <div
              className="h-1 bg-gray-400 mx-5 rounded-full cursor-pointer"
              id="progrss_path"
            >
              <div
                className="w-0 h-1 bg-red-600 rounded-full relative"
                id="progress"
              >
                {/* <span
                  draggable="true"
                  className="w-4 h-4 bg-red-600 absolute -top-1.5 rounded-full"
                ></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;

import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
const Player = () => {
  return (
    <div className="bg-gray-100 w-full h-screen flex items-center">
      <div
        className="w-1/2 h-96
       rounded-lg shadow-2xl bg-red-100 mx-auto"
      >
        <div className="h-3/4 flex">
          <div className="w-1/3 h-full bg-white rounded-lg"></div>
          <div className="w-2/3 h-full bg-yellow-100">
            <div className="w-full h-1/3 bg-purple-100 flex items-center">
              <div className="mx-auto bg-red-100">
                <h1 className="text-3xl text-gray-800 font-light">
                  give me some sunshine
                </h1>
                <strong className="text-gray-400 text-lg font-extralight">
                  3 idiots
                </strong>
              </div>
              <div className="mx-auto">
                <FavoriteBorderIcon fontSize="large" />
              </div>
            </div>
            <div className=" h-2/3 flex items-center bg-gray-100">
              <div className="bg-green-300 w-full h-full mx-auto">
                <ShuffleIcon />
                <SkipPreviousIcon />
                <PlayArrowIcon />
                <SkipNextIcon />
                <RepeatIcon />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mt-10">
            <div class="h-1 bg-gray-400 rounded-full">
              <div class="w-1/5 h-1 bg-red-200 rounded-full relative">
                <span class="w-4 h-4 bg-red-600 absolute -top-1.5 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;

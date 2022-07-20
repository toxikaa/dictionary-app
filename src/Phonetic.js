import React from "react";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <div className="phoneticAudio">
        <audio src={props.phonetic.audio} controls></audio>
      </div>
      <div className="phonetictext">{props.phonetic.text} </div>
    </div>
  );
}

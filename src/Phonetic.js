import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <i class="fa-solid fa-play">
        {" "}
        <audio src={props.phonetic.audio} controls></audio>{" "}
      </i>

      <br />
      {props.phonetic.text}
    </div>
  );
}

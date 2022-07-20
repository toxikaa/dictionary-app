import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="shadow-sm">
          <img className="imageValid" src="./images/sucroze4.png" alt="" />
        </section>
        <section className="shadow-sm">
          <h2>{props.results.word}</h2>
          <div className="phoneticsResult">
            {props.results.phonetics.map(function (phonetic, index) {
              if (index < 2) {
                return (
                  <div key={index}>
                    <Phonetic phonetic={phonetic} />
                  </div>
                );
              }
            })}
          </div>
        </section>
        <section className="shadow-sm">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return (
      <section className="shadow-sm">
        <img className="imageAsking" src="./images/sucroze1.png" alt="" />
        <p className="text-center noInfoText">Enter a word</p>
      </section>
    );
  }
}

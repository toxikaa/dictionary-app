import React, { useState } from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import sucroze1 from "./sucroze1.png";
import sucroze4 from "./sucroze4.png";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="shadow-sm">
          <img className="imageValid" src={sucroze4} alt="" />
        </section>
        <section className="shadow-sm">
          <h2>{props.results.word}</h2>
          <div className="phoneticsResult">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
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
        <img className="imageAsking" src={sucroze1} alt="" />
        <p className="text-center noInfoText">Enter a word</p>
      </section>
    );
  }
}

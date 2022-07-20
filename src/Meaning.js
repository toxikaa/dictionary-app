import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <Synonyms synonyms={props.meaning.synonyms} />
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="meaningsDef">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition}

                <br />
                <em className="examples">{definition.example}</em>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function submittedForm(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function changedForm(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionaryReturn">
      <form className="doctionary-form" onSubmit={submittedForm}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={changedForm}
        />
      </form>
      <Results results={results} />
    </div>
  );
}

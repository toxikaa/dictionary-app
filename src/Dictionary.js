import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function submittedForm(event) {
    event.preventDefault();
  }

  function changedForm(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <form className="doctionary-form" onSubmit={submittedForm}>
      <input type="search" placeholder="Enter a word" onChange={changedForm} />
    </form>
  );
}

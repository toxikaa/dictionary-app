import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function pexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function submittedForm(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelApiKey =
      "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: headers }).then(pexelsResponse);
  }

  function changedForm(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionaryReturn">
      <section className="formSection shadow-sm">
        <form className="doctionary-form" onSubmit={submittedForm}>
          <input
            type="search"
            placeholder="Enter a word"
            onChange={changedForm}
          />
        </form>
        <p className="suggested text-center">
          i.e. sunset, wine, yoga, coding, hate, evening, apple...
        </p>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}

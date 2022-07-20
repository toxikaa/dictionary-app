import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function submittedForm(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function changedForm(event) {
    setKeyword(event.target.value);
  }

  return (
    <form className="doctionary-form" onSubmit={submittedForm}>
      <input type="search" placeholder="Enter a word" onChange={changedForm} />
    </form>
  );
}

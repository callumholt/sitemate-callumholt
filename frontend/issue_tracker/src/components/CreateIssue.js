import React, { useState } from "react";

const CreateIssue = () => {
  const [issue, setIssue] = useState({ title: "", description: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:5000/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: Date.now(), ...issue }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Issue created:", data);
      })
      .catch((error) => console.error("Error creating issue:", error));
  };

  return (
    <div>
      <h2>Create Issue</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={issue.title}
          onChange={(e) => setIssue({ ...issue, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={issue.description}
          onChange={(e) => setIssue({ ...issue, description: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateIssue;

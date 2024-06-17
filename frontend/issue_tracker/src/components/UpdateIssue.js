import React, { useState } from "react";

const UpdateIssue = () => {
  const [issue, setIssue] = useState({ id: "", title: "", description: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:5000/issues/${issue.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(issue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Issue updated:", data);
      })
      .catch((error) => console.error("Error updating issue:", error));
  };

  return (
    <div>
      <h2>Update Issue</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={issue.id}
          onChange={(e) => setIssue({ ...issue, id: e.target.value })}
        />
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateIssue;

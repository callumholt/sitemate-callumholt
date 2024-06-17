import React, { useState } from "react";

const DeleteIssue = () => {
  const [id, setId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:5000/issues/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Issue deleted:", data);
      })
      .catch((error) => console.error("Error deleting issue:", error));
  };

  return (
    <div>
      <h2>Delete Issue</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteIssue;

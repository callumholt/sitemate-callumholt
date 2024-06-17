import React, { useEffect, useState } from "react";

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  const fetchIssues = () => {
    fetch("http://127.0.0.1:5000/issues")
      .then((response) => response.json())
      .then((data) => setIssues(data))
      .catch((error) => console.error("Error fetching issues:", error));
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div>
      <h2>Issues</h2>
      <button onClick={fetchIssues}>Retrieve Issues</button>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            id: {issue.id} - title: {issue.title} - description:{" "}
            {issue.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;

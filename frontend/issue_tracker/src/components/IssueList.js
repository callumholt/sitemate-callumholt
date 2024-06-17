import React, { useEffect, useState } from "react";

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/issues")
      .then((response) => response.json())
      .then((data) => setIssues(data))
      .catch((error) => console.error("Error fetching issues:", error));
  }, []);

  return (
    <div>
      <h2>Issues</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            {issue.title}: {issue.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;

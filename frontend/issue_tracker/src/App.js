import React from "react";
import IssueList from "./components/IssueList";
import CreateIssue from "./components/CreateIssue";
import UpdateIssue from "./components/UpdateIssue";
import DeleteIssue from "./components/DeleteIssue";

const App = () => {
  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <IssueList />
      <CreateIssue />
      <UpdateIssue />
      <DeleteIssue />
    </div>
  );
};

export default App;

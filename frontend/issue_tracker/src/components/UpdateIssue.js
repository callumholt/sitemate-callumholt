import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

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
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6">Update Issue</Typography>
      <TextField
        label="ID"
        value={issue.id}
        onChange={(e) => setIssue({ ...issue, id: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Title"
        value={issue.title}
        onChange={(e) => setIssue({ ...issue, title: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={issue.description}
        onChange={(e) => setIssue({ ...issue, description: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Update
      </Button>
    </Box>
  );
};

export default UpdateIssue;

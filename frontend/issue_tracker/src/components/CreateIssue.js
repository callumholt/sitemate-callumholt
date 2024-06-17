import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

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
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6">Create Issue</Typography>
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
        Create
      </Button>
    </Box>
  );
};

export default CreateIssue;

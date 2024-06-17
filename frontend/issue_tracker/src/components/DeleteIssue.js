import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

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
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6">Delete Issue</Typography>
      <TextField
        label="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Delete
      </Button>
    </Box>
  );
};

export default DeleteIssue;

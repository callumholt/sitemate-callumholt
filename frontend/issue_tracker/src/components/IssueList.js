import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

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
    <Box>
      <Typography variant="h6">Issues</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchIssues}
        sx={{ my: 2 }}
      >
        Retrieve Issues
      </Button>
      <List>
        {issues.map((issue) => (
          <ListItem
            key={issue.id}
            sx={{ mb: 2, p: 2, border: "1px solid #ccc", borderRadius: "8px" }}
          >
            <ListItemText
              primary={`ID: ${issue.id}`}
              secondary={
                <>
                  <Typography component="span" variant="body2">
                    <strong>Title:</strong> {issue.title}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2">
                    <strong>Description:</strong> {issue.description}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default IssueList;

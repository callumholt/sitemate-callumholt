import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import IssueList from "./components/IssueList";
import CreateIssue from "./components/CreateIssue";
import UpdateIssue from "./components/UpdateIssue";
import DeleteIssue from "./components/DeleteIssue";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Issue Tracker
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <IssueList />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <CreateIssue />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <UpdateIssue />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <DeleteIssue />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;

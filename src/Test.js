import { AppBar, Typography, Toolbar, Button } from "@mui/material";

const test = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>Logo</Typography>
          <Button
            variant="contained"
            color="warning"
            sx={{ marginLeft: "auto" }}
          >
            Hello
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default test;

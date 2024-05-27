import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Forma from "../form/Forma";
import TableData from "../tableData/TableData";

export default function Content() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Paper
        sx={{
          maxWidth: 1180,
          margin: "auto",
          overflow: "hidden",
          marginTop: 2,
        }}
      >
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SearchIcon color="inherit" sx={{ display: "block" }} />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  placeholder="Search..."
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: "default" },
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ mr: 1 }}
                  onClick={() => setModalVisible(true)}
                >
                  Add user
                </Button>
                <Tooltip title="Reload">
                  <IconButton>
                    <RefreshIcon color="inherit" sx={{ display: "block" }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
          <TableData />
        </Typography>
      </Paper>

      <Rodal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        height={420}
      >
        <Forma />
      </Rodal>
    </>
  );
}

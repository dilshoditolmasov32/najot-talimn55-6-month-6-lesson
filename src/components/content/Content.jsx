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
import { Form, FormGroup } from "react-bootstrap";
import "../tableData/tableData.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import card from "../../assets/images/card-2.png";
import { IoDiamondOutline } from "react-icons/io5";
import "./content.css";
export default function Content() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({});
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let id = nanoid();
    const parol = { ...inputData, id };
    data.push(parol);
    setData([...data]);
    setModalVisible(false);
    e.target.reset();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  }

  function handleClick(id) {
    const new_user = data.filter((item) => item.id !== id);
    setData(new_user);
  }

  // function handleClickSee(id) {
  //   const new_user = data.filter((item) => {
  //     if (item.id === id) {
  //     }
  //   });
  //   setData(new_user);
  // }
  return (
    <>
      <h2 className="diamond">
        Kumushlar: 756{" "}
        <span>
          <IoDiamondOutline className="kumush" />
        </span>
      </h2>
      <img src={card} alt="card" style={{ width: 300, marginLeft:20, marginTop:5}}  />
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
                  onChange={(e) => setSearch(e.target.value)}
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
          <div>
            <table id="customers">
              <thead>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone number</th>
                <th>Your email</th>
                <th>Your address</th>
                <th>Gender</th>
                <th>delete and see</th>
              </thead>

              <tbody>
                {data
                  .filter((element) =>
                    search.toLowerCase() === ""
                      ? element
                      : element.firstname.toLowerCase().includes(search)
                  )
                  ?.map((item, index) => (
                    <tr key={index}>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.number}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>{item.option}</td>
                      <button
                        className="btn btn-danger m-2"
                        onClick={() => handleClick(item.id)}
                      >
                        <RiDeleteBin6Line />
                      </button>

                      <button
                        className="btn btn-dark m-2"
                        // onClick={() => handleClickSee(item.id)}
                      >
                        <NavLink to={"/user"}>
                          <FaEye />
                        </NavLink>
                      </button>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Typography>
      </Paper>

      <Rodal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        height={420}
      >
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mt-4 ">
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Firstname"
              name="firstname"
              onChange={handleChange}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Lastname"
              name="lastname"
              onChange={handleChange}
            />
            <Form.Control
              className="mb-3"
              type="number"
              placeholder="Phone number"
              name="number"
              onChange={handleChange}
            />
            <Form.Control
              className="mb-3"
              type="email"
              placeholder="Your email"
              name="email"
              onChange={handleChange}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Your address"
              name="address"
              onChange={handleChange}
            />
            <select class="form-select" onChange={handleChange} name="option">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="femali">Femali</option>
            </select>
          </FormGroup>

          <div className="mt-3 d-flex justify-content-end gap-4  ">
            <button
              className="btn btn-success mb-3 w-25 "
              onSubmit={handleSubmit}
            >
              Save
            </button>
          </div>
        </Form>
      </Rodal>

      <ToastContainer />
    </>
  );
}

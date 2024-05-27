import { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import TableData from "../tableData/TableData";

const Forma = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    data.push(inputData);
    setData([...data]);
    e.target.reset();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  }

  return (
    <>
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
          <select class="form-select" aria-label="Default select example">
            <option onChange={handleChange} selected>
              Gender
            </option>
            <option onChange={handleChange} value="male">
              Male
            </option>
            <option onChange={handleChange} value="femali">
              Femali
            </option>
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
    </>
  );
};

export default Forma;

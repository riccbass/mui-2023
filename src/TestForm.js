import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0,
    gender: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type={"text"}
          sx={{ margin: 3 }}
          placeholder="Name"
          variant="outlined"
        />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type="email"
          sx={{ margin: 3 }}
          placeholder="Email"
          variant="standard"
        />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          type={"password"}
          sx={{ margin: 3 }}
          placeholder="Password"
          variant="filled"
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label="Subscribe"
          />
        </FormGroup>
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" onChange={handleChange}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Test;

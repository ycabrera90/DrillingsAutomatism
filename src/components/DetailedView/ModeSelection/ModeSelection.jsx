import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import classes from "./ModeSelection.module.css";

const ModeSelection = ({className}) => {
    const [value, setValue] = React.useState("auto");

  const handleChange = (event) => {
    setValue(event.target.value);
};

console.log(value);

  return (
    <FormControl className={className}>
      <FormLabel className="mode-selection__label" id="mode-selection">
        Modo
      </FormLabel>
      <RadioGroup name="mode" value={value} onChange={handleChange}>
        <FormControlLabel
          className={`mode-selection__auto ${value==="auto" ? "active" : ""}`}
          value="auto"
          control={<Radio />}
          label="Automático"
        />
        <FormControlLabel
          className={`mode-selection__remote ${value==="remote" ? "active" : ""}`}
          value="remote"
          control={<Radio />}
          label="Remoto"
        />
        <FormControlLabel
          className={`mode-selection__timer ${value==="timer" ? "active" : ""}`}
          value="timer"
          control={<Radio />}
          label="Timer"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default ModeSelection;

import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import classes from "./ModeSelection.module.css";

const ModeSelection = ({className, modes}) => {
    const [value, setValue] = React.useState("auto");

    console.log(modes);
    console.log(Object.entries(modes).find(([key, param]) => param.active)[0]);
    

  const handleChange = (event) => {
    console.log(event.target.value);
    // setValue(event.target.value);
  };


  return (
    <FormControl className={className}>
      <FormLabel className="label" id="mode-selection">
        Modo
      </FormLabel>
      <RadioGroup
        name="mode"
        value={Object.entries(modes).find(([, param]) => param.active)[0]}
        onChange={handleChange}
      >
        {Object.entries(modes).map(([key, param]) => (
          <FormControlLabel
            key={key}
            className={`mode ${param.active ? "active" : ""}`}
            value={key}
            control={<Radio />}
            label={param.title}
            style={{ color: param.color }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default ModeSelection;

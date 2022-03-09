import { useDispatch } from "react-redux/es/exports";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { dataActions } from "../../../store/datas-slice";
import classes from "./ModeSelection.module.css";

const ModeSelection = ({ className, sysId, modes }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(dataActions.setDrillMode({ sysId, mode: event.target.value }));
  };

  return (
    <FormControl className={className}>
      <FormLabel className="label" id="mode-selection">
        Modo
      </FormLabel>
      <RadioGroup
        name="mode"
        className={classes['mode-container']}
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

import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 24,
  padding: 0,
  display: "flex",

  "& .MuiSwitch-switchBase": {
    padding: 2,
    transitionDuration: "300ms",

    "&.Mui-checked": {
      transform: "translateX(18px)",
      color: "#fff",

      "& + .MuiSwitch-track": {
        backgroundColor: "#1976d2",
        opacity: 1,
        border: 0,
      },
    },
  },

  "& .MuiSwitch-thumb": {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "#fff",
  },

  "& .MuiSwitch-track": {
    borderRadius: 24,
    backgroundColor: "#c4c4c4",
    opacity: 1,
  },
}));

export default IOSSwitch;

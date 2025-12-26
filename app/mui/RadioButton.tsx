import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const commonStyle = {
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow: "inset 0 0 0 2px #0F7EF5",
  backgroundColor: "#fff",
  ".Mui-focusVisible &": {
    outline: "1px auto rgba(19,124,189,.6)",
    outlineOffset: 1,
  },
};

const BpIcon = styled("span")(({ theme }) => commonStyle);

const BpCheckedIcon = styled(BpIcon)({
  ...commonStyle,
  boxShadow: "inset 0 0 0 4.5px #0F7EF5",
});

function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function CustomizedRadios() {
  return (
    <FormControl>
      <RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <FormControlLabel
          value="female"
          control={<BpRadio />}
          label="variant1"
        />
        <FormControlLabel value="male" control={<BpRadio />} label="variant2" />
      </RadioGroup>
    </FormControl>
  );
}

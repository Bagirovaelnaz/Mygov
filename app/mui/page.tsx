"use client";
import {
  Alert,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import RadioButton from "./RadioButton";

const ThemePage = () => {
  return (
    <div className="container mx-auto">
      <section>
        <h1>Buttons</h1>
        <div className="flex gap-2.5 mt-5">
          <Button variant="contained" color="primary">
            Test
          </Button>
          <Button variant="contained" color="error">
            Test
          </Button>
          <Button variant="contained" color="success">
            Test
          </Button>
          <Button variant="outlined">Test</Button>
          <Button variant="text">Test</Button>
        </div>
      </section>

      <section className="mt-7">
        <h1 className="mb-4">Inputs</h1>
        <TextField variant="outlined" placeholder="text" />
        <TextField disabled placeholder="text2" />
      </section>

      <section className="mt-7">
        <h1 className="mb-4">Badges</h1>
        <Chip label="Applied" variant="filled" color="primary" />
        <Chip label="Pending" variant="filled" color="warning" />
        <Chip label="Completed" variant="filled" color="success" />
        <Chip label="Canceled" variant="filled" color="secondary" />
        <Chip label="Rejected" variant="filled" color="error" />
      </section>
      <section className="mt-7">
        <h1 className="mb-4">Infobox</h1>
        <Alert severity="info" color="info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          exercitationem ea ducimus illo sapiente autem! Praesentium et
          explicabo ab magni consectetur quae repellat tenetur unde natus error
          laudantium, quo distinctio.
        </Alert>
        <Alert severity="info" color="error">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          exercitationem ea ducimus illo sapiente autem! Praesentium et
          explicabo ab magni consectetur quae repellat tenetur unde natus error
          laudantium, quo distinctio.
        </Alert>
        <Alert severity="info" color="warning">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          exercitationem ea ducimus illo sapiente autem! Praesentium et
          explicabo ab magni consectetur quae repellat tenetur unde natus error
          laudantium, quo distinctio.
        </Alert>
      </section>
      <section className="mt-7">
        <h1 className="mb-4">Controllers</h1>
        <h4>Radiobutton</h4>
        <RadioButton /> <br />
        <FormControlLabel control={<Checkbox />} label="check" />
      </section>
    </div>
  );
};

export default ThemePage;

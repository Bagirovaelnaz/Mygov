import { Badge, Button, Chip, Input, TextField } from "@mui/material";

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
        <h1>Inputs</h1> <br />
        <TextField variant="outlined" placeholder="text" />
        <TextField disabled placeholder="text2" />
      </section>

      <section className="mt-7">
        <h1>Badges</h1>
        <Chip label="Chip Filled" variant="filled"/>
      </section>
    </div>
  );
};

export default ThemePage;

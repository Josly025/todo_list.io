import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
      margin: `${theme.spacing(1)}px auto`,
    },
  },
}));

const Input = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Tasks" variant="outlined" />
            <Button variant="contained" color="secondary">
              Add Task
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Input;

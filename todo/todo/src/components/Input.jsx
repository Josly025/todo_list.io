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

const Input = ({ setInputText, inputText, setTasks, tasks }) => {
  const classes = useStyles();

  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    //set State back to 0
    setInputText("");
  };

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
            <TextField
              id="outlined-basic"
              label="Tasks"
              variant="outlined"
              value={inputText}
              onChange={inputTextHandler}
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={submitTodoHandler}
            >
              Add Task
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Input;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import TaskList from "./TaskList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1350,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(5, 0, 2),
  },
}));

const TodoList = ({ setTasks, tasks }) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h6" align="center" className={classes.title}>
            To Complete :
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {tasks.map((task) => (
                <TaskList
                  setTasks={setTasks}
                  tasks={tasks}
                  task={task}
                  key={task.id}
                  text={task.text}
                  id={task.id}
                />
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoList;

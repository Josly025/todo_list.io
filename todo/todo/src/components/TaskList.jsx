import React from "react";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./TaskList.css";
const TaskList = ({ text, task, tasks, setTasks }) => {
  const [secondary, setSecondary] = React.useState(false);

  //events
  const deleteHandler = (e) => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };

  const completeHandler = (e) => {
    setTasks(
      tasks.map((listItem) => {
        if (listItem.id === task.id) {
          return {
            ...listItem,
            completed: !listItem.completed,
          };
        }
        return listItem;
      })
    );
  };

  return (
    <ListItem>
      <ListItemText
        style={{ marginRight: 40 }}
        primary={text}
        secondary={secondary ? "Secondary text" : null}
        className={`task-item ${task.completed ? "completed" : ""}`}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          color="primary"
          aria-label="delete"
          onClick={completeHandler}
        >
          <CheckCircleIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="secondary"
          aria-label="delete"
          onClick={deleteHandler}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskList;

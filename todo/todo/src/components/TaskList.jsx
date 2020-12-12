import React from "react";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const TaskList = () => {
  const [secondary, setSecondary] = React.useState(false);

  return (
    <ListItem>
      <ListItemText
        style={{ marginRight: 40 }}
        primary="This is a task"
        secondary={secondary ? "Secondary text" : null}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" color="primary" aria-label="delete">
          <CheckCircleIcon />
        </IconButton>
        <IconButton edge="end" color="secondary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskList;

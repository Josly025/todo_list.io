import React from "react";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

const TaskList = () => {
  const [secondary, setSecondary] = React.useState(false);

  return (
    <ListItem>
      <ListItemText
        primary="Single-line item"
        secondary={secondary ? "Secondary text" : null}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskList;

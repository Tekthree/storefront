import React from "react";
import "./catergories.scss";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import { Typography } from "@material-ui/core";

export default function Catergories() {
  return (
    <div>
      <Typography className="block" variant="h6">Shop By Category</Typography>
      <List component="nav" className="list" aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="cats" />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="dogs" />
        </ListItem>
      </List>
    </div>
  );
}

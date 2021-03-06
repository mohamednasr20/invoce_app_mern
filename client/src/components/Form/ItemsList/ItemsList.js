import React from 'react';
import Item from './Item/Item';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

const ItemsList = ({ items, handleChangeItem, deleteItem }) => {
  const classes = useStyles();

  const showItems =
    items.length > 0
      ? items.map((item) => (
          <Item
            key={item._id ? item._id : item.id}
            item={item}
            handleChangeItem={handleChangeItem}
            deleteItem={deleteItem}
          />
        ))
      : '';

  return (
    <div className={classes.root}>
      <Typography variant="h5" color="primary">
        Item List
      </Typography>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={4}>
          <Typography>Item Name</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Qty.</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Price</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Total</Typography>
        </Grid>
      </Grid>
      {showItems}
    </div>
  );
};

export default ItemsList;

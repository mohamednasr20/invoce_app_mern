import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { getInvoice } from '../../../actions/invoices';
import { Link } from 'react-router-dom';

const Invoice = ({ invoice }) => {
  const classes = useStyles({ invoice });
  const dispatch = useDispatch();

  const invoiceId = invoice._id.slice(18);

  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={10} sm={2} className={classes.boldFont}>
          {`#${invoiceId}`}
        </Grid>
        <Grid item xs={6} sm={3} className={classes.lightFont}>
          {`Due ${invoice.paymentDue}`}
        </Grid>
        <Grid item xs={6} sm={2} className={classes.lightFont}>
          {invoice.clientName}
        </Grid>
        <Grid item xs={6} sm={2} className={classes.boldFont}>
          {`$${invoice.total}`}
        </Grid>
        <Grid item xs={4} sm={2}>
          <div className={classes.status}>{invoice.status}</div>
        </Grid>
        <Grid item xs={2} sm={1} className={classes.icon}>
          <Link to={`/invoices/${invoice._id}`}>
            <ArrowForwardIosIcon
              fontSize="small"
              color="primary"
              onClick={() => dispatch(getInvoice(invoice._id))}
            />
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Invoice;

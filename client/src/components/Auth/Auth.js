import React, { useState } from 'react';
import Input from './Input/Input';
import { signIn, signUp } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ValidatorForm } from 'react-material-ui-form-validator';
import {
  Container,
  Typography,
  Paper,
  Avatar,
  Grid,
  Button,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';

const initalState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector((state) => state.authReducer.error);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initalState);

  const handleSignUp = () => setIsSignUp(!isSignUp);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" className={classes.header}>
          {isSignUp ? 'Sign up' : 'Sign in'}
        </Typography>
        <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  type="text"
                  label="First Name"
                  half
                  handleChange={handleChange}
                />
                <Input
                  name="lastName"
                  value={formData.lastName}
                  type="text"
                  label="Last Name"
                  half
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              value={formData.email}
              type="email"
              label="Email"
              handleChange={handleChange}
              error={
                (error?.email && !isSignUp && true) ||
                (error?.userExist && isSignUp && true)
              }
              helperText={
                (error?.email && !isSignUp && error.email) ||
                (error?.userExist && isSignUp && error.userExist)
              }
              validators={['required', 'isEmail']}
              errorMessages={["can't be empty", 'must be vaild email']}
            />

            <Input
              name="password"
              value={formData.password}
              type="password"
              label="Password"
              handleChange={handleChange}
              error={error?.password && !isSignUp && true}
              helperText={error?.password && error.password}
            />

            {isSignUp && (
              <Input
                name="confirmPassword"
                value={formData.confirmPassword}
                type="password"
                label="Confirm Password"
                handleChange={handleChange}
                error={error?.matchPassword && true}
                helperText={error?.matchPassword && error.matchPassword}
              />
            )}
          </Grid>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </ValidatorForm>
        <Button className={classes.signState} fullWidth onClick={handleSignUp}>
          {isSignUp
            ? 'Have an acount ? sign in'
            : "Don't have an acount ? sign up"}
        </Button>
      </Paper>
    </Container>
  );
};

export default Auth;

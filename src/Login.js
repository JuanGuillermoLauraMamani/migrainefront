import React, { Component } from 'react';
import swal from 'sweetalert';
import {CircularProgress, Button, TextField, Link, Grid } from '@material-ui/core';
import { makeStyles, withStyles, lighten } from '@material-ui/styles';

import './Login.css';
import Carga from './componentes/Carga';

const axios = require('axios');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      username: '',
      password: '',
      loading:false
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  
  login = async () => {

    //const pwd = bcrypt.hashSync(this.state.password, salt);

    this.setState({ loading: true })
    await axios.post('https://apimigraine.herokuapp.com/api/auth/signin', {
      email:this.state.email,
      username: this.state.username,
      password: this.state.password,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      console.log('token', res.data.token)
      localStorage.setItem('user_id', res.data.id);
      console.log('user_id', res.data.id)
      
     
      this.setState({ loading:false })
      this.props.history.push('/dashboard/home')
      

    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error"
        });
      }
    })
  
    
  }

  render() {
    console.log(this.state.email)
    console.log(this.state.password)
    const classes = makeStyles({
      root: {
        position: 'relative',
      },
      top: {
        color: '#eef3fd',
      },
      bottom: {
        color: '#6798e5',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
      },
    });
  
    return (
   

     
      <div className='login'
          style={{ marginTop: '200px' }}>
        <div>
          <h2>Login</h2>
        </div>

        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            placeholder="email"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br /><br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username ==='' && this.state.password === ''}
            onClick={this.login}
          >
            Login
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
          <Link href="/api/auth/signup">
            Register
          </Link>
          <br /><br />
          {this.state.loading ? <><div>Espere...</div><br /><br />  <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.bottom}
        size={24}
        thickness={4}
      
      /> </>:  null}
        </div>
      </div>
  
    );
  }
}

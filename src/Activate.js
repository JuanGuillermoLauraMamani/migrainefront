import React, { Component } from 'react';
//import authSvg from '../assests/welcome.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
//import { authenticate, isAuth } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import "./activate.css"

class Activate extends React.Component {

  /*
  const [formData, setFormData] = useState({
    name: '',
    token: '',
    show: true
  });

  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);

    if (token) {
      setFormData({ ...formData, name, token });
    }

    console.log(token, name);
  }, [match.params]);
*/
  constructor() {
    super();
    this.state = {
      nombre:"",
      token:"",
      show:true
    };
  }

  componentDidMount=()=>{
   
    const {match,location}=this.props;
    console.log(match.params);
    let token=match.params.token;
    let { username } = jwt.decode(token);
    if (token) {
     
      this.setState({nombre:username})
      this.setState({token:token})
      console.log(this.state.token);
      console.log( this.state.nombre);
   
    }
   
  }

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(`http://localhost:4000/api/auth/activation`, {
        token:this.state.token
      })
      .then(res => {
        
        this.setState({show:false   })

        toast.success(res.data.message);
      })
      .catch(err => {
        
        toast.error(err.response.data.errors);
      });
  };
  render(){
  return (
    
      
      <div className='activate'>
      {//isAuth() ? <Redirect to='/' /> : null
      }
      <ToastContainer />
      <div className='activateapp' >
       
         
            <h1 >
              Welcome {this.state.nombre}
            </h1>

            <form 
                  className='activateform'
                   onSubmit={this.handleSubmit}
            >
              <div className='activate-item-form' >
                <button
                  type='submit'
                  
                >
                  <i/>
                  <span >Activate your Account</span>
                </button>
              </div>
              <div >
                <div >
                  Or sign up again
                </div>
                <div>
                <a
                  
                  href='api/api/register'
                  target='_self'
                >
                  <i />
                  <span >Sign Up</span>
                </a>
              </div>
              </div>
             
            </form>
          
       
        
      </div>
      </div>
    
  )}
};

export default Activate;

import React, { Component, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, NavLink, Redirect } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  LinearProgress,
  DialogTitle,
  DialogContent,
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Card,
} from "@material-ui/core";

import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  Dropdown,
  Container,
} from "react-bootstrap";
import { yellow } from "@material-ui/core/colors";

class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar:false,
      iduser: "",
      nombre: "",
      email: "",
      expanded: false,
      showdropdown:true
    };
  }

  componentDidMount = () => {
   
    this.setState({ iduser: localStorage.getItem("user_id") });
    this.setState({ nombre: localStorage.getItem("nombre") });
    this.setState({ email: localStorage.getItem("email") });

    
    
  };

  showSidebar = () => this.setState({ sidebar: !this.state.sidebar });

  showdropdown = () => this.setState({ showdropdown: !this.state.showdropdown }); 
  logOut = () => {
    localStorage.setItem("token", null);
    localStorage.setItem("user_id", null);
    localStorage.setItem("nombre", null);
    localStorage.setItem("email", null);
    localStorage.setItem("diagnostico", null);
    localStorage.setItem("sintomas", null);
    localStorage.setItem("rol", null);
    this.props.props.history.push("/api/auth/signin");
    
  };

  setToggle = () => {
    console.log("toggle");
    this.setState({ expanded: true });
    console.log(this.state.expanded);
  };

  

  cuenta = () => {
    console.log("cuenta");
    this.props.props.history.push("/dashboard/home");
  };

  render() {
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
          
      
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={this.showSidebar} />
            </Link>
      

    
            <Link to="#" className="menu-bars">
              <FaIcons.FaUserAlt  onClick={this.showdropdown} />
            </Link>
        

            
          </div>

          <nav className={this.state.sidebar?"nav-menu active":"nav-menu"}>
            <ul className="nav-menu-items" onClick={this.showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>

              <div className="nav-item-user">
                <div>
                  <h6>Bienvenido</h6>
                  <span>{this.state.nombre}</span>
                </div>
              </div>

              {SidebarData.map((item, index) => {
                console.log(this.props.swadmin)
                if(this.props.swadmin==='62ba6877fd1b0b43c84d9514'){
                  if(item.permiso.includes('62ba6877fd1b0b43c84d9514') ){
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                }
                
                }
              
                if(this.props.swadmin==='62ba6877fd1b0b43c84d9512'){
                  if(item.permiso.includes('62ba6877fd1b0b43c84d9512') ){
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  }
                }

                if(this.props.swadmin==='62ba6877fd1b0b43c84d9513'){
                  if(item.permiso.includes('62ba6877fd1b0b43c84d9513') ){
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  }
                }
              }
              )}
            </ul>
          </nav>
          <nav className={this.state.showdropdown ? "nav-dropdown active" : "nav-dropdown"}>
            <div className="nav-menu-items" onClick={this.showdropdown}>
              <li className="nav-text">
              <Link onClick={this.cuenta} to="/dashboard/home">
                  <FaIcons.FaUserAlt />
                  <span>CUENTA</span>
              </Link>
              </li>

              <li className="nav-text">
              <Link onClick={this.logOut} to="/api/auth/signin"> 
                  <FaIcons.FaSignOutAlt />
                  <span>SALIR</span>
              </Link>
              </li>

              
            </div>
          </nav>

        
        </IconContext.Provider>
      </>
    );
  }
}

export default Navegacion;

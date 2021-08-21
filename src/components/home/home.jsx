import React, { Component } from "react";
//import { Card } from "react-bootstrap";
//import visitImage from "../../images/Railway4.jpg";
import { Link } from "react-router-dom";
import  Note from "../Note/Note"
import Footer from "../Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          
          <div className="collapse  navbar-collapse ">
            <ul className="navbar-nav  ml-auto">
              <li className="navbar-item">
                <Link className="navbar-brand" to="/signIn">
                  Sign-in
                </Link>
                <Link className="navbar-brand" to="/signUp">
                  Sign-up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
       {/* <Card.Img src={visitImage} alt="Card image" > 

        </Card.Img> */}
        <Note />
        <Footer />
      </div>
    );
  }
}

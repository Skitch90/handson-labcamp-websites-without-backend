import React, { Component } from "react";
import "bootstrap";

import "./index.css";

// step 1: Import components
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import NewProduct from "./components/NewProduct";
import * as firebase from "firebase";


// step 4: Import Firebase and initialize it
const config = {
    apiKey: "AIzaSyD-9xGzU36RhkNmg6B_NW0hMWS3egw_T3o",
    authDomain: "labcamp-sites-without-backend.firebaseapp.com",
    databaseURL: "https://labcamp-sites-without-backend.firebaseio.com",
    projectId: "labcamp-sites-without-backend",
    storageBucket: "labcamp-sites-without-backend.appspot.com",
    messagingSenderId: "985712486505"
};
firebase.initializeApp(config);

class App extends Component {
  render = () => {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-5">
              Building simple Websites without backend
            </h1>
            <p className="lead">
              This will be your playground for the hands on part of this labcamp.
            </p>
          </div>
        </div>
        {/* TODO - step 2: render ProductsList component */}
        <div>
            <ProductsList />
        </div>

        {/* TODO - step 6: render NewProduct component */}
        <div>
            <NewProduct/>
        </div>

        {/* TODO - step 10: render AddProduct component */}
      </div>
    );
  };
}

export default App;

import React, { Component } from "react";
import * as firebase from "firebase";

class ProductsList extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount = () => {
    // step 5 - fetch data from Firebase
    const group6Ref = firebase.database().ref('/group-6');
    group6Ref.on("value", snapshot => {
      console.log(snapshot.val())
      const products = []
      for (let key in snapshot.val()) {products.push(snapshot.val()[key])}
      this.setState({products})
    })
  };

  render = () => {
    return (
      <div className="card">
        <div className="card-header">Product List</div>
        <div className="card-body">
          <ul className="list-group">
            {/* TODO step 3 - bring to life this list dynamic (using state) */
            this.state.products.map((product, index) => {
              return (
                <li className="list-group-item" key={index}>
                  {product.name}
                  <span className="badge badge-pill badge-success">
                    {product.count}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
}

export default ProductsList;

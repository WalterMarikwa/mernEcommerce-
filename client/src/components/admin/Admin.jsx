import React from "react";
import axios from 'axios';

export default class Admin extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="card">
          <div className="row">
            <div className="cards" className="col-sm-12">
              <div className="row">
                {this.state.products.map((product, index) => {
                  return (
                    <div className="col-sm-4 col-sm-4" 
                       key={`product-card-${product.product_id}`}>
                      <div className=" card aSeries">
                        <div className="name">{product.product_type}</div>
                        <div className="photoBg" style={{ backgroundImage: `url(${product.image})` }}></div>
                        <div className="description">{product.description_type}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    )
  }
}
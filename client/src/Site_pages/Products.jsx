import React from "react";
import axios from 'axios';
import "../page_styles/Products.css";
import DropMenu from "../components/products/FilterProducts";
import Hero from "../components/products/Hero";
import DropMenuprice from "../components/products/FilterProductsByPrice"


class Products extends React.Component {
  state = {
    Products: [],
    nameFilter: '',
    priceFilter: ''
  };
  componentDidMount() {
    axios
    .get("/api/products")
    .then((response) => {
      console.log(response)
        this.setState({
          Products: response.data
        })
        console.log(this.state.Products);
    })
    .catch(err => {
      console.log(err);
    });
  }
  

  render() {
    let productsToList = [...this.state.Products]
    // filtering on productsToList
    let nameFilter = this.state.nameFilter;
    const priceFilter = this.state.priceFilter;

    if (nameFilter && nameFilter.toLowerCase() !== 'all') {
      console.log('Filter is on!')
      nameFilter = nameFilter.toLowerCase()
      productsToList = productsToList.filter(
        Products => {
          const type = Products.product_type.toLowerCase()
          return type.indexOf(nameFilter) !== -1
        }
      );
    }

    if (priceFilter && priceFilter.toLowerCase() !== 'all') {
      productsToList = productsToList.filter((product) => {
        const priceFilterArr = priceFilter.split(',');
        const priceMin = parseInt(priceFilterArr[0]);
        const priceMax = parseInt(priceFilterArr[1]);
        return product.item_price >= priceMin && product.item_price <= priceMax;
      }) 
    }

    console.log("test", priceFilter);

    return (
      <div>
        <Hero />
        <DropMenu onNameChange={this.updateNameFilter} />
        <DropMenuprice onPriceChange={this.updatePriceFilter} />
        

        <div className="card">
          <div className="row">
            <div className="cards" className="col-sm-12">
              <div className="row">
                {productsToList.map((product, index) => {
                  return (
                    <div className="col-sm-4 col-sm-4" 
                       key={`product-card-${product.product_id}`}>
                      <div className=" card aSeries">
                        <div className="name">{product.product_type}</div>
                        <div className="photoBg" style={{ backgroundImage: `url(${product.image})` }}></div>
                        <div className="description">{product.description_type}</div>
                        <div className="price">${product.item_price}</div>
                        <div className="btn-group">
                          <input
                            className="btn btn-primary"
                            type="submit"
                            value="Buy"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;

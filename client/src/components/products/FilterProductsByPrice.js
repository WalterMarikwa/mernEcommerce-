import React from "react";

const DropMenuPrice = props => {
  const onPriceChange = props.onPriceChange || (() => {});
  return (
    <div className="filterProd">
        <h4>SELECT BY PRICE!</h4>
      <div className="prodSelect">
        <select onChange={e => onPriceChange(e.target.value)}>
          <option value="all">All</option>
          <option value="0,100">$0 - $100</option>
          <option value="100,500">$100 - $500</option>
          <option value="500,1500">$500 - $1500</option>
          <option value="1500,5000">$1500 +</option>
        </select>
      </div>
    </div>
  );
};

export default DropMenuPrice;

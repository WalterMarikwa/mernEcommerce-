import React from "react";

const DropMenu = props => {
  const onNameChange = props.onNameChange || (() => {});
  return (
    <div className="filterProd">
      <h4>SELECT BY NAME!</h4>
      <div className="prodSelect">
        <select onChange={e => onNameChange(e.target.value)}>
          <option value="all">All</option>
          <option value="guitar">Guitars</option>
          <option value="beats">Beats</option>
          <option value="dj">Dj Set</option>
          <option value="other">Others</option>
        </select>
      </div>
    </div>
  );
};

export default DropMenu;

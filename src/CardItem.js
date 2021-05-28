import React from "react";

const CardItem = ({ item, renderTitle, renderDescription, renderButton }) => {
  if (item) {
    return (
      <div className="card">
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {renderTitle(item)} </h5>
          <p className="card-text"> {renderDescription(item)} </p>
          {renderButton && renderButton(item)}
        </div>
      </div>
    );
  }

  return null;
};

export default CardItem;

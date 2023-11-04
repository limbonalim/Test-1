import React from 'react';
import './Item.css'

interface Props {
  name: string;
  image: string;
  price: number;
  addItem: React.MouseEventHandler
}

const Item: React.FC<Props> = ({name, image, price, addItem}) => {

  return (
    <div onClick={addItem} className="Item">
      <img src={image} alt={name}/>
      <div>
        <span>{name}</span>
        <div>Price: {price}</div>
      </div>
    </div>
  );
};

export default Item;
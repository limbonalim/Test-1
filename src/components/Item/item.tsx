import React from 'react';

interface Props {
  name: string;
  image: string;
  price: number;
  addItem: React.MouseEventHandler
}

const Item: React.FC<Props> = ({name, image, price, addItem}) => {

  return (
    <div onClick={addItem}>
      <img src={image} alt={name}/>
      <div>
        <span>{name}</span>
        <div>Price: {price}</div>
      </div>
    </div>
  );
};

export default Item;
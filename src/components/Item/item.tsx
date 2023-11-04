import React from 'react';

interface Props {
  name: string;
  image: string;
  price: number;
}

const Item: React.FC<Props> = ({name, image, price}) => {

  return (
    <div>
      <img src={image} alt={name}/>
      <div>
        <span>{name}</span>
        <div>Price: {price}</div>
      </div>
    </div>
  );
};

export default Item;
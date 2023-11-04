import React from 'react';
import './OrderItem.css'

interface Props {
  name: string;
  quantity: number;
  cost: number;
  deleteItem: React.MouseEventHandler;
}

const OrderItem: React.FC<Props> = ({name, quantity, cost, deleteItem}) => {
  return (
    <div className="OrderItem">
      <span className="name">{name}</span>
        <span>x {quantity}</span>
        <span>{cost} KGS</span>
        <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default OrderItem;
import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import './Order.css'
import {Orders} from '../../types';

interface Props {
  totalCost: number;
  order: Orders[];
}

const Order:React.FC <Props> = ({totalCost, order, deleteItem}) => {

  return (
    <div className="Order">
      <div>
        Total: {totalCost}
      </div>
      <div className="Order-Container">
        {order.map((item) => <OrderItem name={item.name} quantity={item.quantity} cost={item.price} deleteItem={() => deleteItem(item.name)}/>)}

      </div>
    </div>
  );
};

export default Order;
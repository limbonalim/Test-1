import React from 'react';
import Item from '../Item/item';
import {MenuItems} from '../../types';
import './Menu.css';

interface Props {
  menu: MenuItems[];
  addItem: (name: string, price: number) => void;
}

const Menu: React.FC<Props> = ({menu, addItem}) => {
  return (
    <div className="Menu">
      {menu.map((item, index) =>
        <Item
          key={index}
          name={item.name}
          image={item.image}
          price={item.price}
          addItem={() => addItem(item.name, item.price)}
        />)}
    </div>
  );
};

export default Menu;
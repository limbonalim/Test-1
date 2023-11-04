import React from 'react';
import Item from '../Item/item';
import {MenuItems} from '../../types';

interface Props {
  menu: MenuItems[];
}

const Menu:React.FC<Props> = ({menu}) => {
  return (
    <div>
      {menu.map((item, index) => <Item key={index} name={item.name} image={item.image} price={item.price}/>)}

    </div>
  );
};

export default Menu;
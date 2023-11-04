import {useState} from 'react';
import hamburgerImage from '../../assets/hamburger.jpeg';
import {MenuItems, Orders} from '../../types';
import './App.css';
import Menu from '../../components/Menu/Menu';
import Order from '../../components/Order/Order';
import item from '../../components/Item/item';


const MenuItems: MenuItems[] = [
  {name: 'Hamburger', price: 90, image: hamburgerImage}
];

const App = () => {

  const [order, setOrder] = useState<Orders[]>([
    {name: 'Hello', price: 1, quantity: 1}
  ]);

  const addItem = (name, price) => {
    setOrder(prevState => {
      let isHave = false;
      prevState.forEach((item) => {
        if (name === item.name) {
          isHave = true;
        }
      });
      if (isHave) {
        return prevState.map(item => {
          if (name === item.name) {
            return {...item, quantity: item.quantity + 1}
          }
          return {...item};
        })
      }
      return [...prevState, {name: name, price: price, quantity: 1}]
    });
  };

  const deleteItem = (name) => {
    setOrder(prevState => {
      let isMoreThenOne = false;
      prevState.forEach((item) => {
        if (name === item.name && item.quantity > 1) {
          isMoreThenOne = true;
        }
      });
      if (isMoreThenOne) {
        return prevState.map((item) => {
          if (name === item.name) {
            return {...item, quantity: item.quantity - 1}
          }
          return {...item};
        })
      }
      return prevState.filter((item) => {
        if (name !== item.name) {
          return true;
        }
      })
    })
  };

  return (<div>
      <Menu menu={MenuItems} addItem={addItem}/>
      <Order totalCost={1} order={order} deleteItem={deleteItem}/>
    </div>
  );
};

export default App;

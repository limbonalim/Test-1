import {useState} from 'react';
import Menu from '../../components/Menu/Menu';
import Order from '../../components/Order/Order';
import {MenuItems, Orders} from '../../types';
import hamburgerImage from '../../assets/hamburger.jpeg';
import cheeseburgerImage from '../../assets/cheesburger.jpg';
import chickenWingImage from '../../assets/chickenWing.jpeg';
import franceFriedImage from '../../assets/franceFried.jpeg';
import teaImage from '../../assets/tea.jpeg';
import coffeeImage from '../../assets/coffee.jpg';
import './App.css';

const MenuItems: MenuItems[] = [
  {name: 'Hamburger', price: 90, image: hamburgerImage},
  {name: 'Cheeseburger', price: 100, image: cheeseburgerImage},
  {name: 'Chicken Wings', price: 120, image: chickenWingImage},
  {name: 'France Fried', price: 50, image: franceFriedImage},
  {name: 'Tea', price: 20, image: teaImage},
  {name: 'Coffee', price: 30, image: coffeeImage},
];

const App = () => {
  const [order, setOrder] = useState<Orders[]>([]);
  const [total, setTotal] = useState(0);

  const addItem = (name: string, price: number) => {
    setTotal(prevState => prevState + price);
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
            return {...item, quantity: item.quantity + 1};
          }
          return {...item};
        });
      }
      return [...prevState, {name: name, price: price, quantity: 1}];
    });
  };

  const deleteItem = (name: string, price: number) => {
    setTotal(prevState => prevState - price);
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
            return {...item, quantity: item.quantity - 1};
          }
          return {...item};
        });
      }
      return prevState.filter((item) => {
        if (name !== item.name) {
          return true;
        }
      });
    });
  };

  return (
    <div className="container">
      <Menu menu={MenuItems} addItem={addItem}/>
      <Order totalCost={total} order={order} deleteItem={deleteItem}/>
    </div>
  );
};

export default App;

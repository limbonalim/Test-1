import hamburgerImage from '../../assets/humburger.jpeg'
import {MenuItems} from '../../types';
import './App.css'
import Menu from '../../components/Menu/Menu';


const MenuItems:MenuItems[] = [
  {name : 'Hamburger', price: 90, image: hamburgerImage}
]

const App = () => (
  <>
    <Menu menu={MenuItems}/>
  </>
);

export default App

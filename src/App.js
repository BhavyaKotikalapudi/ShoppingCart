import './App.css';
import Header from './components/Header';
import Items from './components/Items';
import CartContextProvider from './Store/CartContext';
import { UserProgressContextProvider } from './Store/UserProgressContext';
import Cart from './components/Cart';

function App() {
  return (
    <UserProgressContextProvider>
     <CartContextProvider>
     <Header/> 
     <Items/>
     <Cart/>
     </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavBar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Shop from './Pages/Shop'
import ProductDetail from './Components/ProductData/ProductDetail';
import { DataProvider } from './Components/ProductData/DataProvider';
import RenderedCategoryList from './Components/ProductCategories/RenderedCategoryList';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ShoppingCart from './Pages/ShoppingCart';
function App() {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <DataProvider>
    <BrowserRouter>
     <div className="App">
       <NavBar/>
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/category/:category' exact component={RenderedCategoryList}/>
         <Route path='/shop' exact component={Shop}/>
         <Route path='/shop/:id'  component={ProductDetail}/>
         <Route path='/about' exact component={About}/>
         <Route path='/contact' exact component={Contact}/>
         <Route path='/cart' exact component={ShoppingCart}/>
       
       </Switch>
     </div>
    </BrowserRouter>
    </DataProvider>
   
  );
}
/* */
export default App;

import React from 'react';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Manage from './Components/Manage/Manage';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
     
      <Router>
      <Header></Header>
      <switch>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/shop">
           <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/manage">
          <Manage></Manage>
        </Route>
        <Route path="/product/:productKey" >
           <ProductDetails></ProductDetails>
        </Route>
      </switch>
      </Router>
    </div>
  );
}

export default App;

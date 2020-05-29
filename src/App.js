import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([/*add product here from addItem func. */]);

	const addItem = item => {
		// add the given item to the cart
		return (
			cart.splice(1, 0, item)
		)
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart}}>
					<Navigation  />

					{/* Routes */}
					<Route exact path="/">
						<Products  />
					</Route>

					<Route path="/cart">
						<ShoppingCart  />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;

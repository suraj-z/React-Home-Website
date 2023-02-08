import './App.css';
import Headers from './components/headers';
import Pizza from './components/pages/pizza';
import Burger from './components/pages/burger';
import Sandwich from './components/pages/sandwich';
import HomePage from './components/pages/Home';
import SideMenu from './components/pages/sideMenu';

import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Headers />
			<SideMenu/>
		{/* <Routes>
			<Route path="/" element={<HomePage />}></Route> 
				<Route path="pizza" element={<Pizza />}></Route> 
				<Route path="burger" element={<Burger />}></Route> 
				<Route path="sandwitch" element={<Sandwich />}></Route> 
			</Routes> */}
		</div>
  	);
}

export default App;

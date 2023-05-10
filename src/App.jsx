import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Catalog from './pages/Catalog';
import Top from './pages/Top';
import Layout from './components/reuse/Layout';

import './App.scss';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path='catalog' element={<Catalog />}/>
				<Route path='top' element={<Top />}/>
			</Route>
		</Routes>
	);
}

export default App;

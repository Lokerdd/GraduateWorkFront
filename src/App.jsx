import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Layout from './components/reuse/Layout';

import './App.scss';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path='catalog' element={<MainPage />}/>
				<Route path='top' element={<MainPage />}/>
			</Route>
		</Routes>
	);
}

export default App;

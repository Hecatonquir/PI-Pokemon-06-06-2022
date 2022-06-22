import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPokemonsByName } from '../redux/actions';

export default function SearchBar() {
	const dispatch = useDispatch();
	let [searchInput, setsearchInput] = useState('');

	const handleChange = (e) => {
		setsearchInput(e.target.value);
	};

	const handleSearch = (e) => {
		dispatch(getPokemonsByName(searchInput));
		setsearchInput('');
	};

	return (
		<>
			<br />
			<input
				type='text'
				onChange={(e) => handleChange(e)}
				placeholder='Buscar Pokemon...'
				value={searchInput}
			/>
			<br />
			<button type='submit' onClick={(e) => handleSearch(e)}>
				Buscar
			</button>
			<br />
		</>
	);
}

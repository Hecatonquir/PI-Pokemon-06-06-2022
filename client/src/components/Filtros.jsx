import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	filterByTypes,
	filteredByAlphabet,
	filterCreatedPokemons,
	filteredByStrength,
} from '../redux/actions';

export function ByTypes() {
	const dispatch = useDispatch();
	const Types = useSelector((state) => state.types);

	function handleFilterTypes(e) {
		dispatch(filterByTypes(e.target.value));
	}

	return (
		<select onChange={(e) => handleFilterTypes(e)}>
			<option value='All'> Tipos </option>
			{typeof Types != 'string'
				? Types.map((e) => {
						return (
							<option key={e.type} value={e.type}>
								{e.type}
							</option>
						);
				  })
				: Types}
		</select>
	);
}

export function Created() {
	const dispatch = useDispatch();

	function handleFilterCreated(e) {
		dispatch(filterCreatedPokemons(e.target.value));
	}

	return (
		<select onChange={(e) => handleFilterCreated(e)}>
			<option value='All'> Origen </option>
			<option value='orig'> Originales </option>
			<option value='created'> Creados </option>
		</select>
	);
}

export function ByAlphabet(todo) {
	const dispatch = useDispatch();
	let { setCurrentPage, setOrden } = todo;

	function handleFilterByAlphabet(e) {
		e.preventDefault();
		dispatch(filteredByAlphabet(e.target.value));
		setCurrentPage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	return (
		<select onChange={(e) => handleFilterByAlphabet(e)}>
			<option value='All'>Ordenar Alfabeticamente</option>
			<option value='asc'>Ascendente</option>
			<option value='desc'>Descendente</option>
		</select>
	);
}

export function ByStrength(todo) {
	const dispatch = useDispatch();
	let { setCurrentPage, setOrden } = todo;

	function handleFilterByStrength(e) {
		e.preventDefault();
		dispatch(filteredByStrength(e.target.value));
		setCurrentPage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	return (
		<select onChange={(e) => handleFilterByStrength(e)}>
			<option value='All'>Ordenar por Fuerza</option>
			<option value='asc'> Ascendente</option>
			<option value='desc'> Descendente</option>
		</select>
	);
}

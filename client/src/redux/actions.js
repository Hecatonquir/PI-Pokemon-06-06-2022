import axios from 'axios';
import * as R from './reducer';

export function getPokemons() {
	return async (dispatch) => {
		return await axios
			.get('http://localhost:3001/pokemons')
			.then((res) => dispatch({ type: R.GET_POKEMONS, payload: res.data }))
			.catch('HUBO UN ERROR EN A.getPokemons');
	};
}
export function getTypes() {
	return async (dispatch) => {
		return await axios
			.get('http://localhost:3001/types')
			.then((res) => dispatch({ type: R.GET_TYPES, payload: res.data }))
			.catch('HUBO UN ERROR EN A.getTypes');
	};
}

export function getPokemonsByName(input) {
	return async (dispatch) => {
		return await axios
			.get(`http://localhost:3001/findpoke?name=${input}`)
			.then((res) => dispatch({ type: R.GET_POKEMONS, payload: res.data }))
			.catch('HUBO UN ERROR EN A.getPokemons');
	};
}

export function filterByTypes(payload) {
	return { type: R.FILTER_TYPE, payload };
}

export function filterCreatedPokemons(payload) {
	return { type: R.FILTER_CREATED, payload };
}

export function filteredByAlphabet(payload) {
	return { type: R.FILTERED_ALPHABET, payload };
}

export function filteredByStrength(payload) {
	return { type: R.FILTERED_STRENGTH, payload };
}

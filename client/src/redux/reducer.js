export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const FILTER_TYPE = 'FILTER_TYPE';
export const FILTER_CREATED = 'FILTER_CREATED';
export const FILTERED_ALPHABET = 'FILTERED_ALPHABET';
export const FILTERED_STRENGTH = 'FILTERED_STRENGTH';

const initialState = {
	allpokemons: [],
	pokemons: [],
	types: [],
	dbPokemons: [],
	dbTypes: [],
	detail: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
				allpokemons: action.payload,
			};
		case GET_TYPES:
			return {
				...state,
				types: action.payload,
			};
		case FILTER_TYPE:
			const allpokemons = state.allpokemons;
			const statusFiltered =
				action.payload === 'All'
					? allpokemons
					: allpokemons.filter((e) => e.type?.includes(action.payload)).length
					? allpokemons.filter((e) => e.type?.includes(action.payload))
					: 'No se encontraron pokemons con ese tipo';
			return {
				...state,
				pokemons: statusFiltered,
			};
		case FILTER_CREATED:
			const allpokemons2 = state.allpokemons;
			const statusFiltered2 =
				action.payload === 'All'
					? allpokemons2
					: action.payload === 'orig'
					? allpokemons2.filter((e) => typeof e.id === 'number')
					: allpokemons2.filter((e) => typeof e.id === 'string');
			return {
				...state,
				pokemons: statusFiltered2,
			};
		case FILTERED_ALPHABET:
			const Pokemons3 = state.pokemons;
			const statusFiltered3 =
				action.payload === 'All'
					? Pokemons3
					: action.payload === 'asc'
					? Pokemons3.sort((a, b) => a.name.localeCompare(b.name))
					: Pokemons3.sort((a, b) => b.name.localeCompare(a.name));
			return {
				...state,
				pokemons: statusFiltered3,
			};
		case FILTERED_STRENGTH:
			const Pokemons4 = state.pokemons;
			const statusFiltered4 =
				action.payload === 'All'
					? Pokemons4
					: action.payload === 'asc'
					? Pokemons4.sort((a, b) => (a.strength > b.strength ? 1 : -1))
					: Pokemons4.sort((a, b) => (a.strength > b.strength ? -1 : 1));
			return {
				...state,
				pokemons: statusFiltered4,
			};

		default:
			return state;
	}
}

export default reducer;

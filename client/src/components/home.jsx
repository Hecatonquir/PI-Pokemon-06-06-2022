import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tarjeta from './Tarjeta';
import SearchBar from './searchbar';

import Paginado from './paginado.jsx';
import * as A from '../redux/actions';
import * as Filter from './Filtros';

import './styles/home.css';

export default function Home() {
	const dispatch = useDispatch();
	/* const allpokemons = useSelector((state) => state.allpokemons); */

	const Pokemons = useSelector((state) => state.pokemons);
	// eslint-disable-next-line no-unused-vars
	const CARGADOR_DE_POKEMONS = Pokemons;
	// ESTO SOLO LO PONGO PORQUE SINO, POKEMONS NO SE TERMINA DE CARGAR NUNCA. (TAMBIÉN PODRÏA HACER UN CONSOLE.LOG PERO NO QUIERO ENSUCIAR LA CONSOLA)
	/* console.log('🚀 ~ file: home.jsx ~ line 19 ~ Home ~ Pokemons', Pokemons); */

	const [currentPage, setCurrentPage] = useState(1);
	// eslint-disable-next-line no-unused-vars
	const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
	// eslint-disable-next-line no-unused-vars
	const [orden, setOrden] = useState('');
	const indexOfLastPokemon = currentPage * pokemonsPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
	const currentPokemons = Pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

	const paginado = (pagenumber) => {
		setCurrentPage(pagenumber);
	};

	useEffect(() => {
		dispatch(A.getPokemons());
		dispatch(A.getTypes());
	}, [dispatch]);

	let handleClick = (e) => {
		e.preventDefault();
		dispatch(A.getPokemons());
	};

	return (
		<main className='home'>
			<br />
			<h1> ESTAS EN HOME </h1>
			<h1>
				<Link to='/pokemon'>Crear Pokemon</Link>
			</h1>
			<button onClick={(e) => handleClick(e)}> Recargar todos los Pokemons </button>
			<SearchBar />
			<div>
				<Filter.ByTypes />
				<Filter.Created />
				<Filter.ByAlphabet setCurrentPage={setCurrentPage} setOrden={setOrden} />
				<Filter.ByStrength setCurrentPage={setCurrentPage} setOrden={setOrden} />
			</div>
						<br />
			<Paginado pokemonsPerPage={pokemonsPerPage} Pokemons={Pokemons.length} paginado={paginado} />
			<br />
			{/* {console.log(currentPokemons)} */}
			{typeof currentPokemons != 'string' ? (
				currentPokemons.length ? (
					<section className='Tarjetas'>
						{currentPokemons.map((e) => {
							return <Tarjeta key={e.id} image={e.image} name={e.name} id={e.id} type={e.type} />;
						})}
					</section>
				) : (
					<div className='loading'>
						<img
							className='loading'
							src='https://c.tenor.com/WkesrjxP9rAAAAAi/pokemon-pikachu.gif'
							alt='pikaball'
						/>
						<h2 className='loading'>Loading...</h2>
					</div>
				)
			) : (
				<h2>No se encontraron pokemons con ese tipo</h2>
			)}

			<Paginado pokemonsPerPage={pokemonsPerPage} Pokemons={Pokemons.length} paginado={paginado} />
			<br />
		</main>
	);
}

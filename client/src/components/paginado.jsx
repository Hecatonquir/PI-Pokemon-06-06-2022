import React from 'react';
import './styles/home.css';

export default function Paginado({ pokemonsPerPage, Pokemons, paginado }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(Pokemons / pokemonsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className='paginado'>
				{pageNumbers &&
					pageNumbers.map((num) => {
						return (
							<li className='paginado' key={num}>
								<button onClick={() => paginado(num)}>{num}</button>
							</li>
						);
					})}
			</ul>
		</nav>
	);
}

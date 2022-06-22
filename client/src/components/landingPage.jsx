import React from 'react';
import { Link } from 'react-router-dom';
import './styles/landingPage.css';

export default function LandingPage() {
	return (
		<main className='landing'>
			<br />
			<h1> Bienvenido a mi Api de Pokemon! </h1>
			<Link to={'/home'}>
				<button>
					<h3>Ingresar</h3>
				</button>
			</Link>
		</main>
	);
}

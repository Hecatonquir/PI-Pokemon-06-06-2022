import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import LandingPage from './components/landingPage';
import Error from './components/error';


function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/home' component={Home} />
				<Route component={Error} />
			</Switch>
		</div>
	);
}

export default App;

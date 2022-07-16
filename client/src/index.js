import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
/* ------------ Configurations for Deploy ----------- */
import axios from 'axios';
/*import dotenv from 'dotenv'; 	REACT_APP_API
dotenv.config(); 				REACT_APP_API */
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';
console.log(
	'🐲🐲🐲 / file: index.js / line 14 / process.env.REACT_APP_API',
	process.env.REACT_APP_API
);

/* ------------ End of Deploy config ---------------- */
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

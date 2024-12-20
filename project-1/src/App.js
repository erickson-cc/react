import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
	render(){
		return(
		<>
			<div className="App">
			<header className="App-Header">
			<img src = {logo} className="App-logo" alt="logo"/>

			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>

			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
				Aprenda React
			</a>
			</header>
			</div>

			<div>by: Erickson G. Müller</div>

		</>
		);
	}
}

export default App;

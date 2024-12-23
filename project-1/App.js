import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
	//Construtor
	constructor(props){
		super(props);
		// colocar aqui funções que não são arrow functions
		this.handlePClick = this.handlePClick.bind(this);
		this.state = {
			name: 'Erickson G. Müller',
			counter: 0
		};
		// posso remover o construtor se os métodos forem arrow functions
	}
	//Funções
	alerttest(){
		alert('teste de alerta')
	}
	handlePClick(){
		this.setState({name: 'Erickson Müller'});
	}
	handleAClick = (event) => {
		event.preventDefault();
		const {counter} = this.state;
		const nextCounter = counter+1;
		this.setState({counter: nextCounter});
	}
	//Render, toda vez que atualiza o estado é chamada
	render(){
		//const name = this.state.name;
		const {name, counter} = this.state;//destructuring
		return(
		<>
			<div className="App">
			<header className="App-Header">
			<img src = {logo} className="App-logo" alt="logo"/>

			<p onClick={this.handleAClick}> Edit {counter} <code>src/App.js</code> and save to reload.  </p>

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

			<div onClick = {this.alerttest}>by: {name}</div>

		</>
		);
	}
}

export default App;

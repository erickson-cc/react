import './App.css';
import { Component } from 'react';

class App extends Component{
	state = {
		posts: [
			{ id: 1,
			title: 'blank',
			body: 'blank',
			},

		]
	};
	render(){
		//const name = this.state.name;
		const { posts } = this.state;//destructuring
		return(
			<div className="App">
				{posts.map(post => (
					<div key={post.id}>
						<h1>{post.title}</h1>
						<p>{post.body}</p>
					</div>
				))}
				
			</div>
		);
	}
}

export default App;

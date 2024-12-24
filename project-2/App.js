import './App.css';
import { Component } from 'react';

class App extends Component{
	state = {
		counter: 0,
		posts: [
			{ id: 1,
			title: 'blank',
			body: 'blank',
			},
			{ id: 2,
			title: 'blank',
			body: 'blank',
			},
			{ id: 3,
			title: 'blank',
			body: 'blank',
			},

		]
	};
	componentDidMount(){
		this.handleTimeout();
	}
	componentDidUpdate(){
		this.handleTimeout();
	}
	componentWillUnmount() {
		clearTimeout(this.timeoutUpdate);
	}
	timeoutUpdate = null;
	handleTimeout = () => {
		const {posts,counter} = this.state;
		posts[0].title = "O título mudou";
		this.timeoutUpdate = setTimeout(() => {
			this.setState({
				posts,
				counter: counter+1
			})
		}, 1)
	}
	render(){
		//const name = this.state.name;
		const {posts,counter} = this.state;//destructuring
		return(
			<div className="App">
				<h1>{counter}</h1>
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

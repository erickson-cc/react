import './App.css';
import { Component } from 'react';

class App extends Component{
	state = {
		posts: []
	};
	componentDidMount(){
		this.loadPosts();
	}
	componentDidUpdate(){
	}
	componentWillUnmount() {
	}
	loadPosts = async () => {
		const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
		const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");
		const [photos, posts] = await Promise.all([postsResponse]);
		const postsJson = await posts.json();
		const photosJson = await photos.json();
		const postsAndPhotos = postsJson.map((post,index) =>{
			return {...post, cover: photosJson[index].url}
		});
		this.setState({posts:postsAndPhotos});
	}
	timeoutUpdate = null;
	handleTimeout = () => {
		const {posts} = this.state;
		posts[0].title = "O título mudou";
		this.timeoutUpdate = setTimeout(() => {
			this.setState({
				posts,
			})
		}, 1)
	}
	render(){
		//const name = this.state.name;
		const {posts} = this.state;//destructuring
		return(
			<section className = "container">
				<div className="posts">
					{posts.map(post => (
						<div className="post">
							<div key={post.id} className="post-content">
								<h1>{post.title}</h1>
								<p>{post.body}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		);
	}
}

export default App;

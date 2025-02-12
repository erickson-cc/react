// import './App.css';
import "./templates/home/styles.css"


import {Component} from 'react';
// import {PostCard} from "./comp/PostCard";
import {Posts} from "./comp/Posts";


import {loadPosts} from "./util/loadPosts";


class App extends Component{
	state = {
		posts: []
	};
	async componentDidMount(){
		await this.loadPosts();
	}
	loadPosts = async () => {
		const postsAndPhotos = await loadPosts();
		this.setState({posts:postsAndPhotos});
	}
	render(){

		const {posts} = this.state;//destructuring
		return(
			<section className = "container">
				<Posts posts = {posts} />
			</section>
		);
	}
}

export default App;

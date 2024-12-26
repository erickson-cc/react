import '../../styles/global-styles.css';
import {Component} from 'react';
//import {PostCard} from "./comp/PostCard";
import {Posts} from "../../comp/Posts";
import {loadPosts} from "../../util/loadPosts";

export class Home extends Component{
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
		const {posts} = this.state;
		return(
			<section className = "container">
				<Posts posts={posts} />
			</section>
		);
	}
}


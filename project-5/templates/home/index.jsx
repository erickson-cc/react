import '../../styles/global-styles.css';
//import "./styles.css";
import {Component} from 'react';
import {Posts} from "../../comp/Posts";
import {loadPosts} from "../../util/loadPosts";
import {Button} from "../../comp/Button";
export class Home extends Component{
	state = {
		posts: [],
		allPosts: [],
		page: 0,
		postsPerPage:53,
	};
	async componentDidMount(){
		await this.loadPosts();
	}
	loadPosts = async () => {
		const {page, postsPerPage } = this.state;
		const postsAndPhotos = await loadPosts();
		this.setState({
			posts:postsAndPhotos.slice(page,postsPerPage),
			allPosts: postsAndPhotos,
		});
	}
	loadMorePosts = () => {
		const {
			page,
			postsPerPage,
			allPosts,
			posts
		} = this.state;
		const nextPage = page + postsPerPage;
		const nextPosts = allPosts.slice(nextPage, nextPage+postsPerPage);
		posts.push(...nextPosts);
		this.setState({posts,page:nextPage});
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
		const {posts, page, postsPerPage, allPosts} = this.state;
		const noMorePosts = page + postsPerPage >= allPosts.length;
		return(
			<section className = "container">
				<Posts posts={posts} />
				<div class="button-container">
				<Button
					text="Load More" 
					click={this.loadMorePosts}
					disabled={noMorePosts}
					/>
				</div>
			</section>
		);
	}
}


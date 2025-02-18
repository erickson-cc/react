import '../../styles/global-styles.css';
import {useState} from "react";
import {useEffect} from "react";
import {useCallback} from "react";

import {Posts} from "../../comp/Posts";
import {SearchBar} from "../../comp/SearchBar";
import {loadPosts} from "../../util/loadPosts";
import {Button} from "../../comp/Button";
export const Home = () => {
	const [posts, setPosts] = useState([]);
	const [allPosts, setAllPosts] = useState([]);
	const [page, setPage] = useState(0);
	const [postsPerPage] = useState(12);
	const [searchValue, setSearchValue] = useState('');
	const filteredPosts = !!searchValue ? 
		allPosts.filter(post =>{
			return post.title.toLowerCase().includes(searchValue.toLowerCase());
		})
		:
		posts;//operação ternária mdn
	const noMorePosts = page + postsPerPage >= allPosts.length;
	const handleChange = (e) => {
		const {value} = e.target;
		setSearchValue(value);
	}
	const handleLoadPosts = useCallback (async (page, postsPerPage) => {
		const postsAndPhotos = await loadPosts();
		setPosts(postsAndPhotos.slice(page, postsPerPage));
		setAllPosts(postsAndPhotos);
	}, [])
	const loadMorePosts = () => {
		const nextPage = page + postsPerPage;
		const nextPosts = allPosts.slice(nextPage, nextPage+postsPerPage);
		posts.push(...nextPosts);

		setPosts(posts);
		setPage(nextPage);
	}
	useEffect(() => {
		// componentDidMount
		handleLoadPosts(0, postsPerPage);
	}, [handleLoadPosts, postsPerPage]);
	return(
		<section className = "container">
			<div className="search-container">
				<SearchBar searchValue={searchValue} handleChange = {handleChange}/>
				{!!searchValue && (
					<h1> Search Value: {searchValue}</h1>
				)}
			</div>
			{filteredPosts.length >0 && (
			<Posts posts={filteredPosts} />
			)}
			{filteredPosts.length == 0 && (
				<p> Não encontrado </p>
			)}
			<div className="button-container">
				{!searchValue && (
					<Button
						text="Load More" 
						click={loadMorePosts}
						disabled={noMorePosts}
					/>
				)}
			</div>
		</section>
	);

}
// export class Home2 extends Component{
// 	state = {
// 		posts: [],
// 		allPosts: [],
// 		page: 0,
// 		postsPerPage: 12,
// 		searchValue:  '',
// 	};
// 	async componentDidMount(){
// 		await this.loadPosts();
// 	}
// 	loadPosts = async () => {
// 		const {page, postsPerPage } = this.state;
// 		const postsAndPhotos = await loadPosts();
// 		this.setState({
// 			posts:postsAndPhotos.slice(page,postsPerPage),
// 			allPosts: postsAndPhotos,
// 		});
// 	}
// 	loadMorePosts = () => {
// 		const {
// 			page,
// 			postsPerPage,
// 			allPosts,
// 			posts
// 		} = this.state;
// 		const nextPage = page + postsPerPage;
// 		const nextPosts = allPosts.slice(nextPage, nextPage+postsPerPage);
// 		posts.push(...nextPosts);
// 		this.setState({posts,page:nextPage});
// 	}
// 	timeoutUpdate = null;
// 	handleTimeout = () => {
// 		const {posts} = this.state;
// 		posts[0].title = "O título mudou";
// 		this.timeoutUpdate = setTimeout(() => {
// 			this.setState({
// 				posts,
// 			})
// 		}, 1)
// 	}
// 	handleChange = (e) => {
// 		const {value} = e.target;
// 		this.setState({searchValue : value});
// 		// (e) => console.log(e.target.value)
// 	}
// 	render(){
// 		//const name = this.state.name;
// 		const {posts, page, postsPerPage, allPosts, searchValue} = this.state;
// 		const noMorePosts = page + postsPerPage >= allPosts.length;
// 		const filteredPosts = !!searchValue ? 
// 			allPosts.filter(post =>{
// 				return post.title.toLowerCase().includes(searchValue.toLowerCase());
// 			})
// 			:
// 			posts;//operação ternária mdn
// 		return(
// 			<section className = "container">
// 				<div className="search-container">
// 					<SearchBar searchValue={searchValue} handleChange = {this.handleChange}/>
// 					{!!searchValue && (
// 						<h1> Search Value: {searchValue}</h1>
// 					)}
// 				</div>
// 				{filteredPosts.length >0 && (
// 				<Posts posts={filteredPosts} />
// 				)}
// 				{filteredPosts.length == 0 && (
// 					<p> Não encontrado </p>
// 				)}
// 				<div className="button-container">
// 					{!searchValue && (
// 						<Button
// 							text="Load More" 
// 							click={this.loadMorePosts}
// 							disabled={noMorePosts}
// 						/>
// 					)}
// 				</div>
// 			</section>
// 		);
			
// 	}
// }


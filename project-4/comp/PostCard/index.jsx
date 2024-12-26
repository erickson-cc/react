export const PostCard = (props) => {
	//console.log(props);
	const post = props.post;
	return(
		<div className="post">
		<img src={post.cover} alt={post.title} />
			<div className="post-content">
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</div>
		</div>
	);
}

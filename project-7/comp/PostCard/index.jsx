export const PostCard = ({title, cover, body, id}) => (
	<div className="post">
		<img src={cover} alt={title}/>
		<div className="post-content">
			<h1>
				{title}
			</h1>
			<p>
				{body}
			</p>
			<div className="post-number">
				<p>{id}</p>
			</div>
		</div> 
	</div>
);

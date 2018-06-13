import React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Moment from 'moment';

const BlogCard = (props) => {
	const { slug, date } = props;
	const formattedDate = Moment(date).format('MMMM D, YYYY');
	return (
		<div className="card col-md-5 mr-2 mb-2">
			<div className="card-body">
				<h5 className="card-title"><Link to={`/blog/${slug}`}>{props.title}</Link></h5>
				<h6 className="card-subtitle mb-2 text-muted">{`${formattedDate} by Modulation Labs`}</h6>
				<ReactMarkdown source={props.body} className="card-text" />
				{/* <a className="card-link">Card link</a>
				<a className="card-link">Another link</a> */}
			</div>
		</div>
	)
}

export default BlogCard;

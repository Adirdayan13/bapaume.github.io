import React from 'react';

const GallerySquare = (props) => {
	const { title, name, src, handleClick } = props;
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 pt-4">
			<h1>{title}</h1>
			<button
				style={{ padding: '0 0 0 0', border: 'none' }}
				type="button"
				onClick={() => {
					handleClick({ name, title, src })
				}}
			>
				<img
					src={src}
					className="gallery-pic"
					alt="gallery"
					/>
			</button>
		</div>
	)
}

export default GallerySquare;

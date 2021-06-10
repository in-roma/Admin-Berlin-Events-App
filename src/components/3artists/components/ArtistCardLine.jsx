import React from 'react';

export default function ArtistCardLine({
	label,
	defaultValue,
	onChange,
	id,
	name,
	typeInput,
	index,
	imagesUrl,
}) {
	return (
		<div className="artist-card-line">
			<label>{label}</label>
			<input
				index={index}
				type={typeInput}
				onChange={onChange}
				defaultValue={defaultValue}
				id={id}
				name={name}
				imagesUrl={imagesUrl}
			></input>
		</div>
	);
}

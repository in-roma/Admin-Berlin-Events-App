import React from 'react';

export default function EventCardLine({
	label,
	defaultValue,
	onChange,
	id,
	name,
	typeInput,
	index,
}) {
	return (
		<div className="event-card-line">
			<label>{label}</label>
			<input
				index={index}
				type={typeInput}
				onChange={onChange}
				defaultValue={defaultValue}
				id={id}
				name={name}
			></input>
		</div>
	);
}

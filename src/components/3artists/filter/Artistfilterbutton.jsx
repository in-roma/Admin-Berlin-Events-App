import React from 'react';

export default function Artistfilterbutton({ name, onClick }) {
	return (
		<button name={name} onClick={onClick} className="artist-filter-button">
			{name}
		</button>
	);
}

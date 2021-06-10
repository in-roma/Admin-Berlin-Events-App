import React from 'react';

export default function Venuefilterbutton({ name, onClick }) {
	return (
		<button name={name} onClick={onClick} className="venue-filter-button">
			{name}
		</button>
	);
}

import React from 'react';

export default function Eventfilterbutton({ name, onClick }) {
	return (
		<button name={name} onClick={onClick} className="event-filter-button">
			{name}
		</button>
	);
}

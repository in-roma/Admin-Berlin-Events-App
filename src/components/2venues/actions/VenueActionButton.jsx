import React from 'react';

export default function VenueActionButton({ name, onClick }) {
	return (
		<button name={name} onClick={onClick} className="venue-action-button">
			{name}
		</button>
	);
}

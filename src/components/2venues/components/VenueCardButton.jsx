import React from 'react';

export default function VenueCardButton({ label, onClick }) {
	return (
		<button type="button" onClick={onClick} className="venue-card-button">
			{label}
		</button>
	);
}

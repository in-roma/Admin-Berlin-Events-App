import React from 'react';

export default function VenueCardButtonSubmit({ label, onSubmit }) {
	return (
		<button type="submit" onSubmit={onSubmit} className="venue-card-button">
			{label}
		</button>
	);
}

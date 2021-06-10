import React from 'react';

export default function EventCardButtonSubmit({ label, onSubmit }) {
	return (
		<button type="submit" onSubmit={onSubmit} className="event-card-button">
			{label}
		</button>
	);
}

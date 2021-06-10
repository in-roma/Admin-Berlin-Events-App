import React from 'react';

export default function EventCardButton({ label, onClick }) {
	return (
		<button type="button" onClick={onClick} className="event-card-button">
			{label}
		</button>
	);
}

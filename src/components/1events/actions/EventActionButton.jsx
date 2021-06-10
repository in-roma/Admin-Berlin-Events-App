import React from 'react';

export default function EventActionButton({ name, onClick }) {
	return (
		<button name={name} onClick={onClick} className="event-action-button">
			{name}
		</button>
	);
}

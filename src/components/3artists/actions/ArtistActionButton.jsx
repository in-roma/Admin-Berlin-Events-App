import React from 'react';

export default function ArtistActionButton({ name, onClick }) {
	return (
		<button name={name} onClick={onClick} className="artist-action-button">
			{name}
		</button>
	);
}

import React from 'react';

export default function ArtistCardButton({ label, onClick }) {
	return (
		<button type="button" onClick={onClick} className="artist-card-button">
			{label}
		</button>
	);
}

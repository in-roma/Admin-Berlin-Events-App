import React from 'react';

export default function ArtistCardButtonSubmit({ label, onSubmit }) {
	return (
		<button
			type="submit"
			onSubmit={onSubmit}
			className="artist-card-button"
		>
			{label}
		</button>
	);
}

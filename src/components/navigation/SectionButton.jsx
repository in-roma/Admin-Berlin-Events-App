import React from 'react';

export default function SectionButton({ name, onClick }) {
	return (
		<>
			<button
				className="section-button"
				onClick={onClick}
				key={'button-' + name}
			>
				{name}
			</button>
		</>
	);
}

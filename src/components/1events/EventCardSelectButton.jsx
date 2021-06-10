import React, { Component } from 'react';
import Select from 'react-select';

export default function EventCardSelectButton({ options, label, onChange }) {
	const customStyles = {
		control: () => ({
			width: 96,
			height: 32,
			fontSize: 11,
			marginBottom: 0,
			color: '#9d9d9d',
		}),

		clearIndicator: {},
	};

	return (
		<Select
			options={options}
			onChange={onChange}
			styles={customStyles}
			placeholder={label}
			style="event-card-button"
			isSearchable={false}
			components={{
				DropdownIndicator: () => null,
				IndicatorSeparator: () => null,
			}}
		/>
	);
}
